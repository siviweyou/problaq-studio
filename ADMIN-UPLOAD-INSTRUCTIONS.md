# 🔐 Admin Email Tool - Upload Instructions

## What We Created

A **standalone admin page** for your email campaign tool with login protection!

**File:** `admin-email-tool.html`

---

## 📤 How to Upload

### Step 1: Upload to cPanel

1. Log in to your **cPanel**
2. Go to **File Manager**
3. Navigate to `public_html/`
4. Click **Upload**
5. Upload the file: `/Users/siviweetenganii/Code_dev/problaq-studio/admin-email-tool.html`
6. Wait for upload to complete

### Step 2: Rename (Optional but Recommended)

For cleaner URL, rename the file:

1. Find `admin-email-tool.html` in File Manager
2. Right-click → **Rename**
3. Rename to: `admin.html`

---

## 🔗 Access Your Email Tool

**After uploading:**

**If renamed to admin.html:**
```
https://por.problaq.co.za/admin.html
```

**If kept original name:**
```
https://por.problaq.co.za/admin-email-tool.html
```

---

## 🔐 Login Credentials

**Username:** `admin`  
**Password:** `problaq2024`

---

## ✅ How It Works

1. Visit the admin URL
2. Enter username and password
3. You'll see the email campaign tool
4. Enter your email credentials:
   - Email: `hello@por.problaq.co.za`
   - Password: [your email password]
5. Paste your email list
6. Click "Send Campaign"
7. Watch the results!

---

## 🎯 Features

✅ **Login protected** - Only you can access  
✅ **Standalone page** - Doesn't affect your main site  
✅ **Clean URL** - Easy to remember  
✅ **Mobile responsive** - Works on phone/tablet  
✅ **Beautiful UI** - Professional gradient design  
✅ **Real-time stats** - See sent/failed/invalid counts  
✅ **Built-in tips** - Best practices included  

---

## 🔒 Security Notes

### Change the Password!

The default password is `problaq2024`. To change it:

1. Download `admin.html` from cPanel
2. Open in text editor
3. Find this line (around line 302):
   ```javascript
   const ADMIN_PASS = 'problaq2024';
   ```
4. Change to your own password:
   ```javascript
   const ADMIN_PASS = 'your-new-password-here';
   ```
5. Save and re-upload

### Keep the URL Private

Don't share the admin URL publicly. It's for your use only!

---

## 📱 Quick Access

**Bookmark this URL** on your browser for quick access:
```
https://por.problaq.co.za/admin.html
```

---

## 🎉 You're Done!

Upload the file, visit the URL, login, and start sending campaigns! 🚀

**No conflicts with your main site!**  
**No complex setup!**  
**Just one HTML file!**
