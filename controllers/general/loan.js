
const asyncHandler = require("../../helpers/asyncHandler");

exports.loanPageGet = asyncHandler(async (req, res, next) => {
    
    return res.render("general/pages/loan", {
        title: "Instant Loan"
    })
})