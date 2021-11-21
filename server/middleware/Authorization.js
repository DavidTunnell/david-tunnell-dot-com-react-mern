const { User } = require("../models/User");
const auth = (req, res, next) => {
    // res.setHeader("Access-Control-Allow-Origin", "*");
    let token = req.cookies.authToken;
    //here is the issue, not getting the token.. do I need to save it client side and send it??
    console.log(token);

    User.findByToken(token, (err, user) => {
        if (err) throw err;
        if (!user) return res.json({ isAuth: false, error: true });
        req.token = token;
        req.user = user;
        next();
    });
};
module.exports = { auth };
