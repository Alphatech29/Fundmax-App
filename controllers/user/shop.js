const asyncHandler = require("../../helpers/asyncHandler");

exports.userShopGet = asyncHandler(async (req, res, next) => {
    
    return res.render("user/pages/market/market/shop", {
        title: "Shop"
    })
})