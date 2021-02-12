const express = require('express');
const router = express.Router();

const fs = require('fs');
const exportWebToPdf = require('export-web-to-pdf');
const nodemailer = require('nodemailer');

router.post(
  '/',
  (req, res, next) => {
    exportWebToPdf(req.body.url, {
      waitForSelectors: ['body'],
      pdfSettings: {},
      ignoreHTTPSErrors: true,
      showBrowserConsole: true,
    }).then((data) => {
      fs.writeFileSync('./sample.pdf', data);
      next();
    });
  },
  (req, res) => {
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
        res.json('Done');
      }
    });
  }
);
module.exports = router;
