export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  zipCode?: string;
  status: 'active' | 'inactive' | 'lead';
  source?: string;
  createdAt: string;
  updatedAt: string;
  tags?: string[];
  notes?: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  status: 'new' | 'contacted' | 'qualified' | 'proposal' | 'negotiation' | 'won' | 'lost';
  source: string;
  value?: number;
  probability?: number;
  expectedCloseDate?: string;
  assignedTo?: string;
  createdAt: string;
  updatedAt: string;
  notes?: string;
}

export interface Activity {
  id: string;
  type: 'call' | 'email' | 'meeting' | 'task' | 'note';
  title: string;
  description: string;
  relatedTo: 'customer' | 'lead';
  relatedId: string;
  relatedName: string;
  status: 'pending' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  completedDate?: string;
  createdAt: string;
  createdBy?: string;
}

export interface Deal {
  id: string;
  name: string;
  customerId: string;
  customerName: string;
  value: number;
  stage: 'prospecting' | 'qualification' | 'proposal' | 'negotiation' | 'closed-won' | 'closed-lost';
  probability: number;
  expectedCloseDate: string;
  actualCloseDate?: string;
  createdAt: string;
  updatedAt: string;
  notes?: string;
}

export interface DashboardStats {
  totalCustomers: number;
  activeLeads: number;
  totalDeals: number;
  dealsValue: number;
  activitiesThisWeek: number;
  conversionRate: number;
}
