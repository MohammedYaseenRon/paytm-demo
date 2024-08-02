const express = require("express");
const userRouter = require("./user");
const accountRouter = require("./account");

const router = express.Router();

router.use("/user", userRouter);//go to user router defned in user.js
router.use("/account",accountRouter);

module.exports = router;
// /api/v1/user
// /api/v1/transaction