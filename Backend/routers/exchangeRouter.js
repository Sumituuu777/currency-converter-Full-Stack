const express=require("express");
const { convertCurrency } = require("../controller/exchangeController");
const exchangeRouter=express.Router();

exchangeRouter.post("/convert",convertCurrency);
module.exports=exchangeRouter