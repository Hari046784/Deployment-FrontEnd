import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../URLData";

const InsertEmployees = () => {
    const navigate = useNavigate();
    const [employeesDetails, setEmployeesDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        designation: "",
        salary: ""
    });

    const handleChange = (value) => {
        return setEmployeesDetails((emp) => {
            return {...emp, ...value}
        });
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Employees Details:", employeesDetails);
        try{
            const response = await axios.post(`${BASE_URL}/employees/create`, employeesDetails);
            if(response) {
                setEmployeesDetails({
                    firstName: "",
                    lastName: "",
                    email: "",
                    contactNumber: "",
                    designation: "",
                    salary: ""
                });
                navigate("/");
            };
        }catch (error) {
            console.log("Error:", error);
        };
    };

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className="fs-2">Employees</Navbar.Brand>
                    <Nav className="me-auto">
                    </Nav>
                </Container>
            </Navbar>
            <div className="center my-3">
                <h2>Insert Employee Records</h2>
            </div>

            <Form onSubmit={handleSubmit} className="container form my-2">
                <Form.Group className="mb-3 col-md-4">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" id="fname" placeholder="Enter First Name" required 
                        value={employeesDetails.firstName}
                        onChange={event => handleChange({firstName: event.target.value})} 
                    />
                </Form.Group>

                <Form.Group className="mb-3 col-md-4">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" id="lname" placeholder="Enter Last Name" required 
                        value={employeesDetails.lastName}
                        onChange={event => handleChange({lastName: event.target.value})} 
                    />
                </Form.Group>

                <Form.Group className="mb-3 col-md-4">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" id="email" placeholder="Enter email" required 
                        value={employeesDetails.email}
                        onChange={event => handleChange({email: event.target.value})} 
                    />
                </Form.Group>

                <Form.Group className="mb-3 col-md-4">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control type="num" id="contact" placeholder="Enter contact number" required 
                        value={employeesDetails.contactNumber}
                        onChange={event => handleChange({contactNumber: event.target.value})} 
                    />
                </Form.Group>

                <Form.Group className="mb-3 col-md-4">
                    <Form.Label>Designation</Form.Label>
                    <Form.Control type="text" id="designation" placeholder="Enter designation" required 
                        value={employeesDetails.designation}
                        onChange={event => handleChange({designation: event.target.value})} 
                    />
                </Form.Group>

                <Form.Group className="mb-3 col-md-4">
                    <Form.Label>Salary</Form.Label>
                    <Form.Control type="num" id="salary" placeholder="Enter salary" required 
                        value={employeesDetails.salary}
                        onChange={event => handleChange({salary: event.target.value})} 
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="mb-3 col-md-2 my-2">Insert Record</Button>
            </Form>
        </>
    );
};

export default InsertEmployees;