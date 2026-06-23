# 🚀 Deployment Guide - Go Live on por.problaq.co.za

## Your Goal
Get the email campaign system live at: **https://por.problaq.co.za**

---

## 📋 Pre-Deployment Checklist

- [ ] You have cPanel or hosting access for por.problaq.co.za
- [ ] You know your hosting provider (e.g., Hostinger, SiteGround, Bluehost)
- [ ] You have FTP/SSH access credentials
- [ ] Backend and frontend work locally (tested)

---

## 🎯 Deployment Options

### Option 1: All-in-One Hosting (Recommended for Speed)
Deploy everything to your existing por.problaq.co.za hosting

### Option 2: Split Deployment
- Frontend: Netlify/Vercel (free)
- Backend: Your hosting or Railway.app (free tier)

**I recommend Option 1** since you already have hosting for por.problaq.co.za

---

## 🚀 Option 1: Deploy to Your Hosting (cPanel)

### Step 1: Prepare Backend for Production

Update `/backend/.env`:
```env
PORT=8000
FRONTEND_URL=https://por.problaq.co.za
SENDER_EMAIL=hello@por.problaq.co.za
SENDER_PASSWORD=your-email-password-here
NODE_ENV=production
```

### Step 2: Build Frontend for Production

```bash
cd frontend
npm run build
```

This creates a `/frontend/dist` folder with your production files.

### Step 3: Upload to Your Hosting

#### Via cPanel File Manager:
1. Log in to cPanel for por.problaq.co.za
2. Go to **File Manager**
3. Navigate to `public_html` (or your root directory)
4. Create folder structure:
   ```
   public_html/
   ├── index.html (your frontend - from dist/)
   ├── assets/ (from dist/assets/)
   └── api/ (your backend)
   ```

5. Upload frontend:
   - Upload all files from `/frontend/dist/` to `public_html/`

6. Upload backend:
   - Create folder: `public_html/api/`
   - Upload all files from `/backend/` to `public_html/api/`
   - Include: `server.js`, `controllers/`, `package.json`, `.env`

#### Via FTP (FileZilla):
1. Connect to your hosting via FTP
2. Navigate to `public_html/`
3. Upload `/frontend/dist/*` to root
4. Create `api/` folder
5. Upload `/backend/*` to `api/`

### Step 4: Install Node.js Dependencies on Server

#### Via cPanel Terminal (if available):
```bash
cd public_html/api
npm install --production
```

#### Via SSH:
```bash
ssh your-username@por.problaq.co.za
cd public_html/api
npm install --production
```

### Step 5: Start Backend Server

#### Option A: Using PM2 (Recommended)
```bash
cd public_html/api
npm install -g pm2
pm2 start server.js --name "problaq-api"
pm2 startup
pm2 save
```

#### Option B: Using cPanel Node.js App
1. Go to cPanel → **Setup Node.js App**
2. Create new application:
   - Node.js version: 18 or higher
   - Application mode: Production
   - Application root: `/public_html/api`
   - Application URL: `https://por.problaq.co.za/api`
   - Application startup file: `server.js`
3. Click **Create**

### Step 6: Update Frontend API URL

Update `/frontend/.env.production`:
```env
VITE_API_URL=https://por.problaq.co.za/api
```

Rebuild frontend:
```bash
cd frontend
npm run build
```

Re-upload the new `dist/` files.

### Step 7: Test Live Site

Visit: **https://por.problaq.co.za**

Check:
- [ ] Homepage loads
- [ ] Services section visible
- [ ] Email campaign tool accessible at `#email-campaign`
- [ ] Can enter credentials
- [ ] Can paste emails
- [ ] Send test email works

---

## 🚀 Option 2: Split Deployment (Alternative)

### Deploy Frontend to Netlify (Free)

1. **Push code to GitHub** (if not already):
   ```bash
   cd /Users/siviweetenganii/Code_dev/problaq-studio
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/problaq-studio.git
   git push -u origin main
   ```

2. **Deploy to Netlify:**
   - Go to https://netlify.com
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Select your repository
   - Build settings:
     ```
     Base directory: frontend
     Build command: npm run build
     Publish directory: frontend/dist
     ```
   - Environment variables:
     ```
     VITE_API_URL=https://your-backend-url.com
     ```
   - Click "Deploy"

3. **Custom Domain:**
   - In Netlify dashboard → Domain settings
   - Add custom domain: `por.problaq.co.za`
   - Follow DNS instructions to point domain

### Deploy Backend to Railway.app (Free Tier)

1. **Create Railway Account**: https://railway.app
2. **New Project** → "Deploy from GitHub"
3. Select your repository
4. Railway auto-detects Node.js
5. **Environment Variables:**
   ```
   PORT=8000
   FRONTEND_URL=https://por.problaq.co.za
   SENDER_EMAIL=hello@por.problaq.co.za
   SENDER_PASSWORD=your-password
   NODE_ENV=production
   ```
6. **Deploy** → Railway provides a URL like `https://problaq-api.up.railway.app`
7. Update frontend `VITE_API_URL` to this Railway URL
8. Redeploy frontend

