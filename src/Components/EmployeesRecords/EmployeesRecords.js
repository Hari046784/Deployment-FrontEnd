import axios from "axios";
import { BASE_URL } from "../../URLData";
import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Employees.css";

const EmployeesRecords = () => {
    const [employeesList, setEmployeesList] = useState([]);

    useEffect(()=>{
        getEmployees();
    },[]);

    const getEmployees = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/employees`);
            console.log("response:",response);
            if(response) {
            setEmployeesList(response.data);
            }
        } catch (error) {
            console.log("Error", error);
        };
    };

    const handleDelete =async (id) => {
        try {
            let confirmation = window.confirm("Shall we proceed to delete?");
            if(confirmation) {
            const response = await axios.delete(`${BASE_URL}/employees/delete/${id}`);
            if(response) {
                getEmployees();
            };    
        };
        } catch (error) {
            console.log("Error", error);
        };
    };

    return (
        <>
            <div className="arrange">
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand className="fs-2">Employees </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/create-employees" className="fs-5" >
                                Insert Employees Records
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>

                <div className="center my-3">
                    <h3>View Employee Records</h3>
                </div>

                <Table striped bordered hover responsive="sm" className="container">
                    <thead className="text-center">
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Contact Number</th>
                            <th>Designation</th>
                            <th>Salary</th>
                            <th colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {employeesList.map((employees, index)=>(
                        <tr key={index}>
                            <td>{employees.firstName}</td>
                            <td>{employees.lastName}</td>
                            <td>{employees.email}</td>
                            <td>{employees.contactNumber}</td>
                            <td>{employees.designation}</td>
                            <td>{employees.salary}</td>
                            <td>
                                <Link className=" btn btn-warning" to={`/employees/edit/${employees._id}/update-employees`}>
                                <i className="fa-solid fa-pen-to-square"></i>
                                </Link>
                            </td>
                            <td>
                                <Button variant="danger" onClick={() => handleDelete(employees._id)}>
                                <i className="fa-solid fa-trash"></i>
                                </Button>
                            </td>
                        </tr>     
                        ))}
                        
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default EmployeesRecords;