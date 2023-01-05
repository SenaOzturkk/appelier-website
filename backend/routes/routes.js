const express = require("require");
const router = express.Router();
const contactTemplateCopy = require("../models/ContactModel");

router.post("/contact", (request, response) => {
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

module.exports = router;
