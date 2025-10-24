# Environment Variables - Quick Reference

## 📋 Copy & Paste Template

Use this template to gather your environment variables. Fill in the values and then copy them to Netlify.

```
DATABASE_URL = [FILL THIS IN]
JWT_SECRET = [FILL THIS IN]
VITE_OAUTH_PORTAL_URL = https://vida.butterfly-effect.dev
OAUTH_SERVER_URL = https://vidabiz.butterfly-effect.dev
VITE_APP_ID = [FILL THIS IN]
VITE_APP_TITLE = TaRaLa-Hub
VITE_APP_LOGO = https://placehold.co/40x40/3b82f6/ffffff?text=T
PORT = 3000
```

---

## 🔧 How to Get Each Value

### 1️⃣ DATABASE_URL
**Where to get it:** PlanetScale, Railway, or your MySQL server

**Steps:**
1. Go to https://planetscale.com (free option)
2. Create account → Create database → Click "Connect"
3. Select "Node.js" from dropdown
4. Copy the entire connection string

**Example value:**
```
mysql://abc123def456:pscale_pw_xyz789@aws.connect.psdb.cloud/tarala_hub?sslAccept=strict
```

---

### 2️⃣ JWT_SECRET
**Where to get it:** Generate a random string

**Steps:**

**On Mac/Linux:**
```bash
openssl rand -base64 32
```

**On Windows (PowerShell):**
```powershell
[Convert]::ToBase64String((1..32 | ForEach-Object {[byte](Get-Random -Maximum 256)}))
```

**Online:**
Go to https://www.random.org/strings/
- Number of strings: 1
- Length: 32
- Check: Digits, Uppercase, Lowercase
- Click "Get Strings"

**Example value:**
```
K7mP9nL2qR5tV8wX3yZ0aB4cD6eF9gH1
```

---

### 3️⃣ VITE_OAUTH_PORTAL_URL
**Value:** (Fixed - same for everyone)
```
https://vida.butterfly-effect.dev
```

---

### 4️⃣ OAUTH_SERVER_URL
**Value:** (Fixed - same for everyone)
```
https://vidabiz.butterfly-effect.dev
```

---

### 5️⃣ VITE_APP_ID
**Where to get it:** Your Manus project dashboard

**Steps:**
1. Log in to your Manus dashboard
2. Find "App ID" or "Application ID"
3. Copy it

**Example value:**
```
app_1234567890abcdef
```

---

### 6️⃣ VITE_APP_TITLE
**Value:** Your app name
```
TaRaLa-Hub
```

Or customize it:
```
TaRaLa Hub - Educational Platform
```

---

### 7️⃣ VITE_APP_LOGO
**Where to get it:** URL to your logo image

**Quick option (placeholder):**
```
https://placehold.co/40x40/3b82f6/ffffff?text=T
```

**Or upload your logo:**
1. Go to https://imgur.com
2. Upload your logo
3. Right-click → "Copy image link"
4. Use that URL

**Example value:**
```
https://imgur.com/abc123.png
```

---

### 8️⃣ PORT
**Value:** (Fixed)
```
3000
```

---

## 📝 Filled Example

Here's what it looks like when filled in:

```
DATABASE_URL = mysql://user123:pass456@aws.connect.psdb.cloud/tarala_hub?sslAccept=strict
JWT_SECRET = K7mP9nL2qR5tV8wX3yZ0aB4cD6eF9gH1
VITE_OAUTH_PORTAL_URL = https://vida.butterfly-effect.dev
OAUTH_SERVER_URL = https://vidabiz.butterfly-effect.dev
VITE_APP_ID = app_1234567890abcdef
VITE_APP_TITLE = TaRaLa-Hub
VITE_APP_LOGO = https://placehold.co/40x40/3b82f6/ffffff?text=T
PORT = 3000
```

---

## 🚀 How to Add to Netlify

### Step 1: Go to Netlify
1. Log in to https://app.netlify.com
2. Click your **tarala-hub** site
3. Click **"Site settings"** (top right)

### Step 2: Add Variables
1. Click **"Build & deploy"** (left sidebar)
2. Click **"Environment"**
3. Click **"Edit variables"**

### Step 3: Enter Each Variable
For each variable:
1. Click **"Add variable"**
2. **Key:** `DATABASE_URL` (or other variable name)
3. **Value:** Paste the value from above
4. Click **"Save"**

### Step 4: Deploy
1. Go to **"Deploys"** tab
2. Click **"Trigger deploy"** → **"Deploy site"**
3. Wait for deployment ✅

---

## ⚠️ Important Notes

- **Never share these values** - Keep them secret!
- **DATABASE_URL:** Must include the full connection string with password
- **JWT_SECRET:** Must be at least 32 characters
- **OAuth URLs:** Copy exactly as shown (don't change them)
- **VITE_APP_ID:** Get from your Manus dashboard
- **PORT:** Always use 3000

---

## 🆘 Troubleshooting

| Error | Solution |
|-------|----------|
| "DATABASE_URL is not defined" | Check Netlify environment variables are saved |
| "JWT_SECRET too short" | Generate a new one with at least 32 characters |
| "Invalid OAuth" | Check VITE_APP_ID and OAuth URLs are correct |
| "Cannot connect to database" | Check DATABASE_URL is correct and database is running |

---

## 📚 For More Details

See the full guide: **ENV_VARIABLES_GUIDE.md** in the repository

---

## ✅ Checklist

Before deploying:

- [ ] Have DATABASE_URL from PlanetScale/Railway
- [ ] Generated JWT_SECRET (32+ characters)
- [ ] Have VITE_APP_ID from Manus dashboard
- [ ] Have logo URL or using placeholder
- [ ] All values copied to Netlify environment
- [ ] Redeploy triggered in Netlify

**You're ready to deploy! 🚀**

