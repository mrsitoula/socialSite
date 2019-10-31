const express = require("express");
const router = express.Router();


//@routes GET from ./api/profiles/test
//@desc   profiles post route
//@access public
router.get("/test", (req, res) =>
  res.json({ massage: "hey bro you are at  the profile route inside test" })
);

module.exports = router;
