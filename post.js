const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("we are on post");
});

router.get("/spl", (req, res) => {
  res.send("we are on spl");
});
module.exports = router;
