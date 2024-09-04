const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
// Express server example:
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'https://amitark007.serv00.net');
//   res.header('Access-Control-Allow-Credentials', 'true');
//   next();
// });

app.get('/sendcookie', (req, res) => {
  console.log("Request Cookies ---->",req);
  
  const sessionId = req?.cookies?.sessionId;
  // res.cookie("User ID", "strqwy145516", {
  //   httpOnly: true,
  //   sameSite: "none",
  //   secure: true,
  // });
  res.json({ message: 'Cookie received', sessionId: sessionId });
});


app.get("/setcookie", (req, res) => {
  // Set a cookie
  res.cookie("sessionId", "A2Js82bsxn2", {
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });
  res.json({ message: "Cookie set and data sent" });
});

app.listen(3000, () =>
  console.log(`Server running on port http://localhost:${3000}`)
);
