# 🚀 Problaq Studio - Portfolio & Email Campaign System

Welcome to your complete web development portfolio with built-in bulk email campaign system!

---

## 🎉 What's New?

### ✅ Services Section
Professional showcase of your three main services:
- Full-Stack Development
- Post-Production & Video  
- Conversion Rate Optimization

### ✅ Bulk Email Campaign System
Send your R2,000-R2,500 website revamp offer to multiple businesses at once!

**Features:**
- 📧 Send to unlimited recipients
- 🎨 Beautiful HTML email templates
- 📊 Real-time success/failure tracking
- ✨ Automatic personalization with names/companies
- 🔒 Secure Gmail integration

---

## 🚀 Quick Start

### 1. Start the Application

```bash
# Terminal 1 - Backend Server
cd backend
npm start
# → http://localhost:8000

# Terminal 2 - Frontend Server  
cd frontend
npm run dev
# → http://localhost:5173
```

### 2. Access Email Campaign Tool

Open: **http://localhost:5173#email-campaign**

Or click **"Email Tool"** in the navigation menu

### 3. Enter Your Email Credentials

- **Email:** hello@por.problaq.co.za
- **Password:** Your email account password

**No Gmail App Password needed!** ✨ You're using your own professional email server.

---

## 📚 Documentation

| File | Purpose |
|------|---------|
| **START-EMAIL-CAMPAIGN.md** | ⚡ Quick start guide (5 min setup) |
| **EMAIL-CAMPAIGN-SETUP.md** | 📖 Complete setup & troubleshooting |
| **VISUAL-GUIDE.md** | 📸 Screenshots & visual walkthrough |
| **SYSTEM-SUMMARY.md** | 📋 Overview of everything included |
| **outreach-messages.md** | 💬 Manual templates & strategies |

**Start here:** `START-EMAIL-CAMPAIGN.md`

---

## 🎯 How to Use Email Campaign System

### Step 1: Enter Your Credentials
- **Email:** hello@por.problaq.co.za
- **Password:** Your email account password

(No Gmail App Password needed - using your professional email!)

### Step 2: Prepare Email List
Format (one per line):
```
john@example.com, John Doe, Example Corp
jane@business.com, Jane Smith, Business Inc
contact@company.com
```

### Step 3: Send Campaign
1. Open email tool: http://localhost:5173#email-campaign
2. Enter your email credentials
3. Paste your email list
4. Click "Send to X Recipients"
5. Watch the results! 🎉

---

## 📧 What Gets Sent?

**Subject:**  
Quick website audit for [Company] — found 3 fixable issues

**Email Content:**
- Personalized greeting with name/company
- Value proposition (R2,000-R2,500 offer)
- Complete service breakdown
- Portfolio links (cerb.church, luxesutia, etc.)
- Call-to-action button
- Professional signature

**Design:**
- Beautiful HTML with blue branding
- Mobile-responsive
- Professional footer
- Unsubscribe link included

---

## 🎨 Website Sections

1. **Hero** - Your main intro and stats
2. **Services** ⭐ NEW - Three service cards
3. **Brand Names** - Naming options (Problaq Studio chosen)
4. **Projects** - Portfolio showcase
5. **Now Booking** - Available services
6. **Skills** - Tech stack
7. **Pricing** - Service packages
8. **Email Campaign** ⭐ NEW - Bulk email tool
9. **Contact** - Get in touch form
10. **Footer** - Links and info

---

## 📁 Project Structure

```
problaq-studio/
├── backend/
│   ├── controllers/
│   │   ├── contactController.js
│   │   ├── projectController.js
│   │   └── emailCampaignController.js ⭐ NEW
│   ├── server.js (updated with email routes)
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Services.jsx ⭐ NEW
│   │   │   ├── EmailCampaign.jsx ⭐ NEW
│   │   │   ├── Hero.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── ... (other components)
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx (updated)
│   │   └── index.css (updated)
│   ├── package.json
│   └── .env
│
└── Documentation/
    ├── README.md (this file)
    ├── START-EMAIL-CAMPAIGN.md ⭐
    ├── EMAIL-CAMPAIGN-SETUP.md ⭐
    ├── VISUAL-GUIDE.md ⭐
    ├── SYSTEM-SUMMARY.md ⭐
    └── outreach-messages.md ⭐
```

---

## 🔧 Tech Stack

### Backend:
- Node.js + Express
- Nodemailer (for emails)
- File-based JSON database
- CORS enabled

### Frontend:
- React 18
- Vite (build tool)
- Custom CSS (no framework)
- Responsive design

---

## 🌐 URLs

### Local Development:
- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:8000
- **Email Tool:** http://localhost:5173#email-campaign

### Production (when deployed):
- **Website:** https://por.problaq.co.za
- **Email Tool:** https://por.problaq.co.za#email-campaign

---

## 📊 Email Campaign Best Practices

### Timing:
- ✅ **Tue-Thu, 10am-3pm** (best open rates)
- ❌ Avoid Mondays, Fridays, weekends

### Volume:
- **Week 1:** 5-10 emails/day (warm up)
- **Week 2:** 10-20 emails/day
- **Week 3+:** 20-50 emails/day (max)

