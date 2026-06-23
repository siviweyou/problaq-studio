# 📧 Bulk Email Campaign System Setup Guide

## Overview
Your website now has a complete bulk email system! You can paste a list of emails and automatically send your R2,000-R2,500 website revamp offer to all of them.

---

## ✅ What's Been Added

### Backend:
1. **Email Campaign Controller** (`/backend/controllers/emailCampaignController.js`)
   - Handles bulk email sending via Gmail
   - Beautiful HTML email templates
   - Email validation
   - Rate limiting (1 email per second to avoid spam filters)
   - Detailed success/failure reporting

2. **API Routes** (in `/backend/server.js`)
   - `POST /api/email-campaign/send` - Send bulk emails
   - `GET /api/email-campaign/stats` - Get campaign statistics
   - `POST /api/email-campaign/save` - Save campaign data

### Frontend:
1. **Email Campaign Component** (`/frontend/src/components/EmailCampaign.jsx`)
   - Clean UI for pasting email lists
   - Real-time email count
   - Success/failure reporting
   - Tips and best practices

---

## 🚀 How to Use

### Step 1: Get Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Click **Security** in the left sidebar
3. Enable **2-Step Verification** (if not already enabled)
4. Scroll down to **App Passwords**
5. Click **App Passwords**
6. Select **Mail** and **Other (Custom name)**
7. Enter "Problaq Email Campaign"
8. Click **Generate**
9. **Copy the 16-character password** (save it somewhere safe!)

### Step 2: Access the Email Campaign Tool

1. Start your backend server:
   ```bash
   cd backend
   npm start
   ```

2. Start your frontend dev server:
   ```bash
   cd frontend
   npm run dev
   ```

3. Open your browser to: `http://localhost:5173`
4. Scroll down to **Section 06: Email Campaign Tool**

### Step 3: Prepare Your Email List

Format your emails like this (one per line):

```
john@example.com, John Doe, Example Corp
jane@business.com, Jane Smith, Business Inc
contact@company.com
info@startup.com, Mike Johnson, Startup LLC
```

**Format Options:**
- Just email: `email@domain.com`
- Email + name: `email@domain.com, John Doe`
- Email + name + company: `email@domain.com, John Doe, Example Corp`

### Step 4: Send Your Campaign

1. **Paste your Gmail address** (e.g., `you@gmail.com`)
2. **Paste your Gmail App Password** (the 16-character code from Step 1)
3. **Paste your email list** in the large text area
4. Click **"Send to X Recipients"**
5. Wait for the results!

---

## 📧 Email Template

Your automated email includes:

**Subject:** Quick website audit for [Company] — found 3 fixable issues

**Content:**
- Personalized greeting with name and company
- Problem identification (slow site, poor mobile, bad SEO)
- Your R2,000-R2,500 offer
- Full list of what's included
- Your portfolio links (cerb.church, luxesutia, etc.)
- Call-to-action button
- Professional signature

**Design:**
- Beautiful HTML with blue header
- Checkmark list for services
- Portfolio showcase
- Mobile-responsive
- Professional footer with unsubscribe link

---

## 🎯 Best Practices

### Timing:
- ✅ Send **Tuesday - Thursday**
- ✅ Send between **10am - 3pm** (business hours)
- ❌ Avoid Mondays (too busy) and Fridays (weekend mode)
- ❌ Avoid sending after 5pm or on weekends

### Volume:
- **Start small:** 10-20 emails per day
- **Gradually increase:** Once you see good delivery rates
- **Never exceed:** 50 emails per day from one account
- **Use delays:** The system automatically waits 1 second between emails

### Email Quality:
- ✅ Verify emails are valid before pasting
- ✅ Remove duplicates
- ✅ Include names and companies when possible
- ✅ Use a professional Gmail account
- ❌ Don't use free email addresses (yahoo, hotmail, etc.)

### Account Safety:
- **Warm up your account:** Start with 5-10 emails per day for the first week
- **Monitor bounce rate:** If many emails bounce, slow down
- **Check spam folder:** Make sure your emails aren't going to spam
- **Keep engagement high:** Reply to responses quickly

---

## 🔧 Troubleshooting

