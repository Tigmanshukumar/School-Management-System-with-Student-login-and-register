const Teacher = require('./teacher');
const Subject = require('./subject');

const subjects = [
  { name: 'Mathematics' },
  { name: 'Science' },
  { name: 'English' },
  { name: 'History' },
  { name: 'Geography' },
  { name: 'Computer Science' }
];

const teachers = [
  { name: 'Rohit Sharma', subject: 'Mathematics' },
  { name: 'Anjali Verma', subject: 'Science' },
  { name: 'Suresh Iyer', subject: 'English' },
  { name: 'Diksha Patel', subject: 'History' },
  { name: 'Arvind Kumar', subject: 'Computer Science' },
  { name: 'Anshu Kumar', subject: 'Geography' }
];

const seedDatabase = async () => {
  try {
    await Subject.deleteMany({});
    await Teacher.deleteMany({});
    
    await Subject.insertMany(subjects);
    console.log('✓ Subjects seeded successfully');
    
    await Teacher.insertMany(teachers);
    console.log('✓ Teachers seeded successfully');
    
    return true;
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    return false;
  }
};

module.exports = seedDatabase;