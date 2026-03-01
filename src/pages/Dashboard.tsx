import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, TrendingUp, DollarSign, Activity, Target, Percent } from 'lucide-react';
import { getCustomers, getLeads, getActivities, getDeals } from '@/lib/storage';
import { DashboardStats } from '@/types/crm';

const Dashboard = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalCustomers: 0,
    activeLeads: 0,
    totalDeals: 0,
    dealsValue: 0,
    activitiesThisWeek: 0,
    conversionRate: 0,
  });

  useEffect(() => {
    const customers = getCustomers();
    const leads = getLeads();
    const activities = getActivities();
    const deals = getDeals();

    const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const activitiesThisWeek = activities.filter(
      (a) => new Date(a.createdAt) > weekAgo
    ).length;

    const activeLeadsCount = leads.filter((l) => 
      ['new', 'contacted', 'qualified', 'proposal', 'negotiation'].includes(l.status)
    ).length;

    const wonLeads = leads.filter((l) => l.status === 'won').length;
    const conversionRate = leads.length > 0 ? (wonLeads / leads.length) * 100 : 0;

    const totalDealsValue = deals.reduce((sum, deal) => sum + deal.value, 0);

    setStats({
      totalCustomers: customers.length,
      activeLeads: activeLeadsCount,
      totalDeals: deals.length,
      dealsValue: totalDealsValue,
      activitiesThisWeek,
      conversionRate: Math.round(conversionRate),
    });
  }, []);

  const statCards = [
    {
      title: 'Total Customers',
      value: stats.totalCustomers,
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Active Leads',
      value: stats.activeLeads,
      icon: Target,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Total Deals',
      value: stats.totalDeals,
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Deals Value',
      value: `₹${stats.dealsValue.toLocaleString()}`,
      icon: DollarSign,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      title: 'Activities This Week',
      value: stats.activitiesThisWeek,
      icon: Activity,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
    },
    {
      title: 'Conversion Rate',
      value: `${stats.conversionRate}%`,
      icon: Percent,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">CRM Dashboard</h1>
          <p className="text-gray-600">Welcome to your Customer Relationship Management system</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {statCards.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {getActivities().slice(0, 5).map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3 pb-3 border-b last:border-0">
                    <div className={`p-2 rounded-lg ${
                      activity.status === 'completed' ? 'bg-green-50' : 'bg-yellow-50'
                    }`}>
                      <Activity className={`h-4 w-4 ${
                        activity.status === 'completed' ? 'text-green-600' : 'text-yellow-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{activity.title}</p>
                      <p className="text-xs text-gray-500">{activity.relatedName}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${
                      activity.status === 'completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {activity.status}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Deals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {getDeals().slice(0, 5).map((deal) => (
                  <div key={deal.id} className="flex items-center justify-between pb-3 border-b last:border-0">
                    <div>
                      <p className="font-medium text-sm">{deal.name}</p>
                      <p className="text-xs text-gray-500">{deal.customerName}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-sm">₹{deal.value.toLocaleString()}</p>
                      <span className={`text-xs px-2 py-1 rounded ${
                        deal.stage === 'closed-won' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {deal.stage}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
