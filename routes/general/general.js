
const { homePageGet} = require("../../controllers/general/home");
const { lockPageGet} = require("../../controllers/general/fundlock");
const { contactPageGet} = require("../../controllers/general/contact");
const { loanPageGet} = require("../../controllers/general/loan");

const generalRoute = require("express").Router();

//<!-----------------GENERAL------------------>
//HOMEPAGE
generalRoute.route("/").get(homePageGet);

//FUNDLOCKPAGE
generalRoute.route("/fundlock").get(lockPageGet);

//COMTACTPAGE
generalRoute.route("/contact-us").get(contactPageGet);

//LOANPAGE
generalRoute.route("/loan").get(loanPageGet);










module.exports = generalRoute