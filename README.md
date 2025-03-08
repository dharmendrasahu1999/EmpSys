# Employee Management System

A full-stack MERN application for managing employee data with comprehensive features for human resources management.

## Features

- **Complete CRUD Operations**: Add, view, edit, and delete employee records
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Employee Status Tracking**: Monitor employees with status indicators (Active, On Leave, Terminated)
- **Detailed Employee Profiles**: Store comprehensive employee information including contact details, position, department, and salary
- **Form Validation**: Client and server-side validation for data integrity
- **Intuitive UI**: Clean, Bootstrap-powered interface for easy navigation

## Tech Stack

- **MongoDB**: NoSQL database for storing employee data
- **Express.js**: Backend framework for RESTful API
- **React.js**: Frontend library for building the user interface
- **Node.js**: JavaScript runtime for the backend
- **Bootstrap**: CSS framework for responsive design

## Screenshots

*[Add screenshots of your application here]*

## Prerequisites

- Node.js (v14+)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

## Installation

### Backend Setup

```bash
# Clone repository
git clone https://github.com/yourusername/employee-management-system.git
cd employee-management-system/backend

# Install dependencies
npm install

# Configure environment variables
# Create a .env file with:
PORT=5000
MONGODB_URI=mongodb://localhost:27017/employee_management
# Or use MongoDB Atlas connection string

# Start server
npm run dev  # Development mode with nodemon
# OR
npm start    # Production mode
```

### Frontend Setup

```bash
cd ../frontend

# Install dependencies
npm install

# Configure environment variables
# Create a .env file with:
REACT_APP_API_URL=http://localhost:5000/api

# Start React development server
npm start
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/employees | Get all employees |
| GET | /api/employees/:id | Get a specific employee |
| POST | /api/employees | Add a new employee |
| PUT | /api/employees/:id | Update an employee |
| DELETE | /api/employees/:id | Delete an employee |

## Data Model

```javascript
{
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  position: String,
  department: String,
  hireDate: Date,
  salary: Number,
  status: String (Active, On Leave, Terminated)
}
```

## Project Structure

```
employee-management-system/
├── backend/
│   ├── controllers/
│   │   └── employeeController.js
│   ├── models/
│   │   └── Employee.js
│   ├── routes/
│   │   └── employeeRoutes.js
│   ├── .env
│   ├── package.json
│   └── server.js
└── frontend/
    ├── public/
    │   ├── index.html
    │   └── ...
    └── src/
        ├── components/
        │   ├── AddEmployee.js
        │   ├── EditEmployee.js
        │   ├── EmployeeDetails.js
        │   ├── EmployeeList.js
        │   └── Navbar.js
        ├── services/
        │   └── api.js
        ├── App.css
        ├── App.js
        ├── index.js
        └── ...
```

## Future Improvements

- User authentication and role-based access control
- Advanced search and filtering options
- Employee performance tracking
- Attendance management
- Department and team management
- Document storage for employee files
- Data visualization and reporting

## License

[MIT License](LICENSE)

## Contact

Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/employee-management-system](https://github.com/yourusername/employee-management-system)
