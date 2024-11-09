const nodemailer = require("nodemailer");
// Configure email transport
const host =
  process.env.NODE_ENV === "production"
    ? process.env.MAIL_HOST
    : process.env.MAILTRAP_HOST;

const send_port =
  process.env.NODE_ENV === "production"
    ? process.env.MAIL_PORT
    : process.env.MAILTRAP_PORT;

const send_email =
  process.env.NODE_ENV === "production"
    ? process.env.EMAIL
    : process.env.MAILTRAP_USER;

const send_password =
  process.env.NODE_ENV === "production"
    ? process.env.EMAIL_PASSWORD
    : process.env.MAILTRAP_PASSWORD;

const transportMail = nodemailer.createTransport({
  host: host,
  port: send_port,
  auth: {
    user: send_email,
    pass: send_password,
  },
});

module.exports = transportMail;
