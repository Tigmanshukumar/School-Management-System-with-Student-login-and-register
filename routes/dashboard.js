const express = require('express');
const Teacher = require('../models/teacher');
const Subject = require('../models/subject');
const { authenticateUser } = require('../middleware/auth');
const router = express.Router();

router.use(authenticateUser);

router.get('/', (req, res) => {
  res.render('dashboard', { user: req.user });
});

router.get('/teachers', async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.render('teachers', { user: req.user, teachers });
  } catch (error) {
    console.error('Error fetching teachers:', error);
    res.render('dashboard', { 
      user: req.user, 
      error: 'Failed to load teachers. Please try again.'
    });
  }
});

router.get('/subjects', async (req, res) => {
  try {
    const subjects = await Subject.find();
    const teachers = await Teacher.find();
    
    const subjectTeachers = {};
    teachers.forEach(teacher => {
      if (!subjectTeachers[teacher.subject]) {
        subjectTeachers[teacher.subject] = [];
      }
      subjectTeachers[teacher.subject].push(teacher);
    });
    
    const subjectsWithTeachers = subjects.map(subject => {
      return {
        ...subject.toObject(),
        teachers: subjectTeachers[subject.name] || []
      };
    });
    
    res.render('subjects', { 
      user: req.user, 
      subjects: subjectsWithTeachers
    });
  } catch (error) {
    console.error('Error fetching subjects:', error);
    res.render('dashboard', { 
      user: req.user, 
      error: 'Failed to load subjects. Please try again.'
    });
  }
});

module.exports = router;