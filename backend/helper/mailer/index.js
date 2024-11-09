const nodemailer = require("nodemailer");
const createTransport = (service, port, email, password) =>
  nodemailer.createTransport({
    host: service,
    port,
    auth: {
      user: email,
      pass: password,
    },
  });

module.exports = {
  createTransport,
};
