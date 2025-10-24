# Environment Variables Guide for TaRaLa-Hub

This guide explains **exactly what to enter** for each environment variable when deploying to Netlify.

---

## Overview

Environment variables are secret settings that your application needs to run. They include:
- Database connection details
- Security keys
- OAuth credentials
- File storage settings

**Never share these values publicly!**

---

## Required Variables (Must Have)

### 1. DATABASE_URL

**What it is:** Connection string to your MySQL database

**Format:**
```
mysql://username:password@hostname:port/database_name
```

**How to get it:**

#### Option A: PlanetScale (Recommended - Free)

1. Go to https://planetscale.com
2. Sign up for a free account
3. Click **"Create a new database"**
4. Name it: `tarala_hub`
5. Select region closest to you
6. Click **"Create database"**
7. Click **"Connect"** button
8. Select **"Node.js"** from dropdown
9. Copy the connection string (looks like below)

**Example:**
```
mysql://abc123def456:pscale_pw_xyz789@aws.connect.psdb.cloud/tarala_hub?sslAccept=strict
```

**What to do:**
- Copy the entire connection string from PlanetScale
- Paste it exactly as the value for `DATABASE_URL`

#### Option B: Railway (Free tier available)

1. Go to https://railway.app
2. Sign up with GitHub
3. Create a new project
4. Add MySQL database
5. Go to database settings
6. Copy the connection URL

**Example:**
```
mysql://root:password@containers-us-west-xyz.railway.app:3306/railway
```

#### Option C: Local MySQL (If you have MySQL installed)

**Example:**
```
mysql://root:password@localhost:3306/tarala_hub
```

---

### 2. JWT_SECRET

**What it is:** A secret key used to sign session cookies and protect user sessions

**Format:** A random string of at least 32 characters

**How to generate it:**

#### On Mac/Linux:
```bash
openssl rand -base64 32
```

This will output something like:
```
aBcDeFgHiJkLmNoPqRsTuVwXyZ0123456789+/==
```

#### On Windows (PowerShell):
```powershell
[Convert]::ToBase64String((1..32 | ForEach-Object {[byte](Get-Random -Maximum 256)}))
```

#### Online Generator:
Go to https://www.random.org/strings/ and:
1. Set "Number of strings" to 1
2. Set "Length of each string" to 32
3. Check "Digits", "Uppercase", "Lowercase"
4. Click "Get Strings"
5. Copy the result

**Example:**
```
K7mP9nL2qR5tV8wX3yZ0aB4cD6eF9gH1
```

**What to do:**
- Generate a random 32+ character string
- Paste it as the value for `JWT_SECRET`
- Keep it secret - never share it!

---

### 3. VITE_OAUTH_PORTAL_URL

**What it is:** The URL of the Manus OAuth login portal

**Format:** A fixed URL provided by Manus

**Value:**
```
https://vida.butterfly-effect.dev
```

**What to do:**
- Enter exactly: `https://vida.butterfly-effect.dev`
- This is the same for all Manus projects

---

### 4. OAUTH_SERVER_URL

**What it is:** The backend URL for Manus OAuth server

**Format:** A fixed URL provided by Manus

**Value:**
```
https://vidabiz.butterfly-effect.dev
```

**What to do:**
- Enter exactly: `https://vidabiz.butterfly-effect.dev`
- This is the same for all Manus projects

---

### 5. VITE_APP_ID

**What it is:** Your unique application ID from Manus

**Format:** A unique identifier (looks like a UUID or random string)

**How to get it:**

1. Go to your Manus project dashboard
2. Look for "App ID" or "Application ID"
3. Copy the value

**Example:**
```
app_1234567890abcdef
```

or

```
550e8400-e29b-41d4-a716-446655440000
```

**What to do:**
- Find your App ID in Manus dashboard
- Paste it exactly as the value for `VITE_APP_ID`

---

### 6. VITE_APP_TITLE

**What it is:** The name of your application (displayed in browser tab and header)

**Format:** Any text string

**Example:**
```
TaRaLa-Hub
```

**What to do:**
- Enter your app name: `TaRaLa-Hub`
- Or customize it: `TaRaLa Hub - Educational Platform`

---

### 7. VITE_APP_LOGO

**What it is:** URL to your application logo image

**Format:** A complete URL to an image file

**How to get it:**

#### Option A: Use a placeholder (Quick start)
```
https://placehold.co/40x40/3b82f6/ffffff?text=T
```

