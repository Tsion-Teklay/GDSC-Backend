// Employee object structure
class Employee {
    constructor(id, name, position, department) {
      this.id = id;
      this.name = name;
      this.position = position;
      this.department = department;
    }
  }
  
  // Employee array to store the list of employees
  let employees = [];
  
  // Function to add a new employee
  function addEmployee(id, name, position, department) {
    const newEmployee = new Employee(id, name, position, department);
    employees.push(newEmployee);
    console.log(`New employee added: ${name} (ID: ${id})`);
  }
  
  // Function to list all employees
  function listEmployees() {
    if (employees.length === 0) {
      console.log("No employees found.");
    } else {
      console.log("List of Employees:");
      employees.forEach((employee) => {
        console.log(`ID: ${employee.id}, Name: ${employee.name}, Position: ${employee.position}, Department: ${employee.department}`);
      });
    }
  }
  
  // Function to find an employee by ID
  function findEmployee(id) {
    const employee = employees.find((e) => e.id === id);
    if (employee) {
      console.log(`Employee found: ID: ${employee.id}, Name: ${employee.name}, Position: ${employee.position}, Department: ${employee.department}`);
    } else {
      console.log(`Employee with ID ${id} not found.`);
    }
  }
  
  // Function to update an employee's information
  function updateEmployee(id, newName, newPosition, newDepartment) {
    const employeeIndex = employees.findIndex((e) => e.id === id);
    if (employeeIndex !== -1) {
      employees[employeeIndex].name = newName;
      employees[employeeIndex].position = newPosition;
      employees[employeeIndex].department = newDepartment;
      console.log(`Employee with ID ${id} updated successfully.`);
    } else {
      console.log(`Employee with ID ${id} not found.`);
    }
  }
  
  // Function to delete an employee
  function deleteEmployee(id) {
    const employeeIndex = employees.findIndex((e) => e.id === id);
    if (employeeIndex !== -1) {
      const deletedEmployee = employees.splice(employeeIndex, 1)[0];
      console.log(`Employee with ID ${deletedEmployee.id} deleted: ${deletedEmployee.name}`);
    } else {
      console.log(`Employee with ID ${id} not found.`);
    }
  }
  
