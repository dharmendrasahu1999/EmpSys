const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// GET all employees
router.get('/', employeeController.getAllEmployees);

// GET a single employee
router.get('/:id', employeeController.getEmployeeById);

// POST create a new employee
router.post('/', employeeController.createEmployee);

// PUT update an employee
router.put('/:id', employeeController.updateEmployee);

// DELETE an employee
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;
