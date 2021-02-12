const express = require('express');
const router = express.Router();

const puppeteer = require('puppeteer');
const nodemailer = require('nodemailer');
const fs = require('fs');

router.post('/', (req, res) => {
  console.log('Sendig PDF');
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'pdfmailer2021@gmail.com',
      pass: 'amikichujanina',
    },
  });
  console.log(req.body.email);
  var mailOptions = {
    from: 'pdfmailer2021@gmail.com',
    to: req.body.email,
    subject: req.body.name,
    text: '\nSent with ❤️ from pdfMailer',
    attachments: [
      {
        filename: req.body.name + '.pdf',
        path: './sample.pdf',
        contentType: 'application/pdf',
      },
    ],
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send("Couldn't send PDF");
    } else {
      console.log('Email sent: ' + info.response);
      fs.unlink('./sample.pdf', (err) => {
        if (err) {
          console.error(err);
          return;
        }

        //file removed
      });
      res.contentType('application/pdf');
      res.send(pdf);
    }
  });
});
module.exports = router;
