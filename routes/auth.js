const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Student = require('../models/student');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'school-management-secret';

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const student = await Student.findOne({ email });
    
    if (!student) {
      return res.render('login', { error: 'Invalid email or password' });
    }
    
    const isMatch = await bcrypt.compare(password, student.password);
    
    if (!isMatch) {
      return res.render('login', { error: 'Invalid email or password' });
    }
    
    const token = jwt.sign(
      { id: student._id, name: student.name, email: student.email },
      JWT_SECRET,
      { expiresIn: '1h' }
    );
    
    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 3600000
    });
    
    res.redirect('/dashboard');
  } catch (error) {
    console.error('Login error:', error);
    res.render('login', { error: 'An error occurred during login' });
  }
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    const existingStudent = await Student.findOne({ email });
    
    if (existingStudent) {
      return res.render('register', { error: 'Email already registered' });
    }
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    const student = new Student({
      name,
      email,
      password: hashedPassword
    });
    
    await student.save();
    
    res.redirect('/login');
  } catch (error) {
    console.error('Registration error:', error);
    res.render('register', { error: 'An error occurred during registration' });
  }
});

router.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
});

module.exports = router;