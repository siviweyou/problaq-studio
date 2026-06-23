# 🚀 GO LIVE NOW - Simple Steps

## What You Need
- cPanel login for por.problaq.co.za (or hosting access)
- FTP client (FileZilla) or cPanel File Manager
- 30 minutes

---

## ⚡ Super Quick Method

### Step 1: Build Frontend (2 minutes)

```bash
cd /Users/siviweetenganii/Code_dev/problaq-studio/frontend
npm run build
```

This creates a `dist/` folder with your production-ready website.

---

### Step 2: Get Your Hosting Login

You need access to your hosting control panel for **por.problaq.co.za**

**Common hosting providers:**
- Hostinger → https://hostinger.com/cpanel
- SiteGround → https://siteground.com/login
- Bluehost → https://bluehost.com/login

**Or use FTP:**
- Host: por.problaq.co.za (or ftp.por.problaq.co.za)
- Username: [your hosting username]
- Password: [your hosting password]

---

### Step 3: Upload Files

#### Option A: cPanel File Manager (Easiest)

1. Log in to cPanel
2. Click **File Manager**
3. Go to `public_html/` folder
4. **Backup current files** (download or rename to `public_html_old/`)
5. Upload everything from `frontend/dist/` to `public_html/`
6. Create folder `public_html/api/`
7. Upload everything from `backend/` to `public_html/api/`

#### Option B: FileZilla (FTP)

1. Download FileZilla: https://filezilla-project.org/download.php
2. Connect:
   - Host: por.problaq.co.za
   - Username: [your FTP username]
   - Password: [your FTP password]
   - Port: 21
3. Navigate to `public_html/`
4. Upload `frontend/dist/*` → `public_html/`
5. Create `api/` folder
6. Upload `backend/*` → `public_html/api/`

---

### Step 4: Setup Backend on Server

#### If your hosting has Node.js support:

**Via cPanel:**
1. Go to **Setup Node.js App** (or **Node.js Selector**)
2. Click **Create Application**
3. Settings:
   - Node.js version: 18.x or higher
   - Application mode: Production
   - Application root: `public_html/api`
   - Application URL: Leave blank or set to `/api`
   - Application startup file: `server.js`
4. Click **Create**
5. Click **Run NPM Install** (installs dependencies)
6. Click **Start** to run the server

**Via SSH:**
```bash
ssh your-username@por.problaq.co.za
cd public_html/api
npm install --production
npm install -g pm2
pm2 start server.js --name problaq-api
pm2 startup
pm2 save
```

---

### Step 5: Create Environment File

In `public_html/api/`, create `.env` file:

```env
PORT=8000
FRONTEND_URL=https://por.problaq.co.za
SENDER_EMAIL=hello@por.problaq.co.za
SENDER_PASSWORD=your-actual-email-password
NODE_ENV=production
```

**Via cPanel File Manager:**
1. Navigate to `public_html/api/`
2. Click **+ File**
3. Name it `.env`
4. Right-click → Edit
5. Paste the content above (with your real password)
6. Save

---

### Step 6: Update Frontend API URL

Before building, update `/frontend/.env.production`:

```env
VITE_API_URL=https://por.problaq.co.za/api
```

Then rebuild:
```bash
cd frontend
npm run build
```

Re-upload the new `dist/` files to `public_html/`

---

### Step 7: Test Live Site!

1. Visit: **https://por.problaq.co.za**
2. Check homepage loads ✅
3. Scroll to **Email Campaign Tool** (Section 06)
4. Enter credentials:
   - Email: hello@por.problaq.co.za
   - Password: your password
5. Paste a test email (your personal email)
6. Click "Send to 1 Recipient"
7. Check your inbox! 📧

---

## 🎯 Alternative: Use Netlify (5 minutes, Free!)

### Fastest option if hosting doesn't support Node.js:

1. **Push to GitHub:**
   ```bash
   cd /Users/siviweetenganii/Code_dev/problaq-studio
   git init
   git add .
   git commit -m "Initial commit"
   # Create repo on GitHub first, then:
   git remote add origin https://github.com/YOUR-USERNAME/problaq-studio.git
   git push -u origin main
   ```

2. **Deploy Frontend to Netlify:**
   - Go to https://netlify.com
   - Sign up (free)
   - Click "Add new site" → "Import from Git"
   - Connect GitHub → Select your repo
   - Build settings:
     - Base directory: `frontend`
     - Build command: `npm run build`
     - Publish directory: `frontend/dist`
   - Click "Deploy"

3. **Deploy Backend to Railway:**
   - Go to https://railway.app
   - Sign up (free)
   - Click "New Project" → "Deploy from GitHub"
   - Select your repo
   - Railway auto-detects Node.js backend
   - Add environment variables:
     ```
     SENDER_EMAIL=hello@por.problaq.co.za
     SENDER_PASSWORD=your-password
     FRONTEND_URL=https://your-netlify-site.netlify.app
     ```
   - Deploy!
   - Railway gives you a URL like: `https://problaq-api.up.railway.app`

4. **Connect them:**
   - In Netlify → Site settings → Environment variables
   - Add: `VITE_API_URL` = `https://problaq-api.up.railway.app`
   - Redeploy site

5. **Custom Domain:**
   - In Netlify → Domain settings
   - Add custom domain: `por.problaq.co.za`
   - Update your DNS settings (Netlify provides instructions)

---

## 🆘 Which Option Should I Use?

### Use cPanel Hosting If:
- ✅ You already pay for hosting
- ✅ Hosting supports Node.js
- ✅ You want everything in one place

### Use Netlify + Railway If:
- ✅ Your hosting doesn't support Node.js
- ✅ You want faster deployment (5 minutes)
- ✅ You want automatic updates from Git
- ✅ You don't mind using free services

---

## 📞 Need Help?

**Tell me:**
1. What hosting provider do you use? (Hostinger, SiteGround, etc.)
2. Do you have cPanel access?
3. Does your hosting support Node.js apps?

I'll give you exact steps for your setup!

---

## ✅ Post-Deployment Checklist

- [ ] Website loads at https://por.problaq.co.za
- [ ] Email campaign tool is visible
- [ ] Can enter credentials
- [ ] Sent test email to yourself
- [ ] Test email arrived in inbox
- [ ] Email shows correct branding
- [ ] Ready to send to real prospects!

---

## 🚀 Once Live:

**Your live email tool will be at:**
```
https://por.problaq.co.za#email-campaign
```

**Share this link** to access it from anywhere!

Start sending campaigns and closing R2,500 deals! 💰

---

**Ready to deploy?** Tell me your hosting provider and I'll walk you through it! 🎉
