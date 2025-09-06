# School Management System

A comprehensive web-based school management platform designed for students, teachers, and administrators to streamline educational processes and enhance learning experiences.

- Student ID - 1401/INFI25/018

## 🌟 Features

- **Student Authentication**: Secure registration and login system with JWT-based authentication
- **Dashboard Interface**: Personalized student dashboard with easy navigation
- **Teacher Management**: View all teachers and their assigned subjects
- **Subject Management**: Browse subjects with assigned teachers
- **Responsive Design**: Mobile-friendly interface with modern UI
- **Database Integration**: MongoDB integration with automatic data seeding

## 🛠️ Technology Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens) with bcrypt for password hashing
- **Template Engine**: EJS (Embedded JavaScript)
- **Styling**: CSS with responsive design
- **Session Management**: Cookie-based authentication

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v14.0.0 or higher)
- MongoDB (v4.0 or higher)
- npm or yarn package manager

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Tigmanshukumar/school-management-system.git
   cd school-management-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   JWT_SECRET=your-secret-key-here
   MONGODB_URI=mongodb://127.0.0.1:27017/school-management
   ```

4. **Start MongoDB**
   Make sure MongoDB is running on your system.

5. **Run the application**
   ```bash
   npm start
   ```

6. **Access the application**
   Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
school-management-system/
├── config/
│   └── database.js          # Database connection configuration
├── middleware/
│   └── auth.js             # Authentication middleware
├── models/
│   ├── student.js          # Student model
│   ├── teacher.js          # Teacher model
│   ├── subject.js          # Subject model
│   └── seed.js             # Database seeding
├── routes/
│   ├── auth.js             # Authentication routes
│   ├── dashboard.js        # Dashboard routes
│   └── home.js             # Home routes
├── views/                  # EJS templates
├── public/                 # Static files (CSS, JS, images)
├── app.js                  # Main application file
└── package.json
```

## 🎯 Usage

### For Students:

1. **Registration**: Create a new account using the registration form
2. **Login**: Access your account with email and password
3. **Dashboard**: View your personalized dashboard
4. **Teachers**: Browse all teachers and their subjects
5. **Subjects**: Explore available subjects and assigned teachers

### Default Seeded Data:

The application comes with pre-seeded data including:

**Subjects:**
- Mathematics
- Science
- English
- History
- Geography
- Computer Science

**Teachers:**
- Rohit Sharma (Mathematics)
- Anjali Verma (Science)
- Suresh Iyer (English)
- Diksha Patel (History)
- Arvind Kumar (Computer Science)
- Anshu Kumar (Geography)

## 🔐 API Endpoints

### Authentication Routes:
- `GET /login` - Login page
- `POST /login` - User authentication
- `GET /register` - Registration page
- `POST /register` - User registration
- `GET /logout` - User logout

### Dashboard Routes:
- `GET /dashboard` - Main dashboard
- `GET /dashboard/teachers` - Teachers list
- `GET /dashboard/subjects` - Subjects list

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Tigmanshu Kumar**
- Email: [tigmanshukumar5@gmail.com](mailto:tigmanshukumar5@gmail.com)
- LinkedIn: [Tigmanshu Kumar](https://www.linkedin.com/in/tigmanshu-kumar-a774082b7/)
- GitHub: [@Tigmanshukumar](https://github.com/Tigmanshukumar)

## 📞 Support

If you have any questions or need help with the project, feel free to reach out:

- Create an issue on GitHub
- Send an email to tigmanshukumar5@gmail.com
- Connect on LinkedIn

## 🎨 Screenshots

### Home Page
![Home Page](screenshot-home.png)

### Student Dashboard
![Student Dashboard](screenshot-dashboard.png)

## 🔮 Future Enhancements

- [ ] Admin panel for managing teachers and subjects
- [ ] Grade management system
- [ ] Assignment submission and tracking
- [ ] Real-time notifications
- [ ] Class scheduling system
- [ ] Parent portal
- [ ] Mobile application
- [ ] Email notifications
- [ ] Advanced reporting and analytics

## ⚡ Performance Optimization

- Implemented JWT-based authentication for better security
- MongoDB indexing for faster queries
- Optimized database queries with Mongoose
- Responsive design for better user experience across devices

---

⭐ **Star this repository if you found it helpful!**

© 2025 School Management System. All rights reserved.
