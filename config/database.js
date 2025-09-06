const mongoose = require('mongoose');
const seedDatabase = require('../models/seed');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://127.0.0.1:27017/school-management');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    
    await seedDatabase();
    
    return conn;
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    return null;
  }
};

module.exports = connectDB;