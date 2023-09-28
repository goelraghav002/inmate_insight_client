const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/RegistrationForm", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection established");
  })
  .catch((err) => {
    console.log("Error connecting DB");
  });
