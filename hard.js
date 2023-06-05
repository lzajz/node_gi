const express = require('express');
const fs = require('fs');

const app = express();

const employeeData = JSON.parse(fs.readFile('employees.json', 'utf8'));

app.get('/employees', (req ,res)=>{
    res.json(employeeData);
});

app.get('/employees/:employeeID', (req,res)=>{
    const  employeeID = req.params.employeeID;
    const employee = employeeData.find((emp)=> emp.employeeID === employeeID);
    if(employee){
        res.json(employee);

    }else{
        res.status(404).json({error: 'employees not found'});

    }

});

app.listen(3001,()=>{
    console.log('server running on port 3001')

})