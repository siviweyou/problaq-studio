# 📧 Custom Email Server Setup - Problaq Studio

## Your Email Configuration

**Email Address:** hello@por.problaq.co.za  
**SMTP Server:** por.problaq.co.za  
**SMTP Port:** 465 (SSL)  
**Password:** Your email account password

---

## ✅ System Already Configured!

The email campaign system is already set up to work with your custom email server.

**No Gmail App Password needed!** ✨

---

## 🚀 How to Use

### Step 1: Start Servers

```bash
# Terminal 1 - Backend
cd backend
npm start

# Terminal 2 - Frontend
cd frontend
npm run dev
```

### Step 2: Open Email Tool

Visit: **http://localhost:5173#email-campaign**

### Step 3: Enter Your Credentials

```
Email Address: hello@por.problaq.co.za
Password: [Your email password]
```

### Step 4: Paste Your Email List

Format (one per line):
```
john@example.com, John Doe, Example Corp
jane@business.com, Jane Smith, Business Inc
contact@company.com
```

### Step 5: Send!

Click **"Send to X Recipients"** and watch the magic happen! ✨

---

## 🔒 Security Notes

### Your Email Password:
- ✅ Keep it secure and private
- ✅ Never share it publicly
- ✅ Don't commit it to Git
- ❌ The system doesn't save your password (enter it each time)

### For Production (Optional):
If you want to avoid entering credentials every time, store them in `/backend/.env`:

```env
SENDER_EMAIL=hello@por.problaq.co.za
SENDER_PASSWORD=your-password-here
```

Then update the controller to use these values as defaults.

**Add to `.gitignore`:**
```
.env
*.env
```

---

## 📧 Email Sending Limits

### Your Server Limits:
Check with your hosting provider for:
- **Daily sending limit** (typically 250-500/day for shared hosting)
- **Hourly rate limit** (typically 50-100/hour)
- **Spam filter thresholds**

### Recommended Approach:
- **Start small:** 10-20 emails per day for first week
- **Monitor:** Check if emails arrive in inbox (not spam)
- **Scale gradually:** Increase to 30-50/day after successful tests
- **Stay safe:** Don't exceed your hosting provider's limits

---

## 🎯 Advantages of Your Custom Email

### ✅ Professional Appearance
- Emails come from **hello@por.problaq.co.za**
- Builds trust with your branded domain
- More credible than Gmail addresses

### ✅ No Google Dependency
- No need for App Passwords
- No 2-Step Verification setup
- Direct SMTP access

### ✅ Full Control
- You own the infrastructure
- No risk of Google account suspension
- Complete privacy

---

## 🧪 Testing Your Setup

### Test Email to Yourself:

1. Open the email tool
2. Enter your credentials:
   - Email: hello@por.problaq.co.za
   - Password: [your password]
3. Paste a test email (your personal email):
   ```
   your-personal@gmail.com, Test User, Test Company
   ```
4. Click "Send to 1 Recipient"
5. Check your personal email inbox

**Expected Result:**  
You should receive a professional HTML email with:
- Subject: "Quick website audit for Test Company — found 3 fixable issues"
- From: Problaq Studio <hello@por.problaq.co.za>
- Beautiful HTML design with your branding

---

## 🆘 Troubleshooting

### "Authentication failed"
→ Double-check your email password  
→ Verify the password works in your email client (Outlook, Thunderbird, etc.)

### "Connection refused" or "Timeout"
→ Check that `por.problaq.co.za` server is accessible  
→ Verify port 465 is not blocked by firewall  
→ Contact your hosting provider if issues persist

### "Emails not arriving"
→ Check recipient's spam folder  
→ Verify your domain has SPF/DKIM records (ask hosting provider)  
→ Start with smaller volumes to build sender reputation

### "Rate limit exceeded"
→ Check your hosting provider's email sending limits  
→ Reduce daily volume  
→ Wait 24 hours before trying again

---

## 📊 SMTP Server Details

Your email system uses these settings:

```javascript
{
  host: 'por.problaq.co.za',
  port: 465,
  secure: true, // SSL encryption
  auth: {
    user: 'hello@por.problaq.co.za',
    pass: '[your password]'
  }
}
```

