# 🏥 Hospital Management System

Hospital Management System is a modern and responsive healthcare management web application built using **Node.js, Express.js, MySQL, HTML, CSS, and JavaScript**. The application allows hospitals to digitally register and manage patient information through an intuitive and professional user interface.

Designed with a clean and user-friendly layout, the system simplifies patient data collection and storage while demonstrating full-stack web development concepts including frontend design, backend integration, and database management.

---

## 🚀 Features

### 📝 Patient Registration

* Register patients through a comprehensive form.
* Collects essential patient information efficiently.

### 👤 Patient Information Management

* Stores patient details securely in a MySQL database.
* Maintains organized healthcare records.

### 📞 Contact Information Collection

* Captures patient phone numbers for communication and record-keeping.

### 🚻 Gender & Age Management

* Supports gender selection and age tracking for patient records.

### 📍 Address Registration

* Stores complete residential address information.

### 🏥 Professional Hospital Interface

* Healthcare-themed responsive design.
* Modern navigation bar and footer section.

### ⚡ Real-Time Form Submission

* Patient information is processed and stored instantly through the backend server.

### 📱 Responsive Design

* Fully responsive layout optimized for desktops, tablets, and mobile devices.

---

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### Backend

* Node.js
* Express.js

### Database

* MySQL

### Development Tools

* VS Code
* Git & GitHub

---

## 📂 Project Structure

```text
Hospital-Management-System/
│
├── public/
│   ├── style.css
│   ├── script.js
│   └── assets/
│
├── views/
│   └── index.html
│
├── server.js
├── package.json
└── README.md
```

---

## ⚙️ How It Works

1. User opens the Hospital Management System dashboard.
2. Patient information is entered into the registration form.
3. Form data is sent to the Express.js server.
4. The backend processes the request and validates the information.
5. Patient records are stored securely in the MySQL database.
6. Data can be managed and accessed for future healthcare operations.

---

## 🗄️ Database Information

The system stores the following patient details:

### Patient Table Fields

* Full Name
* Age
* Gender
* Phone Number
* Address

Example Database Table:

```sql
CREATE TABLE patients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    gender VARCHAR(20),
    phone VARCHAR(20),
    address TEXT
);
```

---

## 🎯 Learning Outcomes

This project demonstrates:

* Full-Stack Web Development
* Express.js Server Development
* MySQL Database Integration
* CRUD Operations Fundamentals
* Form Handling & Validation
* Backend Data Processing
* Client-Server Communication
* Responsive Web Design
* Database Management

---

## 📸 Application Highlights

* Professional Hospital-Themed UI
* Responsive Registration Form
* MySQL Database Connectivity
* Modern Navigation Bar
* Clean Footer Design
* Organized Patient Record Storage
* User-Friendly Interface

---

## 🔮 Future Enhancements

* Doctor Management Module
* Appointment Booking System
* Patient Search Functionality
* Admin Dashboard
* Authentication & Authorization
* Medical History Tracking
* Cloud Database Integration
* Email Notifications
* Advanced Reporting System

---

## 👨‍💻 Author

Developed as a Full-Stack Web Development project using modern web technologies and MySQL database integration.

---

## 📄 License

This project is open-source and available for educational and learning purposes.