### Follow-up:
- **Day 0:** Initial email
- **Day 3:** First follow-up
- **Day 7:** Second follow-up + case study
- **Day 14:** Final follow-up

### Expected Results:
- **Open rate:** 20-30%
- **Reply rate:** 2-5%
- **Conversion:** 0.5-1%

**Example:** 100 emails → 25 opens → 3 replies → 1 client @ R2,500 ✅

---

## 🔒 Security

### Gmail App Password:
- ✅ Use App Password (not regular password)
- ✅ Enable 2-Step Verification first
- ❌ Never commit to Git
- ❌ Never share publicly

### Environment Variables:
For production, use `.env` file:
```env
SENDER_EMAIL=your-email@gmail.com
SENDER_PASSWORD=your-app-password
PORT=8000
```

Add to `.gitignore`:
```
.env
*.env
node_modules/
```

---

## 🆘 Troubleshooting

### "Invalid credentials"
→ Use App Password, not regular Gmail password  
→ Enable 2-Step Verification on Google Account

### Emails going to spam
→ Start with fewer emails (warm up account)  
→ Use professional Gmail, not new account  
→ Ask recipients to check spam initially

### Backend connection errors
→ Check backend running on port 8000  
→ Check frontend .env has correct API_URL  
→ Verify CORS allows localhost:5173

### Rate limiting
→ Gmail limit: 500 emails/day  
→ Wait 24 hours between large campaigns  
→ Consider multiple Gmail accounts

**More help:** See `EMAIL-CAMPAIGN-SETUP.md`

---

## 📈 Tracking Your Campaigns

Create a spreadsheet to track:

| Date | Email | Name | Company | Status | Notes |
|------|-------|------|---------|--------|-------|
| Jun 8 | john@ex.com | John | Ex Corp | Sent | - |
| Jun 8 | jane@biz.com | Jane | Biz Inc | Replied | Interested! |
| Jun 11 | john@ex.com | John | Ex Corp | Follow-up 1 | - |

**Statuses:**
- Sent
- Opened (track manually)
- Replied
- Call booked
- Proposal sent
- Closed (🎉)
- Not interested

---

## 🎯 Your Workflow

### Daily (10 minutes):
1. Research 5-10 businesses
2. Collect emails from websites
3. Add to spreadsheet
4. Send 10-20 emails via tool
5. Reply to any responses

### Weekly (1 hour):
1. Follow up on non-responses
2. Schedule consultation calls
3. Send proposals to interested leads
4. Update tracking spreadsheet
5. Analyze what's working

### Monthly:
1. Review total campaigns sent
2. Calculate response rate
3. Adjust email template if needed
4. Celebrate closed deals! 💰

---

## 💡 Pro Tips

1. **Personalize when possible** - Mention specific issues on their site
2. **Test before scaling** - Send to yourself first
3. **Track everything** - Use spreadsheet religiously
4. **Follow up 3 times** - Most sales happen after multiple touches
5. **Reply fast** - Respond within 1 hour to leads
6. **Have proposal ready** - Don't make them wait
7. **Use separate Gmail** - Protect your main email
8. **Monitor spam rate** - Ask recipients to whitelist
9. **A/B test subject lines** - Try different approaches
10. **Stay consistent** - Send every day for best results

---

## 🎉 What You Can Achieve

### Month 1:
- 500 emails sent
- 125 opened (25%)
- 15 replies (3%)
- 5 calls booked
- 2 clients closed
- **Revenue: R5,000** 💰

### Month 3:
- 1,500 emails sent
- 375 opened (25%)
- 45 replies (3%)
- 15 calls booked
- 6 clients closed
- **Revenue: R15,000** 💰

### Month 6:
- 3,000 emails sent
- 750 opened (25%)
- 90 replies (3%)
- 30 calls booked
- 12 clients closed
- **Revenue: R30,000** 💰

**Plus referrals and repeat business!**

---

## 📞 Need Help?

1. **Read the docs:** Start with `START-EMAIL-CAMPAIGN.md`
2. **Check troubleshooting:** See `EMAIL-CAMPAIGN-SETUP.md`
3. **Visual guide:** See `VISUAL-GUIDE.md`
4. **Manual strategies:** See `outreach-messages.md`

---

## 🚀 Ready to Launch?

### Today:
- [ ] Read `START-EMAIL-CAMPAIGN.md`
- [ ] Get Gmail App Password
- [ ] Test with 3 emails (to yourself)
- [ ] Verify emails arrive correctly

### This Week:
- [ ] Research 50 target businesses
- [ ] Collect emails + info
- [ ] Send 10 test campaigns
- [ ] Track responses
- [ ] Book first consultation call

### This Month:
- [ ] Send 20 emails per day
- [ ] Follow up consistently
- [ ] Close first R2,500 deal
- [ ] Get testimonial
- [ ] Scale up! 🎯

---

## 📝 License

This is your proprietary system for Problaq Studio.

---

## 🎊 You're All Set!

Everything is ready. Now go close some deals! 🚀💰

**Start here:** `START-EMAIL-CAMPAIGN.md`

---

**Built with ❤️ by Kiro AI for Problaq Studio**  
**Date:** June 2026  
**Version:** 1.0.0
