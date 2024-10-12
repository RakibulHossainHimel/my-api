const express = require('express');
const HelloController = require("../controllers/HelloController");
const router = express.Router();


router.get("/hello-get",HelloController.Hello);
router.get("/hello-post",HelloController.Hello);
module.exports = router;