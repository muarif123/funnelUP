const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
app.listen(4000,()=>{
    console.log('Server is running');
})
const dotenv = require('dotenv')
const nodemailer = require('nodemailer');

const { default: mongoose } = require('mongoose')
const userRouter = require('../routes/userroutes')
const adminRouter = require('../routes/adminroutes')
dotenv.config({path:'./.env'})
mongoose.connect(process.env.URL)
.then(()=>{
    console.log('database connected');
})
app.use('/api',userRouter)
app.use('/api',adminRouter)
app.post('/send-email', async (req, res) => {
    console.log(req.body,'recipients');
    const { to, subject, text } = req.body;
  
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // Outlook SMTP server
        port: 587, // Outlook SMTP port
        secure: false, // false for TLS - as a boolean not string - if you don't have a certificate
        auth: {
          user: 'fidigitalmarket@gmail.com',
          pass: 'oajx mzvi xriu dbmr'
        }
      });
    
  
    try {
      await transporter.sendMail({
        from:req.body.from,
        to,
        subject,
        text
      });
      res.status(200).send('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Failed to send email');
    }
  });


