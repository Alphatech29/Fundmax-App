const asyncHandler = require("../../helpers/asyncHandler");

exports.userMarketGet = asyncHandler(async (req, res, next) => {
    
    return res.render("user/pages/market/market", {
        title: "Market Dashboard"
    })
})