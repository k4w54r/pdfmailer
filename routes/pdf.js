const express = require('express');
const puppeteer = require('puppeteer');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post(
  '/',
  async (req, res, next) => {
    try {
      const url = req.body.url;
      const browser = await puppeteer.launch({
        headless: true,
      });
      const webPage = await browser.newPage();
      await webPage.setDefaultNavigationTimeout(0);
      await webPage.goto(url, {
        waitUntil: 'networkidle0',
      });

      const pdf = await webPage.pdf({
        path: './sample.pdf',
        printBackground: true,
        format: 'Letter',
        margin: {
          top: '20px',
          bottom: '40px',
          left: '20px',
          right: '20px',
        },
      });

      await browser.close();
      //res.contentType('application/pdf');
      //res.send(pdf);
      console.log('PDF Created');
      next();
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Couldn't create PDF");
    }
  },
  (req, res) => {
    console.log('Sendig PDF');
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
  }
);
module.exports = router;
