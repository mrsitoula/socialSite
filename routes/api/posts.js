const express = require("express");
const router = express.Router();


//@routes GET from ./api/posts/test
//@desc   posts post route
//@access public
router.get("/test", (req, res) =>
  res.json({ massage: "hey bro you are at  the post route inside test" })
);
module.exports = router;
