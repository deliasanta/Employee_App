// src/services/ApiService.js
import axios from 'axios';

const api = axios.create({
    withCredentials: true,
});

const ApiService = {
    getDepartments: () => axios.get(`http://localhost:8080/api/department`),
    deleteDepartment: (departmentId) => axios.delete(`http://localhost:8080/api/department/${departmentId}`),
    addDepartment: (departmentData) => axios.post('http://localhost:8080/api/department', departmentData),
    getEmployees: () => axios.get('http://localhost:8080/api/employee'),
    addEmployee: (employeeData) => axios.post(`http://localhost:8080/api/employee`, employeeData),
    deleteEmployee: (employeeId) => axios.delete(`http://localhost:8080/api/employee/${employeeId}`),
    getEmployee: (employeeId) => axios.get(`http://localhost:8080/api/employee/${employeeId}`),
    sendEmailToSelected: (selectedEmployees, emailData) =>
        axios.post('http://localhost:8080/api/email/sendToSelected', {selectedEmployees, emailData}),
    getManagersByDepartment: async (departmentID) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/employee/managersByDepartment?departmentID=${departmentID}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching managers by department:', error);
            throw error;
        }
    },
    getEmployeesByDepartment: async (departmentID) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/employee/employeesByDepartment?departmentID=${departmentID}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching employees by department:', error);
            throw error;
        }
    },
};

export default ApiService;
