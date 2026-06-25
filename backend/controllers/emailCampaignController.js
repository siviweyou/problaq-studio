import nodemailer from 'nodemailer'

// Email template for website revamp offer
const getEmailTemplate = (recipientName = 'there', companyName = 'your business') => {
  return {
    subject: `Quick website audit for ${companyName} — found 3 fixable issues`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #1d4ed8; color: white; padding: 20px; text-align: center; }
          .content { padding: 30px 20px; background: #ffffff; }
          .highlight { background: #f0f9ff; padding: 15px; border-left: 4px solid #2563eb; margin: 20px 0; }
          .checklist { list-style: none; padding: 0; }
          .checklist li { padding: 8px 0; padding-left: 30px; position: relative; }
          .checklist li:before { content: "✓"; position: absolute; left: 0; color: #22c55e; font-weight: bold; }
          .cta-button { display: inline-block; background: #2563eb; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
          .portfolio { display: flex; gap: 10px; margin: 20px 0; flex-wrap: wrap; }
          .portfolio-item { background: #f3f4f6; padding: 10px 15px; border-radius: 5px; font-size: 14px; }
          .footer { text-align: center; padding: 20px; color: #64748b; font-size: 12px; border-top: 1px solid #e5e7eb; }
          .signature { margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0;">Problaq Studio</h1>
            <p style="margin: 5px 0 0 0;">Full-Stack Web Development</p>
          </div>
          
          <div class="content">
            <p>Hi ${recipientName},</p>
            
            <p>I came across <strong>${companyName}'s</strong> website and noticed a few quick wins that could improve your site's performance and Google ranking.</p>
            
            <div class="highlight">
              <strong>⚡ Common issues I typically find:</strong>
              <ul style="margin: 10px 0;">
                <li>Slow page load time (Google recommends under 2.5 seconds)</li>
                <li>Mobile responsiveness issues</li>
                <li>Missing or poor SEO optimization</li>
                <li>Outdated design affecting credibility</li>
              </ul>
            </div>
            
            <p>I'm Sivuyile from <strong>Problaq Studio</strong>, a web developer based in South Africa. I specialize in revamping existing websites to make them faster, more professional, and easier to find on Google.</p>
            
            <h3 style="color: #1d4ed8;">🎯 Special Offer: R2,000 - R2,500</h3>
            
            <p><strong>Complete Website Revamp Package includes:</strong></p>
            
            <ul class="checklist">
              <li>Speed optimization (2-3x faster loading)</li>
              <li>Mobile-responsive design (70% of users browse on phones)</li>
              <li>SEO setup (meta tags, structured data, sitemap)</li>
              <li>Security updates & SSL certificate check</li>
              <li>Clean, modern redesign</li>
              <li>1 month post-launch support</li>
            </ul>
            
            <h3 style="color: #1d4ed8;">📈 Why This Matters:</h3>
            <ul style="line-height: 1.8;">
              <li><strong>53%</strong> of mobile users leave sites that take over 3 seconds to load</li>
              <li><strong>75%</strong> of users judge a business by its website design</li>
              <li>Page 1 of Google gets <strong>91.5%</strong> of all traffic</li>
            </ul>
            
            <h3 style="color: #1d4ed8;">🎨 Recent Work:</h3>
            <div class="portfolio">
              <div class="portfolio-item">🏛️ <strong>Cerb Church</strong> - cerb.church</div>
              <div class="portfolio-item">✨ <strong>Luxesutia</strong> - luxesutia.co.za</div>
              <div class="portfolio-item">🎉 <strong>Graced Living</strong> - gracedlivingevents.com</div>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://por.problaq.co.za#contact" class="cta-button">Schedule Free 15-Min Consultation →</a>
            </div>
            
            <div class="highlight">
              <p style="margin: 0;"><strong>⏰ Limited Time:</strong> This offer is only available for the next 10 businesses I work with this quarter.</p>
            </div>
            
            <div class="signature">
              <p><strong>Best regards,</strong></p>
              <p>
                <strong>Sivuyile Weetenganii</strong><br>
                Problaq Studio | Full-Stack Web Developer<br>
                🌐 <a href="https://por.problaq.co.za">por.problaq.co.za</a><br>
                📧 <a href="mailto:hello@por.problaq.co.za">hello@por.problaq.co.za</a>
              </p>
            </div>
          </div>
          
          <div class="footer">
            <p>You received this email because ${companyName} may benefit from website optimization services.</p>
            <p>Not interested? <a href="#">Unsubscribe</a></p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `Hi ${recipientName},

I came across ${companyName}'s website and noticed a few quick wins that could improve your site's performance and Google ranking.

What I typically find:
- Slow page load time (Google recommends under 2.5s)
- Mobile responsiveness issues
- Missing SEO optimization

I'm Sivuyile from Problaq Studio, a web developer based in South Africa.

SPECIAL OFFER: R2,000 - R2,500
Complete website revamp including:
✓ Speed optimization (2-3x faster)
✓ Mobile-responsive design
✓ SEO setup
✓ Security updates
✓ Modern redesign
✓ 1 month support

Recent work:
- Cerb Church (cerb.church)
- Luxesutia (luxesutia.co.za)
- Graced Living Events (gracedlivingevents.com)

Interested in a free 15-minute consultation?

Visit: https://por.problaq.co.za#contact

Best regards,
Sivuyile Weetenganii
Problaq Studio
hello@por.problaq.co.za
https://por.problaq.co.za
`
  }
}

// Validate email list
const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email.toLowerCase())
}

// Send bulk emails
export const sendBulkEmails = async (req, res) => {
  try {
    const { emails, senderEmail, senderPassword, customMessage } = req.body

    // Validate input
    if (!emails || !Array.isArray(emails) || emails.length === 0) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide an array of email addresses' 
      })
    }

    if (!senderEmail || !senderPassword) {
      return res.status(400).json({ 
        success: false, 
        message: 'Sender email and password are required' 
      })
    }

    // Filter and validate emails
    const validEmails = []
    const invalidEmails = []

    emails.forEach(item => {
      const email = typeof item === 'string' ? item : item.email
      const name = typeof item === 'object' ? item.name : ''
      const company = typeof item === 'object' ? item.company : ''

      if (validateEmail(email)) {
        validEmails.push({ email, name, company })
      } else {
        invalidEmails.push(email)
      }
    })

    if (validEmails.length === 0) {
      return res.status(400).json({ 
        success: false, 
        message: 'No valid email addresses found' 
      })
    }

    // Detect if using Gmail
    const isGmail = senderEmail.toLowerCase().includes('@gmail.com')
    
    // Create transporter with smart SMTP configuration
    const transporter = nodemailer.createTransport({
      host: isGmail ? 'smtp.gmail.com' : 'por.problaq.co.za',
      port: isGmail ? 587 : 465,
      secure: !isGmail, // true for 465, false for other ports
      auth: {
        user: senderEmail,
        pass: senderPassword
      },
      // Connection timeout settings
      connectionTimeout: 10000, // 10 seconds
      greetingTimeout: 10000,
      socketTimeout: 30000,
      // TLS options
      tls: {
        rejectUnauthorized: false // Accept self-signed certificates
      }
    })

    // Verify transporter with timeout
    try {
      await Promise.race([
        transporter.verify(),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('SMTP connection timeout - check your email server settings or try Gmail')), 15000)
        )
      ])
    } catch (verifyError) {
      throw new Error(`SMTP connection failed: ${verifyError.message}. Try using a Gmail account instead.`)
    }

    // Send emails
    const results = []
    const failed = []

    for (const recipient of validEmails) {
      try {
        const template = getEmailTemplate(
          recipient.name || 'there',
          recipient.company || 'your business'
        )

        const mailOptions = {
          from: `"Problaq Studio" <${senderEmail}>`,
          to: recipient.email,
          subject: template.subject,
          text: customMessage || template.text,
          html: template.html,
          replyTo: senderEmail
        }

        await transporter.sendMail(mailOptions)
        results.push({ email: recipient.email, status: 'sent' })

        // Add delay to avoid rate limiting (1 second between emails)
        await new Promise(resolve => setTimeout(resolve, 1000))
      } catch (error) {
        console.error(`Failed to send to ${recipient.email}:`, error.message)
        failed.push({ email: recipient.email, error: error.message })
      }
    }

    res.status(200).json({
      success: true,
      message: `Sent ${results.length} of ${validEmails.length} emails`,
      data: {
        sent: results.length,
        failed: failed.length,
        invalid: invalidEmails.length,
        results,
        failedEmails: failed,
        invalidEmails
      }
    })

  } catch (error) {
    console.error('Bulk email error:', error)
    res.status(500).json({ 
      success: false, 
      message: error.message || 'Failed to send emails' 
    })
  }
}

// Get email campaign stats
export const getCampaignStats = async (req, res) => {
  // This would typically fetch from a database
  // For now, return a placeholder response
  res.status(200).json({
    success: true,
    data: {
      totalSent: 0,
      totalOpened: 0,
      totalClicked: 0,
      totalReplied: 0
    }
  })
}

// Save campaign to database (for tracking)
export const saveCampaign = async (req, res) => {
  try {
    const { name, emails, status, sentAt } = req.body

    // This would save to your database
    // For now, just return success
    res.status(201).json({
      success: true,
      message: 'Campaign saved successfully',
      data: {
        id: Date.now().toString(),
        name,
        emailCount: emails.length,
        status,
        createdAt: new Date().toISOString()
      }
    })
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    })
  }
}
