
const asyncHandler = require("../../helpers/asyncHandler");

exports.lockPageGet = asyncHandler(async (req, res, next) => {
    
    return res.render("general/pages/fundlock", {
        title: "Fundlock"
    })
})