#### Option B: Upload your logo to a free service

1. Go to https://imgur.com
2. Upload your logo image
3. Right-click on image → "Copy image link"
4. Use that URL

**Example:**
```
https://imgur.com/abc123.png
```

or

```
https://your-domain.com/logo.png
```

**What to do:**
- Use placeholder URL for now: `https://placehold.co/40x40/3b82f6/ffffff?text=T`
- Or upload your logo and paste the URL

---

### 8. PORT

**What it is:** The port number your backend server runs on

**Format:** A number (typically 3000)

**Value:**
```
3000
```

**What to do:**
- Enter exactly: `3000`
- Don't change this unless you have a specific reason

---

## Optional Variables (For File Storage)

If you want to store files in AWS S3, add these:

### AWS_REGION

**What it is:** The AWS region where your S3 bucket is located

**Format:** AWS region code

**Common values:**
```
us-east-1          (US East - Virginia)
us-west-2          (US West - Oregon)
eu-west-1          (Europe - Ireland)
ap-southeast-1     (Asia Pacific - Singapore)
```

**How to get it:**
1. Go to https://aws.amazon.com
2. Sign in to AWS Console
3. Create an S3 bucket
4. Note the region you selected

**Example:**
```
us-east-1
```

**What to do:**
- Choose the region closest to your users
- Enter the region code exactly

---

### AWS_ACCESS_KEY_ID

**What it is:** Your AWS access key for authentication

**Format:** A 20-character alphanumeric string

**How to get it:**

1. Go to https://console.aws.amazon.com/iam
2. Click "Users" in left sidebar
3. Click "Create user"
4. Name it: `tarala-hub`
5. Click "Create user"
6. Click on the user you just created
7. Go to "Security credentials" tab
8. Click "Create access key"
9. Select "Application running outside AWS"
10. Click "Create access key"
11. Copy the "Access Key ID"

**Example:**
```
AKIAIOSFODNN7EXAMPLE
```

**What to do:**
- Copy the Access Key ID from AWS
- Paste it exactly as the value for `AWS_ACCESS_KEY_ID`

---

### AWS_SECRET_ACCESS_KEY

**What it is:** Your AWS secret key (like a password)

**Format:** A 40-character string

**How to get it:**

When you create the access key (see AWS_ACCESS_KEY_ID above):
1. AWS will show you both the Access Key ID and Secret Access Key
2. Copy the "Secret Access Key"
3. **IMPORTANT:** Save it somewhere safe - you won't see it again!

**Example:**
```
wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
```

**What to do:**
- Copy the Secret Access Key from AWS
- Paste it exactly as the value for `AWS_SECRET_ACCESS_KEY`
- Keep it secret!

---

### AWS_S3_BUCKET

**What it is:** The name of your S3 bucket for storing files

**Format:** A bucket name (lowercase, hyphens allowed)

**How to get it:**

1. Go to https://s3.console.aws.amazon.com
2. Click "Create bucket"
3. Name it: `tarala-hub-files` (must be globally unique)
4. Click "Create bucket"
5. Copy the bucket name

**Example:**
```
tarala-hub-files-2024
```

**What to do:**
- Create an S3 bucket
- Copy the bucket name
- Paste it exactly as the value for `AWS_S3_BUCKET`

---

## Complete Example

Here's what your environment variables should look like in Netlify:

```
DATABASE_URL = mysql://abc123:password@aws.connect.psdb.cloud/tarala_hub?sslAccept=strict
JWT_SECRET = K7mP9nL2qR5tV8wX3yZ0aB4cD6eF9gH1
VITE_OAUTH_PORTAL_URL = https://vida.butterfly-effect.dev
OAUTH_SERVER_URL = https://vidabiz.butterfly-effect.dev
VITE_APP_ID = app_1234567890abcdef
VITE_APP_TITLE = TaRaLa-Hub
VITE_APP_LOGO = https://placehold.co/40x40/3b82f6/ffffff?text=T
PORT = 3000
AWS_REGION = us-east-1
AWS_ACCESS_KEY_ID = AKIAIOSFODNN7EXAMPLE
AWS_SECRET_ACCESS_KEY = wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
AWS_S3_BUCKET = tarala-hub-files-2024
```

---

## How to Add Environment Variables to Netlify

### Step 1: Go to Site Settings

