const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://mfhtdapp:baIf7iycE1VIKL6F@cluster0.5gch7hc.mongodb.net/bank",
    {
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("Connected to the MongoDB database");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
