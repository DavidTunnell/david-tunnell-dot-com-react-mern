const User = require("../models/User");

//ensure the token in local storage is also the same generated on the server side on all requested calls
const auth = (req, res, next) => {
    let token = req.cookies.authToken || req.query.userToken;

    User.findByToken(token, (err, user) => {
        if (err) throw err;
        if (!user) return res.json({ isAuth: false, error: true });
        req.token = token;
        req.user = user;
        next();
    });
};
module.exports = { auth };
