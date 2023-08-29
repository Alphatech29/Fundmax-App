
const { userDashboardGet} = require("../../controllers/user/dashboard");
const { userWithdrawGet} = require("../../controllers/user/withdraw");
const { userJobGet} = require("../../controllers/user/job");
const { userMarketGet} = require("../../controllers/user/market");
const { userVtuGet} = require("../../controllers/user/vtu");
const { userUpgradeGet} = require("../../controllers/user/upgrade");
const { userTaskGet} = require("../../controllers/user/task");
const { userAddnewGet} = require("../../controllers/user/add-product");
const { userAdduserGet} = require("../../controllers/user/add-new-user");
const userRoute = require("express").Router();

//<!-----------------DASHBOARD------------------>
//DASHBOARD
userRoute.route("/dashboard").get(userDashboardGet);

//JOB DASHBOARD
userRoute.route("/job").get(userJobGet);

//WITHDRAW DASHBOARD
userRoute.route("/withdraw").get(userWithdrawGet);

//VTU DASHBOARD
userRoute.route("/vtu").get(userVtuGet);

//UPGRADE DASHBOARD
userRoute.route("/upgrade").get(userUpgradeGet);

//TASK DASHBOARD
userRoute.route("/task").get(userTaskGet);


//MARKET DASHBOARD
userRoute.route("/market").get(userMarketGet);

//ADD NEW PRODUCT
userRoute.route("/shop/add-new").get(userAddnewGet);

//ADD NEW USER
userRoute.route("/add-new-user").get(userAdduserGet);



module.exports = userRoute