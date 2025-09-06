const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'school-management-secret';

const authenticateUser = (req, res, next) => {
  const token = req.cookies.token;
  
  if (!token) {
    return res.redirect('/login');
  }
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    res.clearCookie('token');
    res.redirect('/login');
  }
};

module.exports = { authenticateUser };