---

## 🔧 Production Configuration

### Update CORS Settings

In `/backend/server.js`, ensure CORS allows your live domain:

```javascript
const allowedOrigins = [
  process.env.FRONTEND_URL || 'http://localhost:5174',
  'https://por.problaq.co.za',
  'https://www.por.problaq.co.za',
]
```

### Security Best Practices

1. **Environment Variables:**
   - Never commit `.env` to Git
   - Use production values on server
   - Store email password securely

2. **SSL Certificate:**
   - Ensure `https://` is enabled
   - Most hosting providers offer free SSL

3. **Rate Limiting:**
   Already built-in (1 email/second)

---

## 🧪 Testing Production

### Test Checklist:
- [ ] Visit https://por.problaq.co.za
- [ ] All sections load correctly
- [ ] Email tool is accessible
- [ ] Enter credentials (hello@por.problaq.co.za)
- [ ] Paste test email (your personal email)
- [ ] Click "Send to 1 Recipient"
- [ ] Check personal email inbox
- [ ] Verify email arrived with correct formatting
- [ ] Check "From" address shows hello@por.problaq.co.za

---

## 🆘 Troubleshooting Production

### Frontend loads but email tool doesn't work
→ Check API URL in browser console (F12)  
→ Verify backend is running  
→ Check CORS settings

### "Network Error" when sending emails
→ Check backend server is running  
→ Verify API URL is correct  
→ Check firewall isn't blocking port 8000

### Emails not sending
→ Check email credentials in backend `.env`  
→ Verify SMTP server (por.problaq.co.za) is accessible  
→ Check hosting provider's email sending limits

### Backend won't start
→ Check Node.js version (needs 18+)  
→ Verify all dependencies installed (`npm install`)  
→ Check `.env` file exists and is correct

---

## 📊 Monitoring Production

### Check Backend Status:
```bash
# If using PM2
pm2 status
pm2 logs problaq-api

# If using cPanel Node.js
Check cPanel → Node.js App dashboard
```

### Check Logs:
- Backend errors: Check PM2 logs or cPanel logs
- Frontend errors: Browser console (F12)
- Email errors: Check backend console output

---

## 🎯 Quick Deploy Commands

### Build & Deploy in One Go:

```bash
# Build frontend
cd frontend
npm run build

# The dist/ folder is ready to upload!
# Upload dist/* to your hosting public_html/

# Backend is ready as-is
# Upload backend/* to public_html/api/
# Then: npm install --production
# Then: pm2 start server.js
```

---

## 📝 DNS Configuration (If Needed)

If hosting frontend separately (Netlify), update DNS:

```
Type: A Record
Name: por (or @)
Value: [Netlify IP address from their dashboard]

Type: CNAME
Name: api
Value: [Railway URL or your backend hosting]
```

---

## 🚀 Fastest Path to Live

### If you have cPanel access:

1. **Build frontend:**
   ```bash
   cd frontend
   npm run build
   ```

2. **Upload via cPanel File Manager:**
   - Upload `frontend/dist/*` → `public_html/`
   - Upload `backend/*` → `public_html/api/`

3. **Setup Node.js app in cPanel:**
   - Go to "Setup Node.js App"
   - Point to `/public_html/api`
   - Start the app

4. **Done!** Visit https://por.problaq.co.za

---

## 💡 Alternative: Use Existing Static Site

If por.problaq.co.za is already serving a static site:

1. Build frontend: `npm run build`
2. Replace current `index.html` with `dist/index.html`
3. Upload all `dist/assets/` to your assets folder
4. Deploy backend separately (Railway.app free tier)
5. Update API URL in frontend build

---

## 🎉 Post-Deployment

Once live at https://por.problaq.co.za:

1. **Test thoroughly** (send 3-5 test emails)
2. **Update all documentation** URLs to production
3. **Start sending real campaigns!**
4. **Monitor email deliverability**
5. **Track results** in your spreadsheet
6. **Close deals!** 💰

---

## 📞 Need Help?

**Hosting Provider Support:**
- Contact your hosting provider (Hostinger, SiteGround, etc.)
- Ask about: "Deploying Node.js application with frontend"

**Common Hosting Providers:**
- **Hostinger**: Has Node.js app deployment
- **SiteGround**: Supports Node.js via SSH
- **Bluehost**: Limited Node.js support (use Railway for backend)
- **cPanel**: Most have Node.js app manager

---

## ✅ Deployment Checklist

- [ ] Frontend built (`npm run build` in `/frontend`)
- [ ] Backend `.env` configured for production
- [ ] Files uploaded to hosting
- [ ] Node.js dependencies installed on server
- [ ] Backend server running (PM2 or cPanel app)
- [ ] Frontend API URL points to production backend
- [ ] SSL certificate active (https://)
- [ ] CORS configured for production domain
- [ ] Test email sent successfully
- [ ] Monitoring setup (PM2 logs or cPanel dashboard)

---

## 🚀 You're Ready!

Follow the steps above based on your hosting setup, and your email campaign system will be live!

**Need specific help with your hosting provider?** Let me know which one you use and I'll provide exact steps!
