# 🔧 Troubleshooting: Connection Timeout Error

## Problem
Getting "❌ Error: Connection timeout" when trying to send emails through the admin tool.

## Root Cause
The timeout happens when the **Railway backend** tries to connect to your **SMTP server** (por.problaq.co.za:465). This is typically caused by:

### 1. **Firewall Blocking Railway's IP Addresses** ⚠️ MOST COMMON
- Your hosting provider (cPanel) firewall is blocking connections from Railway's servers
- Railway uses dynamic IP addresses that may not be whitelisted

### 2. **Wrong Email Password**
- The password for hello@por.problaq.co.za is incorrect
- Copy-paste issues or special characters

### 3. **SMTP Server Configuration**
- Port 465 may not be accessible from external servers
- SSL/TLS settings mismatch

---

## ✅ Solutions (In Order of Likelihood)

### Solution 1: Use the Debug Tool (RECOMMENDED - Do This First!)

I've created `admin-email-tool-debug.html` that will help diagnose the exact issue.

**Steps:**
1. Upload `admin-email-tool-debug.html` to your cPanel `public_html/` folder
2. Visit: `https://por.problaq.co.za/admin-email-tool-debug.html`
3. Login with: admin / problaq2024
4. Enter your email credentials
5. Click "🧪 Send Test Email First"
6. **Check the debug log** at the bottom — it will show exactly what's failing

The debug tool will tell you if it's a:
- Connection timeout (firewall issue)
- Authentication error (password issue)
- SMTP configuration error

---

### Solution 2: Whitelist Railway IP Addresses (If Firewall is the Issue)

**Contact your hosting provider** (cPanel support) and ask them to:

1. **Whitelist these Railway IP ranges** for SMTP (port 465):
   ```
   Railway uses dynamic IPs in these regions:
   - US East (Virginia)
   - US West (Oregon)
   ```

2. **Or ask them to:**
   - Allow all outbound SMTP connections on port 465
   - Disable SMTP restrictions for authenticated users

**How to contact:**
- Login to your cPanel
- Look for "Support" or "Submit Ticket"
- Tell them: "I need to whitelist external IPs for SMTP connections to por.problaq.co.za:465"

---

### Solution 3: Use Alternative Email Service (FASTEST FIX)

Instead of using your custom SMTP server, use a professional email service that's designed for sending bulk emails:

#### Option A: Use Gmail SMTP (Free, 500 emails/day)
```
SMTP Server: smtp.gmail.com
Port: 587
Enable "App Passwords" in Google Account settings
```

#### Option B: Use SendGrid (Free, 100 emails/day)
```
1. Sign up: https://sendgrid.com
2. Create API key
3. Use their SMTP relay
```

#### Option C: Use Mailgun (Free, 100 emails/day)
```
1. Sign up: https://mailgun.com
2. Verify your domain
3. Use their SMTP credentials
```

**Advantages:**
- ✅ No firewall issues
- ✅ Better deliverability
- ✅ Email tracking & analytics
- ✅ Less likely to be marked as spam

---

### Solution 4: Verify SMTP Settings in cPanel

**Steps:**
1. Login to your cPanel
2. Go to **Email Accounts**
3. Find `hello@por.problaq.co.za`
4. Click "Configure Email Client"
5. **Verify these settings:**
   - Outgoing Server: `por.problaq.co.za`
   - SMTP Port: `465`
   - Encryption: `SSL`
   - Authentication: `Required`

6. **Check if "Remote SMTP" is allowed:**
   - Some hosts block external SMTP connections
   - Look for "Mail Server Configuration" in cPanel
   - Ensure "Allow remote SMTP" is enabled

---

### Solution 5: Test SMTP Connection Manually

Use this command on your local machine to test if the SMTP server is reachable:

```bash
telnet por.problaq.co.za 465
```

**Expected result:**
- If it connects: You'll see a connection message
- If it times out: The server is blocking connections

---

### Solution 6: Change Backend Environment Variables

If you decide to use a different email service, update Railway environment variables:

1. Go to your Railway dashboard
2. Click on your project
3. Go to **Variables** tab
4. Update or add:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   ```

Then update the backend code to use these variables instead of hardcoded `por.problaq.co.za`.

---

## 🧪 Testing Checklist

Use `admin-email-tool-debug.html` and check:

- [ ] Backend health check passes (✅ Backend is online)
- [ ] Test email to yourself works
- [ ] Debug log shows where connection fails
- [ ] If "Connection timeout" → It's a firewall issue
- [ ] If "Authentication failed" → It's a password issue
- [ ] If "SMTP error" → It's a configuration issue

---

## 📞 Quick Fixes Based on Debug Log

**If you see:** "Connection timeout after 30s"
→ **Fix:** Whitelist Railway IPs or use alternative email service

**If you see:** "Invalid login"
→ **Fix:** Double-check password, ensure no special characters causing issues

**If you see:** "ECONNREFUSED"
→ **Fix:** Port 465 is blocked, try port 587 or use alternative service

**If you see:** "Self-signed certificate"
→ **Fix:** SSL certificate issue, update to port 587 with STARTTLS

---

## 🎯 Recommended Path Forward

1. **Upload and test with `admin-email-tool-debug.html`** (5 minutes)
2. **Check debug logs** to identify exact issue
3. **If firewall:** Contact hosting provider to whitelist IPs
4. **If urgent:** Switch to Gmail/SendGrid temporarily (10 minutes setup)
5. **Long-term:** Set up proper transactional email service (SendGrid/Mailgun)

---

## 📁 Files
- `admin-email-tool-debug.html` - Debug version with detailed logging
- `admin-email-tool.html` - Production version (use after fixing)

## 🆘 Still Having Issues?

Check the debug log and send me:
1. The exact error message from the debug log
2. Your hosting provider name
3. Whether you can send emails from cPanel webmail successfully

I'll help you resolve it!
