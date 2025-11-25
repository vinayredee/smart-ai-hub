# 🛠️ AI Compass Maintenance Guide

This guide is designed to help you maintain, update, and extend AI Compass easily.

## 📂 Project Structure

The project is organized as a monorepo:

- **`frontend/`**: React application (UI, components, styles)
  - `src/data/aiTools.ts`: **The most important file.** Contains all tool data and categories.
  - `src/components/`: React components.
- **`backend/`**: Node.js/Express server
  - `server.js`: API endpoints and database logic.
- **`database/`**: Contains `database.sqlite`.
- **`deployment/`**: Configuration files for Vercel/Netlify.

---

## ➕ How to Add a New AI Tool

1.  Open `frontend/src/data/aiTools.ts`.
2.  Add a new object to the `aiTools` array.
3.  **Format:**
    ```typescript
    {
      id: 'tool-id',
      name: 'Tool Name',
      description: 'Short description',
      category: categories.find(c => c.id === 'category-id'),
      website: 'https://example.com',
      pricing: { type: 'freemium' }, // or 'free', 'paid'
      features: ['Feature 1', 'Feature 2'],
      useCases: ['Case 1', 'Case 2'],
      accuracy: 9,
      easeOfUse: 9,
      performance: 9,
      rating: 4.8,
      reviewCount: 1000,
      isPopular: true,
      isNew: false,
      tags: ['tag1', 'tag2'],
      limitations: ['Limitation 1'],
      freeFeatures: ['Free thing 1'],
      premiumFeatures: ['Paid thing 1'],
      lastUpdated: '2024-01-01'
    }
    ```
4.  **Important:** The database automatically syncs with this file when the server restarts. You don't need to manually edit the SQLite database.

---

## 🏷️ How to Add a New Category

1.  Open `frontend/src/data/aiTools.ts`.
2.  Add a new object to the `categories` array at the top of the file.
    ```typescript
    {
      id: 'new-category',
      name: 'New Category Name',
      description: 'Description of category',
      icon: 'IconName', // Must be a valid Lucide React icon name
      color: 'bg-gradient-to-r from-color1-500 to-color2-500'
    }
    ```
3.  Update `frontend/src/components/Header.tsx` if you want it to appear in specific navigation menus (though it automatically appears in the dropdown).

---

## 🚀 How to Deploy

We use **Vercel** for deployment.

### First Time Deployment
Run this command in the root directory:
```bash
vercel
```
Follow the prompts (Say "No" to override settings).

### Deploying Updates
After making changes, simply run:
```bash
vercel --prod
```

---

## 💻 Local Development

To run the project locally:

1.  **Start everything (Frontend + Backend):**
    ```bash
    npm run dev
    ```
    Access app at: `http://localhost:3000`

2.  **Install new dependencies:**
    If you add a package, make sure to install it in the correct folder:
    ```bash
    cd frontend && npm install package-name
    # OR
    cd backend && npm install package-name
    ```
