const express = require("express");
const router = express.Router();

//@routes GET from ./api/users/test
//@desc   users post route
//@access public
router.get("/test", (req, res) =>
  res.json({ massage: "hey bro you are at  the users route inside test" })
);

module.exports = router;
