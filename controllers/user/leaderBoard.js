const asyncHandler = require("../../helpers/asyncHandler");

exports.userLeaderboardGet = asyncHandler(async (req, res, next) => {
    
    return res.render("user/pages/leaderBoard/leaderBoard", {
        title: "Leader's Board"
    })
})