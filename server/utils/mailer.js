const nodemailer = require('nodemailer');
require('dotenv').config();  // Asigură-te că variabilele de mediu sunt încărcate

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,  // Folosește TLS/SSL pentru securitate
  auth: {
    user: process.env.SMTP_USER,  // Folosește utilizatorul din .env
    pass: process.env.SMTP_PASS,  // Folosește parola din .env
  },
});

const sendQuoteEmail = async (data) => {
  const { name, email, phone, message, regNumber, lookupData, matchedServices } = data;

  // Dacă matchedServices este undefined, folosește un array gol pentru a evita eroarea
  const servicesList = matchedServices && matchedServices.length > 0
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
    <p><strong>Vehicle:</strong> ${lookupData.make} ${lookupData.model} (${lookupData.year})</p>
    <p><strong>Fuel:</strong> ${lookupData.fuelType}</p>
    <p><strong>Engine:</strong> ${lookupData.engineSize}L | Euro: ${lookupData.euroStatus}</p>
    <p><strong>Suggested Services:</strong> ${servicesList}</p>
    <p><strong>Note:</strong> Please do not reply to this email. Contact us at <a href="mailto:contact@mddremap.com">contact@mddremap.com</a>.</p>
  `;

  // Trimite emailul
  await transporter.sendMail({
    from: `"MDDREMAP" <${process.env.SMTP_USER}>`,  // Folosește utilizatorul definit în .env
    to: email,  // Trimite către emailul clientului
    subject: 'New Quote Request',
    html,
  });
};

module.exports = sendQuoteEmail;
