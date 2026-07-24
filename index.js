// importing express library into the project
// This gives access to the express framework just like in react i was importing
//  react from react library.

import express from "express";
import cors from "cors";

// const express = require("express");
//const cors = require("cors");

// creating an express application
// I will call it "app" and it will be our server instance.

const app = express();

//Enabling CORS for my rout only(Access- COntrol-Allow-Origin)
app.use(cors());

// defining a simple GET endpoint at /hello
// When someone visits http://localhost:3000/hello,
//  The server resposnd with a JSON object. It will send back a JSON response with a key 'message' and value 'hello world'

// Enabling JSON parsing for POST request
app.use(express.json());

const users = [
  {
    name: "Nzuki",
    email: "nzukimyles@gmail.com",
    phone: "0736898045",
    password: "nzukiMyles2/",
  },
  {
    name: "Myles",
    email: "myles@gmail.com",
    phone: "0727911202",
    password: "nzukiMyles2/",
  },
  {
    name: "Charity",
    email: "charity@gmail.com",
    phone: "0723456765",
    password: "charity2/",
  },
  {
    name: "Mike",
    email: "mike@gmail.com",
    phone: "0723456765",
    password: "mike2/",
  },
  {
    name: "Sheilla",
    email: "sheilla@gmail.com",
    phone: "0723456765",
    password: "sheilla2/",
  },
  {
    name: "Donnelle",
    email: "donnelle@gmail.com",
    phone: "0723456765",
    password: "donnelle/",
  },
  {
    name: "Soniah",
    email: "soniah@gmail.com",
    phone: "0723456765",
    password: "soniah/",
  },
  {
    name: "Gabriel",
    email: "gabriel@gmail.com",
    phone: "0723456765",
    password: "gabriel/",
  },
];

app.get("/hello", (req, res) => {
  res.json({ message: "hello world!" });
});

app.get("/", (req, res) => {
  res.json({ message: "Hello Charity Minds" });
});

app.get("/users", (req, res) => {
  res.json(users);
});

// POST to add new user
app.post("/users", (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !phone || !password) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    // Adding a new user
    const newUser = { name, email, phone, password };
    users.push(newUser);

    res
      .status(201)
      .json({ message: "User added successfully!", user: newUser });
  } catch (err) {
    next(err);
  }
});

// Choosing a PORT where the server will run
const PORT = 3000;

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ error: "Something went wrong!", details: err.message });
});

// Starting the server and listen to the choosen port
// The call back function runs once the surver is up

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
