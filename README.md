🏥 Hospital Management System

A full-stack Hospital Management System developed using Node.js, Express.js, MySQL, HTML, CSS, and JavaScript. This project provides a professional and user-friendly platform for managing patient registrations and hospital records efficiently.

📌 Project Overview

The Hospital Management System is designed to simplify the process of collecting and storing patient information. Users can register patients through a responsive web interface, and the submitted data is securely stored in a MySQL database for future access and management.

This project demonstrates the integration of frontend and backend technologies while implementing database connectivity and server-side processing.

✨ Features
Patient Registration Form
Store Patient Details in MySQL Database
Gender Selection
Age Input
Phone Number Input
Address Field
Hospital Branding and Logo
Responsive Navigation Bar
Professional User Interface
Footer Section
Form Validation
Express.js Backend Server
MySQL Database Integration
🛠️ Technologies Used
Frontend
HTML5
CSS3
JavaScript
Backend
Node.js
Express.js
Database
MySQL
📂 Project Structure
Hospital-Management-System/
│
├── public/
│   ├── style.css
│   ├── script.js
│   └── logo.png
│
├── views/
│   └── index.html
│
├── server.js
├── package.json
└── README.md
🗄️ Database Fields

The system stores the following patient information:

Full Name
Age
Gender
Phone Number
Address
⚙️ Installation & Setup
1. Clone the Repository
git clone https://github.com/your-username/hospital-management-system.git
2. Navigate to Project Folder
cd hospital-management-system
3. Install Dependencies
npm install
4. Configure MySQL Database

Create a database:

CREATE DATABASE hospital_db;

Create a patient table:

CREATE TABLE patients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    gender VARCHAR(20),
    phone VARCHAR(20),
    address TEXT
);
5. Update Database Credentials

Inside server.js, update:

host: "localhost",
user: "root",
password: "your_password",
database: "hospital_db"
6. Start the Server
node server.js
7. Open in Browser
http://localhost:3000
📸 Screenshots

Add screenshots of:

Home Page
Registration Form
Successful Submission
Database Records
🎯 Learning Outcomes

Through this project, I learned:

Building RESTful applications using Node.js and Express.js
Connecting web applications with MySQL databases
Handling form submissions
Backend data processing
Creating responsive user interfaces
Full-stack web development fundamentals
🚀 Future Enhancements
Patient Login System
Doctor Management Module
Appointment Booking System
Medical Record Tracking
Admin Dashboard
Search and Filter Functionality
Authentication and Authorization
Cloud Database Deployment
