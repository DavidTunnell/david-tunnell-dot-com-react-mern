const User = require("../models/User");

//create user in database
exports.RegisterUser = async (req, res) => {
    const user = new User(req.body);
    await user.save((err, doc) => {
        if (err) {
            return res.status(422).json({ errors: err });
        } else {
            const userData = {
                firstName: doc.firstName,
                lastName: doc.lastName,
                email: doc.email,
            };
            return res.status(200).json({
                success: true,
                message: "Successfully Signed Up",
                userData,
            });
        }
    });
};

//log user in and generate a token for them
exports.LoginUser = (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user) {
            return res
                .status(404)
                .json({ success: false, message: "User email not found!" });
        } else {
            user.comparePassword(req.body.password, (err, isMatch) => {
                console.log(isMatch);
                //isMatch is either true or false
                if (!isMatch) {
                    return res
                        .status(400)
                        .json({ success: false, message: "Wrong Password!" });
                } else {
                    user.generateToken((err, user) => {
                        if (err) {
                            return res.status(400).send({ err });
                        } else {
                            const data = {
                                userID: user._id,
                                firstName: user.firstName,
                                lastName: user.lastName,
                                email: user.email,
                                token: user.token,
                            };
                            //saving token to cookie
                            res.cookie("authToken", user.token)
                                .status(200)
                                .json({
                                    success: true,
                                    message: "Successfully Logged In!",
                                    userData: data,
                                });
                        }
                    });
                }
            });
        }
    });
};

//user logout
exports.LogoutUser = (req, res) => {
    let userId = req.query.userId;
    User.findByIdAndUpdate({ _id: userId }, { token: "" }, (err) => {
        if (err) return res.json({ success: false, err });
        return res
            .status(200)
            .send({ success: true, message: "Successfully Logged Out!" });
    });
};

//get authenticated user details
exports.getUserDetails = (req, res) => {
    return res.status(200).json({
        isAuthenticated: true,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email,
    });
};
