const express = require("express");

const usuario = require('../models/UserModel')



const createUser = ((req, resp, next) => {
  try {
    const user =  usuario.create(req.body);
    console.log("Create user " + user);
    resp.status(201).json(user);
  } catch(error) {
    resp.status(500).json(user);
  }
});


module.exports = {createUser}