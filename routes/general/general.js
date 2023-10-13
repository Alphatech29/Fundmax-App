
const { homePageGet} = require("../../controllers/general/home");
const { lockPageGet} = require("../../controllers/general/fundlock");
const { contactPageGet} = require("../../controllers/general/contact");

const generalRoute = require("express").Router();

//<!-----------------GENERAL------------------>
//HOMEPAGE
generalRoute.route("/").get(homePageGet);

//FUNDLOCKPAGE
generalRoute.route("/fundlock").get(lockPageGet);

//COMTACTPAGE
generalRoute.route("/contact-us").get(contactPageGet);










module.exports = generalRoute