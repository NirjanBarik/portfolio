import express from 'express';
import nodemailer from 'nodemailer';
import Contact from '../models/Contact.js';

const router = express.Router();

// Transporter setup
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// @route   POST /api/contact
// @desc    Submit a contact message
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Please provide all fields' });
    }

    // Save to database
    const newContact = new Contact({
      name,
      email,
      message
    });

    await newContact.save();

    // Send Email
    try {
      const transporter = createTransporter();
      
      const mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`,
        to: process.env.RECEIVER_EMAIL,
        subject: `New Portfolio Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #2563eb;">New Message from Portfolio</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px;">
              ${message}
            </div>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // We still return 201 because the message was saved to the DB
    }

    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({ message: 'Server error, please try again later' });
  }
});

// @route   GET /api/contact
// @desc    Get all contact messages (For Admin)
// @access  Public (Should be protected in production)
router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Server error fetching messages' });
  }
});

export default router;
