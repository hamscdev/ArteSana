const express = require("express");

const model = require("../models/UserModel");

const createUser =  ((req, resp) => {
        let  {name, lastName, email, password} = req.body;
        
        model.names = name;
        model.lastName = lastName;
        model.email = email;
        model.password = password;
        
        console.log(model);
    
        resp.json({
            "status": true, 
            "message": "User Created"
        })
    });



module.exports = {createUser}