# Saree CRM - Customer Relationship Management System

## About

A comprehensive Customer Relationship Management (CRM) system built with modern web technologies. This CRM helps businesses manage customer relationships, track leads, manage activities, and close deals efficiently.

## Features

### 📊 Dashboard
- Real-time statistics and KPIs
- Total customers, active leads, and deals overview
- Activities tracking this week
- Conversion rate analytics
- Recent activity feed
- Top deals visualization

### 👥 Customer Management
- Add, edit, and delete customers
- Comprehensive customer profiles with contact information
- Customer status tracking (Active, Inactive, Lead)
- Search and filter capabilities
- Tag and categorization system
- Notes and communication history

### 🎯 Lead Management
- Lead pipeline tracking
- Multiple lead stages (New, Contacted, Qualified, Proposal, Negotiation, Won, Lost)
- Lead value and probability tracking
- Expected close date monitoring
- Lead source tracking
- Assignment to team members

### 📅 Activity Management
- Track calls, emails, meetings, tasks, and notes
- Priority levels (Low, Medium, High)
- Status tracking (Pending, Completed, Cancelled)
- Due date reminders
- Activity history for customers and leads
- Quick status updates

## Technologies Used

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **UI Components**: shadcn/ui (Radix UI)
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **State Management**: React Query
- **Forms**: React Hook Form + Zod
- **Data Storage**: LocalStorage (persistent client-side storage)

## Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Local Development

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd saree-suthra-elegance

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```sh
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

## Deployment

This CRM can be deployed to various platforms:

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will auto-detect Vite and deploy
4. Your CRM will be live at `https://your-project.vercel.app`

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build settings are configured in `netlify.toml`
4. Your CRM will be live at `https://your-project.netlify.app`

### Manual Deployment
After running `npm run build`, upload the `dist` folder to any static hosting service.

## Usage

### Sample Data
The CRM comes pre-populated with sample data including:
- 2 sample customers
- 2 sample leads
- 2 sample activities
- 1 sample deal

### Adding Your Data
1. Navigate to the respective section (Customers, Leads, or Activities)
2. Click the "Add" button
3. Fill in the form with your data
4. Submit to save

### Managing Data
- **Edit**: Click the pencil icon on any card
- **Delete**: Click the trash icon (confirmation required)
- **Search**: Use the search bar to filter results
- **Filter**: Use status filters to narrow down results

## Data Persistence

All data is stored in the browser's LocalStorage, ensuring:
- ✅ No backend required
- ✅ Data persists across sessions
- ✅ Fast performance
- ✅ Privacy-friendly
- ⚠️ Note: Data is stored locally per browser/device

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── ui/          # shadcn/ui components
│   └── CRMNav.tsx   # Navigation component
├── pages/           # Page components
│   ├── Dashboard.tsx
│   ├── Customers.tsx
│   ├── Leads.tsx
│   └── Activities.tsx
├── types/           # TypeScript type definitions
│   └── crm.ts
├── lib/            # Utility functions
│   └── storage.ts  # LocalStorage operations
└── App.tsx         # Main app component
```

## Contributing

This is a private project. For contribution guidelines, please contact the repository owner.

## License

Private - All rights reserved

## Support

For support or questions, please contact the development team.
