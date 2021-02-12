const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/', async (req, res) => {
  console.log('Hit');
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dr4w3r13@gmail.com',
      pass: 'tennisgolf',
    },
  });
  console.log(req.body.email);
  transporter.sendMail({
    from: 'dr4w3r13@gmail.com',
    to: req.body.email,
    subject: 'An Attached File',
    text: 'Check out this attached pdf file',
    attachments: [
      {
        filename: 'sample.pdf',
        path: './sample.pdf',
        contentType: 'application/pdf',
      },
    ],
    function(err, info) {
      if (err) {
        console.error(err);
        res.send(err);
      } else {
        console.log(info);
        res.send(info);
      }
    },
  });
});

module.exports = router;
