# TaRaLa-Hub: Complete Deployment Checklist

Use this checklist to deploy your application to Netlify step-by-step.

---

## 📋 Phase 1: Prepare Your Database

Choose ONE of these free database options:

### Option A: Railway (Recommended - $5/month credits)
- [ ] Go to https://railway.app
- [ ] Sign up with GitHub
- [ ] Create new project
- [ ] Add MySQL database
- [ ] Wait for database to be created
- [ ] Click "Connect" tab
- [ ] Copy MySQL connection string
- [ ] Save it somewhere safe

**Connection string format:**
```
mysql://root:password@containers-us-west-xyz.railway.app:3306/railway
```

### Option B: Render (Completely Free)
- [ ] Go to https://render.com
- [ ] Sign up with email
- [ ] Go to "Databases" section
- [ ] Click "New +" → "MySQL"
- [ ] Name it: `tarala-hub`
- [ ] Create database
- [ ] Wait 5-10 minutes for setup
- [ ] Go to "Connections" tab
- [ ] Copy the connection string
- [ ] Save it somewhere safe

**Connection string format:**
```
mysql://username:password@dpg-xyz.render.com:3306/tarala_hub
```

### Option C: AWS RDS (Free for 12 months)
- [ ] Go to https://aws.amazon.com
- [ ] Create account (requires credit card)
- [ ] Go to RDS console
- [ ] Create MySQL database
- [ ] Wait for database to be created
- [ ] Copy the endpoint
- [ ] Save connection string somewhere safe

**Connection string format:**
```
mysql://admin:password@tarala-hub.xyz.us-east-1.rds.amazonaws.com:3306/tarala_hub
```

---

## 🔐 Phase 2: Generate Security Keys

### Generate JWT_SECRET
Choose your operating system:

**On Mac/Linux:**
```bash
openssl rand -base64 32
```

**On Windows (PowerShell):**
```powershell
[Convert]::ToBase64String((1..32 | ForEach-Object {[byte](Get-Random -Maximum 256)}))
```

**Online:**
1. Go to https://www.random.org/strings/
2. Set "Number of strings" to 1
3. Set "Length" to 32
4. Check "Digits", "Uppercase", "Lowercase"
5. Click "Get Strings"

**Result:** You'll get something like:
```
K7mP9nL2qR5tV8wX3yZ0aB4cD6eF9gH1
```

- [ ] Generated JWT_SECRET (32+ characters)
- [ ] Saved it somewhere safe

---

## 🎯 Phase 3: Gather Your Information

### Database
- [ ] DATABASE_URL: `mysql://...` (from Phase 1)

### Security
- [ ] JWT_SECRET: `K7mP9...` (from Phase 2)

### OAuth (Fixed values - same for everyone)
- [ ] VITE_OAUTH_PORTAL_URL: `https://vida.butterfly-effect.dev`
- [ ] OAUTH_SERVER_URL: `https://vidabiz.butterfly-effect.dev`

### Your App Info
- [ ] VITE_APP_ID: (from your Manus dashboard)
- [ ] VITE_APP_TITLE: `TaRaLa-Hub` (or your custom name)
- [ ] VITE_APP_LOGO: (use placeholder or your logo URL)

### Server
- [ ] PORT: `3000`

---

## 🚀 Phase 4: Deploy to Netlify

### Step 1: Start New Deployment
- [ ] Go to https://app.netlify.com/teams/taneesha-puvvadi/projects
- [ ] Click **"New site from Git"** button
- [ ] Click **"GitHub"**
- [ ] Authorize Netlify to access GitHub
- [ ] Search for **"tarala-hub"**
- [ ] Click to select it

