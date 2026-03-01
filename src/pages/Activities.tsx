import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Search, Pencil, Trash2, CheckCircle2, Clock, XCircle } from 'lucide-react';
import { Activity } from '@/types/crm';
import { getActivities, addActivity, updateActivity, deleteActivity } from '@/lib/storage';
import { toast } from 'sonner';

const Activities = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingActivity, setEditingActivity] = useState<Activity | null>(null);
  const [formData, setFormData] = useState({
    type: 'task' as const,
    title: '',
    description: '',
    relatedTo: 'customer' as const,
    relatedId: '',
    relatedName: '',
    status: 'pending' as const,
    priority: 'medium' as const,
    dueDate: '',
    createdBy: 'Admin',
  });

  useEffect(() => {
    loadActivities();
  }, []);

  const loadActivities = () => {
    setActivities(getActivities());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingActivity) {
      updateActivity(editingActivity.id, formData);
      toast.success('Activity updated successfully');
    } else {
      addActivity(formData);
      toast.success('Activity added successfully');
    }
    
    loadActivities();
    resetForm();
    setIsDialogOpen(false);
  };

  const handleEdit = (activity: Activity) => {
    setEditingActivity(activity);
    setFormData({
      type: activity.type,
      title: activity.title,
      description: activity.description,
      relatedTo: activity.relatedTo,
      relatedId: activity.relatedId,
      relatedName: activity.relatedName,
      status: activity.status,
      priority: activity.priority,
      dueDate: activity.dueDate || '',
      createdBy: activity.createdBy || 'Admin',
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this activity?')) {
      deleteActivity(id);
      loadActivities();
      toast.success('Activity deleted successfully');
    }
  };

  const handleStatusChange = (id: string, newStatus: Activity['status']) => {
    const updates: Partial<Activity> = { status: newStatus };
    if (newStatus === 'completed') {
      updates.completedDate = new Date().toISOString();
    }
    updateActivity(id, updates);
    loadActivities();
    toast.success('Activity status updated');
  };

  const resetForm = () => {
    setFormData({
      type: 'task',
      title: '',
      description: '',
      relatedTo: 'customer',
      relatedId: '',
      relatedName: '',
      status: 'pending',
      priority: 'medium',
      dueDate: '',
      createdBy: 'Admin',
    });
    setEditingActivity(null);
  };

  const filteredActivities = activities.filter((activity) => {
    const matchesSearch =
      activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.relatedName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || activity.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusIcon = (status: Activity['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="h-5 w-5 text-green-600" />;
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-600" />;
      case 'cancelled':
        return <XCircle className="h-5 w-5 text-red-600" />;
    }
  };

  const getStatusColor = (status: Activity['status']) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      completed: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800',
    };
    return colors[status];
  };

  const getPriorityColor = (priority: Activity['priority']) => {
    const colors = {
      low: 'bg-blue-100 text-blue-800',
      medium: 'bg-orange-100 text-orange-800',
      high: 'bg-red-100 text-red-800',
    };
    return colors[priority];
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Activities</h1>
            <p className="text-gray-600">Track tasks, calls, meetings, and more</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={(open) => {
            setIsDialogOpen(open);
            if (!open) resetForm();
          }}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Add Activity
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>{editingActivity ? 'Edit Activity' : 'Add New Activity'}</DialogTitle>
                <DialogDescription>
                  {editingActivity ? 'Update activity information' : 'Create a new activity to track'}
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="type">Type</Label>
                    <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value as Activity['type'] })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="call">Call</SelectItem>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="meeting">Meeting</SelectItem>
                        <SelectItem value="task">Task</SelectItem>
                        <SelectItem value="note">Note</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="priority">Priority</Label>
                    <Select value={formData.priority} onValueChange={(value) => setFormData({ ...formData, priority: value as Activity['priority'] })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="relatedTo">Related To</Label>
                    <Select value={formData.relatedTo} onValueChange={(value) => setFormData({ ...formData, relatedTo: value as Activity['relatedTo'] })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="customer">Customer</SelectItem>
                        <SelectItem value="lead">Lead</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="relatedName">Related Name *</Label>
                    <Input
                      id="relatedName"
                      value={formData.relatedName}
                      onChange={(e) => setFormData({ ...formData, relatedName: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="status">Status</Label>
                    <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value as Activity['status'] })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="dueDate">Due Date</Label>
                    <Input
                      id="dueDate"
                      type="date"
                      value={formData.dueDate}
                      onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button type="button" variant="outline" onClick={() => {
                    setIsDialogOpen(false);
                    resetForm();
                  }}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                    {editingActivity ? 'Update' : 'Add'} Activity
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardContent className="pt-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search activities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          {filteredActivities.map((activity) => (
            <Card key={activity.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="mt-1">
                      {getStatusIcon(activity.status)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold">{activity.title}</h3>
                        <span className={`text-xs px-2 py-1 rounded ${getStatusColor(activity.status)}`}>
                          {activity.status}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded ${getPriorityColor(activity.priority)}`}>
                          {activity.priority}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">{activity.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="inline-flex items-center">
                          <span className="font-medium mr-1">Type:</span> {activity.type}
                        </span>
                        <span className="inline-flex items-center">
                          <span className="font-medium mr-1">Related:</span> {activity.relatedName} ({activity.relatedTo})
                        </span>
                        {activity.dueDate && (
                          <span className="inline-flex items-center">
                            <span className="font-medium mr-1">Due:</span> {new Date(activity.dueDate).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {activity.status === 'pending' && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleStatusChange(activity.id, 'completed')}
                      >
                        Complete
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(activity)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(activity.id)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredActivities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No activities found</p>
            <p className="text-gray-400 text-sm mt-2">
              {searchTerm ? 'Try a different search term' : 'Add your first activity to start tracking'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Activities;
