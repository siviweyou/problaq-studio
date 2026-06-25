# 📧 Quick Fix: Use Gmail SMTP Instead

## Why Gmail?
- ✅ **No firewall issues** - Google's SMTP servers are never blocked
- ✅ **Free** - 500 emails per day limit
- ✅ **Reliable** - 99.9% uptime
- ✅ **Works immediately** - No waiting for hosting provider

## ⚠️ Important Note
You'll still send from `hello@por.problaq.co.za` in the email body, but the technical sender will be your Gmail account. Recipients will see your Problaq email as the reply-to address.

---

## 🚀 Setup Gmail SMTP (5 Minutes)

### Step 1: Create Gmail App Password

1. **Go to:** https://myaccount.google.com/security
2. **Enable 2-Step Verification** (if not already enabled)
   - Click "2-Step Verification"
   - Follow the setup wizard
3. **Create App Password:**
   - Click "App passwords" (you'll see this after enabling 2-Step)
   - Select "Mail" and "Other (Custom name)"
   - Name it: "Problaq Email Campaign"
   - Click "Generate"
   - **Copy the 16-character password** (e.g., `abcd efgh ijkl mnop`)
   - Keep this password safe!

### Step 2: Update Backend Code

I'll update the backend to support Gmail SMTP:

**Option A: Use Gmail directly** (Recommended for testing)
```javascript
// In emailCampaignController.js
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-gmail@gmail.com',
    pass: 'your-16-char-app-password'
  }
})
```

**Option B: Use environment variables** (Better for production)
```javascript
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false, // use TLS
  auth: {
    user: senderEmail,
    pass: senderPassword
  }
})
```

### Step 3: Use the Tool

1. **Login to admin tool:** `https://por.problaq.co.za/admin-email-tool.html`
2. **Enter Gmail credentials:**
   - Email: `your-gmail@gmail.com`
   - Password: `your-16-char-app-password` (from Step 1)
3. **Send test email** to yourself first
4. **If successful**, send bulk campaign!

---

## 🔄 Want Me to Update the Backend Now?

I can update the backend code to use Gmail SMTP right now. Just confirm:

**Option 1: Hardcode Gmail in backend** (fastest)
- I'll update the code to use smtp.gmail.com
- You just enter your Gmail credentials in the admin tool
- Backend redeploys in ~2 minutes

**Option 2: Keep flexible SMTP** (current setup)
- Keep current code that accepts any SMTP
- You enter Gmail credentials in the admin tool
- No code changes needed

---

## 📊 Gmail Sending Limits

| Limit | Amount |
|-------|--------|
| **Emails per day** | 500 emails |
| **Recipients per email** | 100 (we send 1 per email, so no issue) |
| **Rate limit** | ~1 email per second (we already do this) |

**For your use case:**
- Sending 20-50 emails per day → ✅ Perfect fit
- Sending 100-200 per day → ✅ Still good
- Sending 500+ per day → Consider SendGrid or Mailgun

---

## 🎯 Alternative: Use Your Current Email with Gmail Relay

If you want to keep using `hello@por.problaq.co.za` but route through Gmail:

1. **Add custom email to Gmail:**
   - Settings → Accounts → "Send mail as"
   - Add `hello@por.problaq.co.za`
   - Verify ownership

2. **Use Gmail SMTP with custom "From":**
   - Emails will come from `hello@por.problaq.co.za`
   - But route through Gmail's reliable servers

---

## 🆘 Troubleshooting Gmail SMTP

**Error: "Invalid login"**
- Make sure you created an **App Password**, not your regular Gmail password
- App Password is 16 characters with spaces: `abcd efgh ijkl mnop`
- Remove spaces when entering: `abcdefghijklmnop`

**Error: "Less secure app access"**
- Gmail no longer supports this
- You MUST use 2-Step Verification + App Password
- No way around it

**Error: "Daily sending quota exceeded"**
- You've sent 500 emails today
- Wait 24 hours or upgrade to Google Workspace

---

## 💡 Recommendation

**For Now (Testing):**
→ Use Gmail SMTP with app password

**Long Term (Scaling):**
→ Use SendGrid or Mailgun (professional email services)

**Want me to update the backend code to support Gmail?** Just say "update backend for gmail" and I'll do it now!
