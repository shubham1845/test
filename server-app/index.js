// [SECTION] Dependencies and Modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// [SECTION] Environment Setup
// const port = 4000;
require("dotenv").config();

//[SECTION] Routes
const userRoutes = require("./routes/user");
//[SECTION] Activity: Allows access to routes defined within our application

// [SECTION] Server Setup
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// [Section] Google Login
// Creates a session with the given data
// resave prevents the session from overwriting the secret while the session is active
// saveUninitialized prevents the data from storing data in the session while the data has not yet been initialized

// Initializes the passport package when the application runs

//[SECTION] Database Connection
//courseBookingAPI - no data
//booking-KT - with data
mongoose.connect(process.env.MONGODB_STRING);

mongoose.connection.once("open", () =>
  console.log("Now connected to MongoDB Atlas.")
);

// general routes for user requests and course requests
//[SECTION] Backend Routes
//http://localhost:4000/users
app.use("/users", userRoutes);
//[SECTION] Activity: Add course routes

// [SECTION] Server Gateway Response
if (require.main === module) {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`API is now online on port ${process.env.PORT || 3000}`);
  });
}

module.exports = { app, mongoose };
