
const { userDashboardGet} = require("../../controllers/user/dashboard");
const { userWithdrawGet} = require("../../controllers/user/withdraw");
const { userJobGet} = require("../../controllers/user/job");
const { userShopGet} = require("../../controllers/user/shop");
const { userVtuGet} = require("../../controllers/user/vtu");
const { userUpgradeGet} = require("../../controllers/user/upgrade");
const { userTaskGet} = require("../../controllers/user/task");
const { userpublishProductGet} = require("../../controllers/user/publishProduct");
const { userProductVendorGet} = require("../../controllers/user/productVendor");
const { userSellerGet} = require("../../controllers/user/sellerPortal");
const { userAdduserGet} = require("../../controllers/user/add-new-user");
const { userLeaderboardGet} = require("../../controllers/user/leaderBoard");
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
userRoute.route("/market/shop").get(userShopGet);

//ADD NEW PRODUCT
userRoute.route("/market/shop/publish-product").get(userpublishProductGet);

//PRODUCT VENDOR
userRoute.route("/market/shop/vendor").get(userProductVendorGet);

//SELLER PORTAL
userRoute.route("/market/shop/affiliate").get(userSellerGet);

//ADD NEW USER
userRoute.route("/add-new-user").get(userAdduserGet);

//LEADERBOARD
userRoute.route("/leaderboard").get(userLeaderboardGet);



module.exports = userRoute