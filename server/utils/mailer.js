const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9bb57970639023", // <- din dashboard-ul tău
    pass: "0c783d9f164757"
  }
});

const sendQuoteEmail = async (data) => {
  const { name, email, phone, message, regNumber, lookupData, matchedServices } = data;

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
    <p><strong>Engine:</strong> ${lookupData.engineSize} L | Euro: ${lookupData.euroStatus}</p>
    <p><strong>Suggested Services:</strong> ${matchedServices.join(', ')}</p>
  `;

  await transporter.sendMail({
    from: '"Tuning Website" <no-reply@tuning.com>',
    to: "test@mailtrap.io", // ← destinatarul poate fi oricare, va fi capturat de Mailtrap
    subject: "New Quote Request",
    html,
  });
};

module.exports = sendQuoteEmail;
