# AI Compass - Quick Deploy Guide

## 🚀 Easiest Deployment: Vercel (Recommended)

Since your project has both frontend and backend, Vercel is the best option as it supports serverless functions.

### Steps:

1. **Install Vercel CLI globally**
   ```bash
   npm i -g vercel
   ```

2. **Deploy from project root**
   ```bash
   vercel
   ```

3. **Follow prompts:**
   - Set up and deploy? **Yes**
   - Which scope? (Select your account)
   - Link to existing project? **No** (first time)
   - Project name? **ai-compass** (or your choice)
   - In which directory? **./
   - Want to override settings? **No**

4. **Production deployment**
   ```bash
   vercel --prod
   ```

### ✅ What's Configured:

- ✓ Frontend served from `frontend/build`
- ✓ Backend API routes at `/api/*`
- ✓ Security headers enabled
- ✓ SPA routing configured
- ✓ Static assets cached

## 🌐 Alternative: Render.com (Full-Stack)

If you prefer Render:

1. Go to [render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repo
4. Configure:
   - **Build Command**: `npm install && cd frontend && npm install && npm run build && cd ../backend && npm install`
   - **Start Command**: `cd backend && node server.js`
   - **Environment**: Node

## � Notes:

- Database is SQLite, which will persist in deployment
- For production, consider migrating to PostgreSQL or MongoDB
- Environment variables can be added in the Vercel/Render dashboard

## 🔧 Troubleshooting:

If deployment fails:
1. Ensure `npm install` completed successfully
2. Check that `frontend/build` folder exists locally (run `cd frontend && npm run build`)
3. Verify all dependencies are in `package.json` files