### "Invalid credentials" error:
- Make sure you're using an **App Password**, not your regular Gmail password
- Check that 2-Step Verification is enabled on your Google Account
- Try generating a new App Password

### Emails going to spam:
- **Warm up your account** - start with fewer emails per day
- **Improve sender reputation** - ensure recipients engage with your emails
- **Use a professional Gmail** - not a new account
- **Add SPF/DKIM records** - if using custom domain (advanced)

### "Rate limit exceeded":
- Gmail limits: 500 emails per day for standard accounts
- Wait 24 hours and try again
- Consider using multiple Gmail accounts

### Emails not sending:
- Check your internet connection
- Verify your Gmail credentials
- Check if Gmail blocked suspicious activity (you'll get an email)
- Make sure backend server is running on port 8000

---

## 📊 Tracking Results

### What the system shows:
- ✅ **Sent:** Emails successfully delivered
- ❌ **Failed:** Emails that couldn't be sent (with error messages)
- ⚠️ **Invalid:** Email addresses that don't pass validation

### Manual tracking (recommended):
Create a spreadsheet to track:
- Email address
- Date sent
- Response status (no response / interested / not interested)
- Follow-up date
- Notes

### Follow-up schedule:
- **Day 0:** Initial email
- **Day 3:** First follow-up (if no response)
- **Day 7:** Second follow-up with case study
- **Day 14:** Final follow-up with urgency
- **Day 30+:** Add to newsletter list

---

## 🎨 Customizing the Email Template

To customize the email template, edit:
`/backend/controllers/emailCampaignController.js`

Look for the `getEmailTemplate()` function around line 3.

You can change:
- Subject line
- Email body text
- Your contact information
- Portfolio links
- Pricing
- Call-to-action button text

---

## 🔒 Security Notes

### Your App Password:
- **Never commit** App Passwords to Git
- **Never share** your App Password
- **Store securely** - use environment variables in production
- **Revoke immediately** if compromised

### Production Deployment:
For production, store credentials securely:

1. Create `/backend/.env` file:
```env
SENDER_EMAIL=your-email@gmail.com
SENDER_PASSWORD=your-app-password-here
```

2. Update controller to read from environment:
```javascript
const senderEmail = process.env.SENDER_EMAIL || req.body.senderEmail
const senderPassword = process.env.SENDER_PASSWORD || req.body.senderPassword
```

3. Add `.env` to `.gitignore`

---

## 📈 Expected Results

### Typical response rates:
- **Open rate:** 20-30% (if emails don't go to spam)
- **Reply rate:** 2-5% (actual interested leads)
- **Conversion rate:** 0.5-1% (signed clients)

### Example calculation:
- Send to: 100 businesses
- Opened: 25 (25%)
- Replied: 3 (3%)
- Booked calls: 2
- Signed: 1 (R2,500 project)

**ROI:** One client pays for itself!

---

## 🎯 Next Steps

### Week 1:
- [ ] Set up Gmail App Password
- [ ] Test with 5-10 emails to friends/test accounts
- [ ] Check emails in inbox (not spam)
- [ ] Verify all links work
- [ ] Create tracking spreadsheet

### Week 2:
- [ ] Research 50 target businesses
- [ ] Collect emails from their websites
- [ ] Send 10 emails per day
- [ ] Track responses
- [ ] Refine email template based on feedback

### Week 3+:
- [ ] Increase to 20 emails per day
- [ ] Follow up on non-responses
- [ ] Schedule calls with interested leads
- [ ] Send proposals
- [ ] Close deals! 💰

---

## 🆘 Need Help?

If you run into issues:

1. **Check the browser console** (F12) for JavaScript errors
2. **Check the backend logs** for server errors
3. **Test with one email first** before bulk sending
4. **Verify Gmail App Password** is correct
5. **Check spam folder** on recipient side

---

## 🎉 You're Ready!

Your bulk email system is live at:
**http://localhost:5173#email-campaign**

Once deployed, it will be at:
**https://por.problaq.co.za#email-campaign**

Good luck with your outreach! 🚀

---

**Pro Tip:** Create a separate Gmail account specifically for cold outreach. This way, if anything goes wrong, your main business email stays safe.