**Alternative ports** (if 465 doesn't work):
- Port 587 with STARTTLS
- Port 25 (usually blocked by ISPs)

If you need to change the port, edit:  
`/backend/controllers/emailCampaignController.js` line ~65

---

## 🎨 Email Template

Your emails will be sent as:

**From:** Problaq Studio <hello@por.problaq.co.za>  
**Reply-To:** hello@por.problaq.co.za  
**Subject:** Quick website audit for [Company] — found 3 fixable issues

**Design:**
- Professional HTML with blue header
- Problaq Studio branding
- Portfolio showcase (cerb.church, luxesutia, etc.)
- R2,000-R2,500 offer clearly displayed
- Call-to-action button linking to por.problaq.co.za
- Mobile-responsive
- Unsubscribe link in footer

---

## 💡 Best Practices for Custom SMTP

### Email Authentication:
Ask your hosting provider to set up:
1. **SPF Record** - Authorizes your server to send emails
2. **DKIM Signature** - Proves email authenticity
3. **DMARC Policy** - Tells recipients how to handle failures

These settings prevent your emails from going to spam.

### Warm-Up Period:
New email addresses need to build reputation:
- **Week 1:** 5-10 emails/day
- **Week 2:** 20-30 emails/day
- **Week 3:** 40-50 emails/day
- **Week 4+:** Up to your server limit

### Monitor Deliverability:
- Ask initial recipients to check spam folder
- Request they add you to contacts/whitelist
- Track bounce rates (bad emails)
- Maintain under 5% bounce rate

---

## 🔧 Advanced: Auto-Fill Credentials (Optional)

To avoid typing credentials every time, create `/backend/.env`:

```env
# Email Configuration
SENDER_EMAIL=hello@por.problaq.co.za
SENDER_PASSWORD=your-actual-password-here

# Server Configuration
PORT=8000
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
```

Then update `/backend/controllers/emailCampaignController.js`:

```javascript
// Around line 53, replace:
const { emails, senderEmail, senderPassword, customMessage } = req.body

// With:
const { 
  emails, 
  senderEmail = process.env.SENDER_EMAIL, 
  senderPassword = process.env.SENDER_PASSWORD, 
  customMessage 
} = req.body
```

**Benefits:**
- ✅ No need to enter credentials every time
- ✅ More secure (not typed in browser)
- ✅ Easier for automated campaigns

**Remember:**
- Add `.env` to `.gitignore`
- Never commit `.env` to Git
- Use different `.env` for production

---

## 📈 Scaling Tips

### Multiple Campaigns:
- Track campaigns in spreadsheet
- Tag emails with campaign IDs
- Measure response rates per campaign
- A/B test different subject lines

### Follow-Up Automation:
- Export non-responders to new list
- Send follow-up campaigns after 3, 7, 14 days
- Use different subject lines for follow-ups
- Include case studies in second email

### Team Collaboration:
- Create separate email addresses for team members
- Track who sent what campaign
- Share tracking spreadsheet
- Weekly sync meetings to review results

---

## 🎯 Expected Results

### With Your Custom Email:

**Advantages:**
- ✅ Professional branded sender
- ✅ Better deliverability (your domain)
- ✅ Builds brand recognition
- ✅ More trustworthy than Gmail

**Realistic Goals:**
- **Open rate:** 25-30% (better than Gmail!)
- **Reply rate:** 3-5%
- **Conversion:** 1-2%

**Example Campaign:**
- Send to 100 businesses
- 28 opened (28%)
- 4 replied (4%)
- 2 calls booked
- 1 client closed @ R2,500 ✅

**Monthly Scale:**
- 1,000 emails sent
- 280 opened
- 40 replies
- 20 calls
- 10 clients closed
- **Revenue: R25,000/month** 🚀

---

## ✅ Quick Start Checklist

- [ ] Servers are running (backend on 8000, frontend on 5173)
- [ ] Email tool is open (http://localhost:5173#email-campaign)
- [ ] Password is ready (your email account password)
- [ ] Test email list prepared (at least 1-3 test emails)
- [ ] Sent test email to yourself
- [ ] Verified email arrived in inbox (not spam)
- [ ] Ready to send real campaigns! 🚀

---

## 🎉 You're All Set!

Your custom email server is configured and ready to send bulk campaigns!

**Your setup:**
- ✅ Professional email: hello@por.problaq.co.za
- ✅ Custom SMTP server: por.problaq.co.za
- ✅ Secure SSL connection (port 465)
- ✅ Beautiful HTML email templates
- ✅ Bulk sending with tracking

**Next steps:**
1. Test with 3-5 emails to yourself
2. Verify deliverability
3. Start sending to real prospects
4. Close deals! 💰

---

**Need help?** See `EMAIL-CAMPAIGN-SETUP.md` for general troubleshooting.

**Questions about your email server?** Contact your hosting provider.

**Ready to send?** Visit: http://localhost:5173#email-campaign

---

**Good luck! 🚀**