1. Log in to https://app.netlify.com
2. Select your site (tarala-hub)
3. Click **"Site settings"** (top navigation)

### Step 2: Navigate to Environment

1. Click **"Build & deploy"** in left sidebar
2. Click **"Environment"** section
3. Click **"Edit variables"** button

### Step 3: Add Each Variable

For each variable:
1. Click **"Add variable"** button
2. Enter the **Key** (e.g., `DATABASE_URL`)
3. Enter the **Value** (e.g., the connection string)
4. Click **"Save"**

### Step 4: Redeploy

1. Go to **"Deploys"** tab
2. Click **"Trigger deploy"** → **"Deploy site"**
3. Wait for deployment to complete

---

## Quick Checklist

Before deploying, make sure you have:

- [ ] **DATABASE_URL** - MySQL connection string from PlanetScale/Railway
- [ ] **JWT_SECRET** - Random 32+ character string (generated)
- [ ] **VITE_OAUTH_PORTAL_URL** - `https://vida.butterfly-effect.dev`
- [ ] **OAUTH_SERVER_URL** - `https://vidabiz.butterfly-effect.dev`
- [ ] **VITE_APP_ID** - From your Manus dashboard
- [ ] **VITE_APP_TITLE** - Your app name (e.g., `TaRaLa-Hub`)
- [ ] **VITE_APP_LOGO** - URL to your logo image
- [ ] **PORT** - `3000`
- [ ] (Optional) **AWS_REGION** - For S3 file storage
- [ ] (Optional) **AWS_ACCESS_KEY_ID** - For S3 file storage
- [ ] (Optional) **AWS_SECRET_ACCESS_KEY** - For S3 file storage
- [ ] (Optional) **AWS_S3_BUCKET** - For S3 file storage

---

## Security Tips

🔒 **IMPORTANT SECURITY PRACTICES:**

1. **Never commit secrets to GitHub** - Environment variables are only in Netlify
2. **Never share your JWT_SECRET** - Keep it private
3. **Never share AWS credentials** - Only you should have access
4. **Use strong JWT_SECRET** - Generate a random 32+ character string
5. **Rotate credentials regularly** - Change passwords and keys periodically
6. **Use IAM roles** - Don't use root AWS account for S3 access
7. **Enable 2FA** - Protect your Netlify and AWS accounts

---

## Troubleshooting

### "DATABASE_URL is not defined" Error

**Problem:** Environment variable not set in Netlify

**Solution:**
1. Go to Netlify site settings
2. Check "Build & deploy" → "Environment"
3. Make sure `DATABASE_URL` is listed
4. Redeploy the site

### "JWT_SECRET must be at least 32 characters"

**Problem:** JWT_SECRET is too short

**Solution:**
1. Generate a new JWT_SECRET with at least 32 characters
2. Update it in Netlify environment variables
3. Redeploy

### "Invalid OAuth credentials"

**Problem:** VITE_APP_ID or OAuth URLs are wrong

**Solution:**
1. Double-check your VITE_APP_ID from Manus dashboard
2. Make sure OAuth URLs are exactly:
   - `https://vida.butterfly-effect.dev`
   - `https://vidabiz.butterfly-effect.dev`
3. Redeploy

### "S3 bucket not found"

**Problem:** AWS_S3_BUCKET name is wrong or bucket doesn't exist

**Solution:**
1. Go to https://s3.console.aws.amazon.com
2. Check the exact bucket name
3. Update AWS_S3_BUCKET in Netlify
4. Make sure bucket exists in the same region as AWS_REGION
5. Redeploy

---

## Summary

Environment variables are configuration settings your app needs:

| Variable | Purpose | Example |
|----------|---------|---------|
| `DATABASE_URL` | Database connection | `mysql://user:pass@host/db` |
| `JWT_SECRET` | Session security | Random 32+ char string |
| `VITE_OAUTH_PORTAL_URL` | OAuth login page | `https://vida.butterfly-effect.dev` |
| `OAUTH_SERVER_URL` | OAuth server | `https://vidabiz.butterfly-effect.dev` |
| `VITE_APP_ID` | App identifier | From Manus dashboard |
| `VITE_APP_TITLE` | App name | `TaRaLa-Hub` |
| `VITE_APP_LOGO` | App logo URL | Image URL |
| `PORT` | Server port | `3000` |

**Next step:** Gather these values and add them to Netlify before deploying!

