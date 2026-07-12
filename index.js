// importing express library into the project
// This gives access to the express framework just like in react i was importing react from react library.

const express = require("express");
const cors = require("cors");

// creating an express application
// I will call it "app" and it will be our server instance.

const app = express();

//Enabling CORS for my rout only(Access- COntrol-Allow-Origin)
app.use(cors());

// defining a simple GET endpoint at /hello
// When someone visits http://localhost:3000/hello,
//  The server resposnd with a JSON object. It will send back a JSON response with a key 'message' and value 'hello world'

app.get("/hello", (req, res) => {
  res.json({ message: "hello world!" });
});

app.get("/", (req, res) => {
  res.redirect("/hello");
});

// Choosing a PORT where the server will run
const PORT = 3000;

// Starting the server and listen to the choosen port
// The call back function runs once the surver is up

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});