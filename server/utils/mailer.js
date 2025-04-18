const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendQuoteEmail = async (data) => {
  const {
    name,
    email,
    phone,
    message,
    regNumber,
    lookupData = {},
    matchedServices = [],
    deliveryMethod,
    gdpr
  } = data;

  const servicesList = matchedServices.length > 0
    ? matchedServices.join(', ')
    : 'No services selected';

  const html = `
    <h2>New Quote Request</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong> ${message || '-'}</p>
    <hr />
    <p><strong>Reg Number:</strong> ${regNumber}</p>
    <p><strong>Vehicle:</strong> ${lookupData.make || '-'} ${lookupData.model || ''} (${lookupData.year || '-'})</p>
    <p><strong>Fuel:</strong> ${lookupData.fuelType || '-'}</p>
    <p><strong>Engine:</strong> ${lookupData.engineSize || '-'}L | Euro: ${lookupData.euroStatus || '-'}</p>
    <p><strong>Suggested Services:</strong> ${servicesList}</p>
    <p><strong>Delivery Method:</strong> ${deliveryMethod || '-'}</p>
    <p><strong>GDPR:</strong> ${gdpr ? 'Accepted' : 'Not accepted'}</p>
    <br />
    <p><em>Do not reply to this email. For questions contact <a href="mailto:contact@mddremap.com">contact@mddremap.com</a>.</em></p>
  `;

  // Trimite email către ambele adrese
  await transporter.sendMail({
    from: `"MDDREMAP" <${process.env.SMTP_USER}>`,
    to: email, // Client
    cc: process.env.MAIL_RECEIVER, // Admin sau altă adresă
    subject: 'Your Quote Request – MDDREMAP',
    html,
  });
};

module.exports = sendQuoteEmail;
