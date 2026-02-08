# Apeel Sciences Digital Performance Dashboard

## Deployment Instructions for Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Navigate to project directory:
```bash
cd apeel-dashboard-deploy
```

3. Install dependencies:
```bash
npm install
```

4. Deploy to Vercel:
```bash
vercel
```

5. Follow the prompts to link/create your project

### Option 2: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import this directory (or push to GitHub and import from there)
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

### Option 3: Deploy from GitHub

1. Push this directory to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js configuration
6. Click "Deploy"

## Local Development

Run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

## Project Structure

```
apeel-dashboard-deploy/
├── app/
│   ├── globals.css       # Global styles with Tailwind
│   ├── layout.js         # Root layout
│   └── page.js          # Main dashboard component
├── package.json          # Dependencies
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── postcss.config.js     # PostCSS configuration
```

## Technologies

- **Next.js 14** - React framework
- **Tailwind CSS** - Styling
- **Recharts** - Data visualization
- **Lucide React** - Icons

## Dashboard Sections

1. State of Play: Owned Channels
2. Brand Mentions Volume and Top Influencers
3. Earned Media Coverage
4. Top Performing Posts
5. Paid Performance
6. Analysis & Strategic Recommendations
7. Audience Demographics

## Notes

- The dashboard is fully responsive
- All data is embedded in the component (no external API calls)
- Vercel will automatically handle builds and deployments
