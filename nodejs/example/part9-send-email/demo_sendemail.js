const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "jerry.street.shop@gmail.com",
    pass: "J3r!-W0534h",
  },
});

const mailOptions = {
  from: "jerry.street.shop@gmail.com",
  to: "jeri221B@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy! It's success!!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
