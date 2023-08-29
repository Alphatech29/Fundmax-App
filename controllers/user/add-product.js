const asyncHandler = require("../../helpers/asyncHandler");

exports.userAddnewGet = asyncHandler(async (req, res, next) => {
    
    return res.render("user/pages/market/shop/add-product", {
        title: "Add New Product"
    })
})