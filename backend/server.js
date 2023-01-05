const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
//const routesUrls = require("./routes/routes");
const contactTemplateCopy = require("./models/ContactModel");

const cors = require("cors");
const PORT = 4000 || process.env.PORT;

dotenv.config();
mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log("Database connected")
);

app.use(express.json());
app.use(cors());
//app.use(routesUrls);

app.post("/contact", (request, response) => {
  const contactInfo = new contactTemplateCopy({
    name: request.body.name,
    email: request.body.email,
    message: request.body.message,
  });
  contactInfo
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

app.listen(PORT, () => {
  console.log("server is running on port 4000");
});
