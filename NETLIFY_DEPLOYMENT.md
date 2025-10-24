# TaRaLa-Hub: Netlify Deployment Guide

## Overview

TaRaLa-Hub has been successfully pushed to GitHub and is ready to deploy on Netlify. This guide walks you through the complete deployment process.

---

## Prerequisites

✅ **GitHub Repository:** https://github.com/Taneesha-Puvvadi/tarala-hub  
✅ **Netlify Account:** https://app.netlify.com/teams/taneesha-puvvadi/projects  
⏳ **Environment Variables:** You'll need these before deploying

---

## Step-by-Step Deployment

### Step 1: Connect GitHub Repository to Netlify

1. Go to https://app.netlify.com/teams/taneesha-puvvadi/projects
2. Click the **"New site from Git"** button (top right)
3. Click **"GitHub"** to connect your GitHub account
4. Authorize Netlify to access your GitHub repositories
5. Search for **"tarala-hub"** in the repository list
6. Click to select it

### Step 2: Configure Build Settings

Netlify will ask for build configuration. Use these settings:

**Basic Settings:**
- **Build command:** `pnpm build`
- **Publish directory:** `dist`
- **Node version:** `18.x` or `20.x` (set in `.nvmrc` or in Netlify UI)

**Advanced Settings:**
- Leave all other settings as default

### Step 3: Add Environment Variables

**CRITICAL:** Add environment variables BEFORE deploying, otherwise the build will fail.

1. In Netlify, go to **"Site settings"** (top navigation)
2. Click **"Build & deploy"** in the left sidebar
3. Click **"Environment"** section
4. Click **"Edit variables"** button
5. Add each variable below:

#### Required Environment Variables

```
DATABASE_URL = mysql://user:password@host:3306/database_name
JWT_SECRET = your-secret-key-here-min-32-characters
VITE_OAUTH_PORTAL_URL = https://vida.butterfly-effect.dev
OAUTH_SERVER_URL = https://vidabiz.butterfly-effect.dev
VITE_APP_ID = your-manus-app-id
VITE_APP_TITLE = TaRaLa-Hub
VITE_APP_LOGO = https://your-logo-url.png
PORT = 3000
```

#### Optional S3 Variables (for file storage)

If using S3 for file uploads:

```
AWS_REGION = us-east-1
AWS_ACCESS_KEY_ID = your-access-key
AWS_SECRET_ACCESS_KEY = your-secret-key
AWS_S3_BUCKET = your-bucket-name
```

### Step 4: Deploy

1. After adding all environment variables, click **"Deploy site"**
2. Netlify will:
   - Clone the GitHub repository
   - Install dependencies with `pnpm install`
   - Run `pnpm build` to create production bundle
   - Deploy to a live URL

3. Wait for deployment to complete (usually 2-5 minutes)
4. Once complete, you'll see a live URL like: `https://tarala-hub.netlify.app`

---

## Obtaining Environment Variables

### 1. Database URL (MySQL)

If you don't have a MySQL database yet, use a free service:

**Option A: PlanetScale (Recommended)**
- Go to https://planetscale.com
- Create a free account
- Create a new database
- Copy the connection string (looks like: `mysql://user:password@host/database`)

**Option B: Railway**
- Go to https://railway.app
- Create a MySQL database
- Copy the connection string

**Option C: Local/Existing Database**
- Use your existing MySQL connection string

### 2. JWT Secret

Generate a secure random string:

```bash
# On Mac/Linux
openssl rand -base64 32

# Or use this online generator
# https://www.random.org/strings/?num=1&len=32&digits=on&upperalpha=on&loweralpha=on&unique=on&format=html&rnd=new
```

### 3. Manus OAuth Credentials

Contact your Manus provider or check your project settings for:
- `VITE_APP_ID`
- `VITE_OAUTH_PORTAL_URL`
- `OAUTH_SERVER_URL`

### 4. S3 Credentials (Optional)

If using AWS S3 for file storage:

1. Go to https://aws.amazon.com
2. Create an IAM user with S3 access
3. Generate access keys
4. Create an S3 bucket
5. Copy the credentials

---

## Deployment Checklist

- [ ] GitHub repository created: https://github.com/Taneesha-Puvvadi/tarala-hub
- [ ] Netlify account ready: https://app.netlify.com/teams/taneesha-puvvadi/projects
- [ ] MySQL database created and connection string obtained
- [ ] JWT_SECRET generated
- [ ] Manus OAuth credentials obtained
- [ ] S3 bucket created (if using file storage)
- [ ] All environment variables added to Netlify
- [ ] Build command set to: `pnpm build`
- [ ] Publish directory set to: `dist`
- [ ] Site deployed and live

---

## Post-Deployment

### 1. Verify Deployment

1. Visit your Netlify URL (e.g., https://tarala-hub.netlify.app)
2. Check that the home page loads correctly
3. Test navigation to Worksheets, Videos, Games pages
4. Try logging in with your Manus OAuth account

### 2. Test Admin Dashboard

1. Log in with an admin account
2. Go to `/admin` path
3. Verify you can:
   - View worksheets, videos, games
   - Upload files
   - Create new content

### 3. Monitor Deployment

- Check Netlify **"Deploys"** tab for build logs
- Check **"Analytics"** for traffic and errors
- Set up **"Notifications"** for deployment alerts

### 4. Custom Domain (Optional)

To use a custom domain instead of `netlify.app`:

1. In Netlify, go to **"Site settings"** → **"Domain management"**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `tarala-hub.com`)
4. Follow DNS instructions to point domain to Netlify
5. Netlify will automatically provision SSL certificate

---

## Troubleshooting

### Build Fails with "Command not found: pnpm"

**Solution:** Netlify needs to install pnpm. Add this to `netlify.toml`:

```toml
[build]
  command = "npm install -g pnpm && pnpm install && pnpm build"
  publish = "dist"
```

### "DATABASE_URL is not defined" Error

**Solution:** Make sure environment variables are added BEFORE deploying. Redeploy after adding them:
1. Go to **"Deploys"** tab
2. Click **"Trigger deploy"** → **"Deploy site"**

### Site Shows "404 Not Found"

**Solution:** Make sure `dist` is set as the publish directory in build settings.

### API Calls Return 404

**Solution:** The backend server needs to be running. For Netlify Functions, you may need to:
1. Convert Express routes to Netlify Functions
2. Or use a separate backend service (Heroku, Railway, Render)

---

## Next Steps

1. **Add Content:** Use the admin dashboard to upload worksheets and videos
2. **Promote Admins:** Update user roles in the database
3. **Monitor Analytics:** Track student engagement
4. **Customize Branding:** Update colors, logos, text
5. **Add Custom Domain:** Point your domain to Netlify

---

## Support

For issues with:
- **Netlify:** https://docs.netlify.com
- **GitHub:** https://docs.github.com
- **Manus OAuth:** Contact your Manus provider
- **MySQL:** https://dev.mysql.com/doc

---

## Summary

Your TaRaLa-Hub platform is now deployed on Netlify and accessible to students worldwide! 🎉

**Live URL:** https://tarala-hub.netlify.app (or your custom domain)  
**GitHub:** https://github.com/Taneesha-Puvvadi/tarala-hub  
**Admin Dashboard:** https://tarala-hub.netlify.app/admin

