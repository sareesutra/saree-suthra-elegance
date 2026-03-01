import { Customer, Lead, Activity, Deal } from '@/types/crm';

const STORAGE_KEYS = {
  CUSTOMERS: 'crm_customers',
  LEADS: 'crm_leads',
  ACTIVITIES: 'crm_activities',
  DEALS: 'crm_deals',
};

// Initialize with sample data if empty
const initializeSampleData = () => {
  if (!localStorage.getItem(STORAGE_KEYS.CUSTOMERS)) {
    const sampleCustomers: Customer[] = [
      {
        id: '1',
        name: 'Priya Sharma',
        email: 'priya.sharma@email.com',
        phone: '+91 98765 43210',
        company: 'Fashion Boutique',
        address: '123 MG Road',
        city: 'Bangalore',
        state: 'Karnataka',
        country: 'India',
        zipCode: '560001',
        status: 'active',
        source: 'Website',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        tags: ['VIP', 'Regular'],
        notes: 'Prefers silk sarees',
      },
      {
        id: '2',
        name: 'Anjali Patel',
        email: 'anjali.patel@email.com',
        phone: '+91 98765 43211',
        company: 'Textile Traders',
        city: 'Mumbai',
        state: 'Maharashtra',
        country: 'India',
        status: 'active',
        source: 'Referral',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        tags: ['Wholesale'],
      },
    ];
    localStorage.setItem(STORAGE_KEYS.CUSTOMERS, JSON.stringify(sampleCustomers));
  }

  if (!localStorage.getItem(STORAGE_KEYS.LEADS)) {
    const sampleLeads: Lead[] = [
      {
        id: '1',
        name: 'Sneha Reddy',
        email: 'sneha.reddy@email.com',
        phone: '+91 98765 43212',
        company: 'Wedding Planners',
        status: 'qualified',
        source: 'Instagram',
        value: 50000,
        probability: 70,
        expectedCloseDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        assignedTo: 'Sales Team',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        notes: 'Interested in bridal collection',
      },
      {
        id: '2',
        name: 'Kavita Singh',
        email: 'kavita.singh@email.com',
        phone: '+91 98765 43213',
        status: 'new',
        source: 'Facebook',
        value: 25000,
        probability: 30,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ];
    localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(sampleLeads));
  }

  if (!localStorage.getItem(STORAGE_KEYS.ACTIVITIES)) {
    const sampleActivities: Activity[] = [
      {
        id: '1',
        type: 'call',
        title: 'Follow-up call',
        description: 'Discuss new collection preferences',
        relatedTo: 'customer',
        relatedId: '1',
        relatedName: 'Priya Sharma',
        status: 'completed',
        priority: 'high',
        completedDate: new Date().toISOString(),
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        createdBy: 'Admin',
      },
      {
        id: '2',
        type: 'meeting',
        title: 'Product showcase',
        description: 'Show bridal collection samples',
        relatedTo: 'lead',
        relatedId: '1',
        relatedName: 'Sneha Reddy',
        status: 'pending',
        priority: 'high',
        dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
        createdAt: new Date().toISOString(),
        createdBy: 'Admin',
      },
    ];
    localStorage.setItem(STORAGE_KEYS.ACTIVITIES, JSON.stringify(sampleActivities));
  }

  if (!localStorage.getItem(STORAGE_KEYS.DEALS)) {
    const sampleDeals: Deal[] = [
      {
        id: '1',
        name: 'Bridal Saree Collection',
        customerId: '1',
        customerName: 'Priya Sharma',
        value: 150000,
        stage: 'negotiation',
        probability: 80,
        expectedCloseDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        notes: 'Large order for wedding season',
      },
    ];
    localStorage.setItem(STORAGE_KEYS.DEALS, JSON.stringify(sampleDeals));
  }
};

// Customer operations
export const getCustomers = (): Customer[] => {
  initializeSampleData();
  const data = localStorage.getItem(STORAGE_KEYS.CUSTOMERS);
  return data ? JSON.parse(data) : [];
};