### Step 2: Configure Build Settings
- [ ] Build command: `pnpm build`
- [ ] Publish directory: `dist`
- [ ] Click **"Deploy site"** (you'll add env vars next)

### Step 3: Add Environment Variables
**IMPORTANT:** Do this BEFORE deployment completes

1. Go to **"Site settings"** (top right)
2. Click **"Build & deploy"** (left sidebar)
3. Click **"Environment"**
4. Click **"Edit variables"**

Add each variable:

- [ ] Key: `DATABASE_URL`
  Value: (from Phase 1)

- [ ] Key: `JWT_SECRET`
  Value: (from Phase 2)

- [ ] Key: `VITE_OAUTH_PORTAL_URL`
  Value: `https://vida.butterfly-effect.dev`

- [ ] Key: `OAUTH_SERVER_URL`
  Value: `https://vidabiz.butterfly-effect.dev`

- [ ] Key: `VITE_APP_ID`
  Value: (from your Manus dashboard)

- [ ] Key: `VITE_APP_TITLE`
  Value: `TaRaLa-Hub`

- [ ] Key: `VITE_APP_LOGO`
  Value: `https://placehold.co/40x40/3b82f6/ffffff?text=T` (or your logo URL)

- [ ] Key: `PORT`
  Value: `3000`

### Step 4: Trigger Deployment
- [ ] Go to **"Deploys"** tab
- [ ] Click **"Trigger deploy"** → **"Deploy site"**
- [ ] Wait for build to complete (usually 2-5 minutes)
- [ ] Check build logs if anything fails

### Step 5: Verify Deployment
- [ ] Site is live at `https://tarala-hub.netlify.app`
- [ ] Home page loads correctly
- [ ] Navigation works (Worksheets, Videos, Games)
- [ ] Try logging in with your Manus account

---

## 🔧 Phase 5: Post-Deployment Setup

### Test Admin Dashboard
- [ ] Go to `/admin` on your live site
- [ ] Log in with your admin account
- [ ] Verify you can see the dashboard
- [ ] Test uploading a file
- [ ] Test creating a worksheet

### Configure Custom Domain (Optional)
- [ ] Go to **"Site settings"** → **"Domain management"**
- [ ] Click **"Add custom domain"**
- [ ] Enter your domain (e.g., `tarala-hub.com`)
- [ ] Follow DNS instructions
- [ ] Wait for SSL certificate (automatic)

### Set Up Notifications (Optional)
- [ ] Go to **"Site settings"** → **"Notifications"**
- [ ] Add email notifications for deployments
- [ ] Add Slack notifications if desired

---

## 📚 Documentation Reference

If you need help, refer to these guides in your repository:

| Document | Purpose |
|----------|---------|
| `README.md` | Project overview |
| `ENV_QUICK_REFERENCE.md` | Quick env variable guide |
| `ENV_VARIABLES_GUIDE.md` | Detailed env variable guide |
| `FREE_DATABASE_OPTIONS.md` | Database setup options |
| `NETLIFY_DEPLOYMENT.md` | Full deployment guide |
| `FULLSTACK_GUIDE.md` | Architecture & API docs |
| `TECHNOLOGY_RECOMMENDATIONS.md` | Tech stack explanation |

---

## 🆘 Troubleshooting

### Build Fails
**Problem:** Build fails in Netlify

**Solution:**
1. Check build logs in Netlify
2. Make sure all environment variables are set
3. Check DATABASE_URL format is correct
4. Redeploy after fixing

### "Cannot connect to database"
**Problem:** Site loads but database connection fails

**Solution:**
1. Check DATABASE_URL is correct
2. Check database is running (not paused)
3. Check username and password
4. Test connection string locally first

### "Invalid OAuth"
**Problem:** Login fails with OAuth error

**Solution:**
1. Check VITE_APP_ID is correct
2. Check OAuth URLs are exactly:
   - `https://vida.butterfly-effect.dev`
   - `https://vidabiz.butterfly-effect.dev`
3. Verify VITE_APP_ID exists in Manus dashboard

### Admin Dashboard Shows 404
**Problem:** `/admin` page not found

**Solution:**
1. Check you're logged in
2. Check your account has `role = "admin"` in database
3. Clear browser cache and reload
4. Try in incognito/private window

### Files Won't Upload
**Problem:** File upload fails

**Solution:**
1. Check file size (must be under limit)
2. Check file type is supported
3. Check S3 credentials if using S3
4. Check browser console for error messages

---

## 📊 Success Indicators

Your deployment is successful when:

✅ Site loads at `https://tarala-hub.netlify.app`  
✅ Home page displays correctly  
✅ Navigation works (all pages load)  
✅ Can log in with Manus account  
✅ Admin dashboard accessible at `/admin`  
✅ Can create and view worksheets  
✅ Can upload files  
✅ No console errors in browser  
✅ Netlify build shows "Published"  

---

## 🎉 You're Live!

Once all checks pass, your TaRaLa-Hub platform is live and ready for students!

**Next steps:**
1. Add content (worksheets, videos, games)
2. Promote admin users
3. Share the URL with students
4. Monitor analytics
5. Update content regularly

---

## 📞 Support Resources

- **Netlify Help:** https://docs.netlify.com
- **GitHub Help:** https://docs.github.com
- **Railway Help:** https://docs.railway.app
- **Render Help:** https://render.com/docs
- **MySQL Help:** https://dev.mysql.com/doc

---

## 📝 Quick Reference

### Important URLs
- **GitHub:** https://github.com/Taneesha-Puvvadi/tarala-hub
- **Netlify:** https://app.netlify.com/teams/taneesha-puvvadi/projects
- **Your Site:** https://tarala-hub.netlify.app
- **Admin Panel:** https://tarala-hub.netlify.app/admin

### Important Values
| Variable | Value |
|----------|-------|
| Build command | `pnpm build` |
| Publish directory | `dist` |
| Node version | 18.x or 20.x |
| Port | 3000 |

### Database Options
| Service | Cost | Setup Time | Best For |
|---------|------|-----------|----------|
| Railway | $5/mo | 5 min | Quick start |
| Render | Free | 10 min | Learning |
| AWS RDS | Free (12mo) | 15 min | Production |

---

## ✅ Final Checklist Before Going Live

- [ ] Database created and connection string saved
- [ ] JWT_SECRET generated
- [ ] All 8 environment variables added to Netlify
- [ ] Build settings configured (pnpm build, dist)
- [ ] Deployment triggered and completed
- [ ] Site loads at tarala-hub.netlify.app
- [ ] Admin dashboard works at /admin
- [ ] Can log in with Manus account
- [ ] Can create and view content
- [ ] No errors in browser console

**Once all boxes are checked, you're ready to launch! 🚀**

---

## 💡 Pro Tips

1. **Test locally first** - Use `.env` file locally before deploying
2. **Keep backups** - Regularly export your database
3. **Monitor logs** - Check Netlify build logs for issues
4. **Update content** - Add worksheets and videos regularly
5. **Engage students** - Track progress and provide feedback

---

## Summary

You now have:

✅ Full-stack educational platform  
✅ GitHub repository with all code  
✅ Comprehensive documentation  
✅ Free database options  
✅ Step-by-step deployment guide  
✅ Ready to deploy to Netlify  

**Follow this checklist and you'll be live in under 30 minutes!**

