import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeesRecords from "./Components/EmployeesRecords/EmployeesRecords";
import InsertEmployees from "./Components/EmployeesRecords/InsertEmployees";
import UpdateEmployees from "./Components/EmployeesRecords/UpdateEmployees";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<EmployeesRecords/>}/>
            <Route exact path="/create-employees" element={<InsertEmployees/>}/>
            <Route exact path="/employees/edit/:id/update-employees" element={<UpdateEmployees/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;