export const addCustomer = (customer: Omit<Customer, 'id' | 'createdAt' | 'updatedAt'>): Customer => {
  const customers = getCustomers();
  const newCustomer: Customer = {
    ...customer,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  customers.push(newCustomer);
  localStorage.setItem(STORAGE_KEYS.CUSTOMERS, JSON.stringify(customers));
  return newCustomer;
};

export const updateCustomer = (id: string, updates: Partial<Customer>): Customer | null => {
  const customers = getCustomers();
  const index = customers.findIndex((c) => c.id === id);
  if (index === -1) return null;
  
  customers[index] = {
    ...customers[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEYS.CUSTOMERS, JSON.stringify(customers));
  return customers[index];
};

export const deleteCustomer = (id: string): boolean => {
  const customers = getCustomers();
  const filtered = customers.filter((c) => c.id !== id);
  if (filtered.length === customers.length) return false;
  localStorage.setItem(STORAGE_KEYS.CUSTOMERS, JSON.stringify(filtered));
  return true;
};

// Lead operations
export const getLeads = (): Lead[] => {
  initializeSampleData();
  const data = localStorage.getItem(STORAGE_KEYS.LEADS);
  return data ? JSON.parse(data) : [];
};

export const addLead = (lead: Omit<Lead, 'id' | 'createdAt' | 'updatedAt'>): Lead => {
  const leads = getLeads();
  const newLead: Lead = {
    ...lead,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  leads.push(newLead);
  localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(leads));
  return newLead;
};

export const updateLead = (id: string, updates: Partial<Lead>): Lead | null => {
  const leads = getLeads();
  const index = leads.findIndex((l) => l.id === id);
  if (index === -1) return null;
  
  leads[index] = {
    ...leads[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(leads));
  return leads[index];
};

export const deleteLead = (id: string): boolean => {
  const leads = getLeads();
  const filtered = leads.filter((l) => l.id !== id);
  if (filtered.length === leads.length) return false;
  localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(filtered));
  return true;
};

// Activity operations
export const getActivities = (): Activity[] => {
  initializeSampleData();
  const data = localStorage.getItem(STORAGE_KEYS.ACTIVITIES);
  return data ? JSON.parse(data) : [];
};

export const addActivity = (activity: Omit<Activity, 'id' | 'createdAt'>): Activity => {
  const activities = getActivities();
  const newActivity: Activity = {
    ...activity,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };
  activities.push(newActivity);
  localStorage.setItem(STORAGE_KEYS.ACTIVITIES, JSON.stringify(activities));
  return newActivity;
};

export const updateActivity = (id: string, updates: Partial<Activity>): Activity | null => {
  const activities = getActivities();
  const index = activities.findIndex((a) => a.id === id);
  if (index === -1) return null;
  
  activities[index] = { ...activities[index], ...updates };
  localStorage.setItem(STORAGE_KEYS.ACTIVITIES, JSON.stringify(activities));
  return activities[index];
};

export const deleteActivity = (id: string): boolean => {
  const activities = getActivities();
  const filtered = activities.filter((a) => a.id !== id);
  if (filtered.length === activities.length) return false;
  localStorage.setItem(STORAGE_KEYS.ACTIVITIES, JSON.stringify(filtered));
  return true;
};

// Deal operations
export const getDeals = (): Deal[] => {
  initializeSampleData();
  const data = localStorage.getItem(STORAGE_KEYS.DEALS);
  return data ? JSON.parse(data) : [];
};

export const addDeal = (deal: Omit<Deal, 'id' | 'createdAt' | 'updatedAt'>): Deal => {
  const deals = getDeals();
  const newDeal: Deal = {
    ...deal,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  deals.push(newDeal);
  localStorage.setItem(STORAGE_KEYS.DEALS, JSON.stringify(deals));
  return newDeal;
};

export const updateDeal = (id: string, updates: Partial<Deal>): Deal | null => {
  const deals = getDeals();
  const index = deals.findIndex((d) => d.id === id);
  if (index === -1) return null;
  
  deals[index] = {
    ...deals[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEYS.DEALS, JSON.stringify(deals));
  return deals[index];
};

export const deleteDeal = (id: string): boolean => {
  const deals = getDeals();
  const filtered = deals.filter((d) => d.id !== id);
  if (filtered.length === deals.length) return false;
  localStorage.setItem(STORAGE_KEYS.DEALS, JSON.stringify(filtered));
  return true;
};
