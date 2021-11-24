const mongoose = require("mongoose");
const { User, Contact, VideoGame } = require("../models");
const bcrypt = require("bcrypt");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

//get mongoose connection object
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/" + process.env.DB_NAME,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
    }
);

//hash password function for seed passwords
const hashPassword = (password) => {
    console.log("test");
    console.log(password);
    console.log(process.env.DB_NAME);
    console.log(process.env.ADMIN_PW);
    return bcrypt.hashSync(password, 10);
};

//data object to be inserted in to db
const userSeed = [
    {
        email: "davidtunnell9@gmail.com",
        password: hashPassword(process.env.ADMIN_PW),
        firstName: "David",
        lastName: "Tunnell",
        token: "",
    },
];

//first delete user data in database and then populate with seed data

setTimeout(function () {
    User.remove({})
        .then(() => User.insertMany(userSeed))
        .then((data) => {
            console.log(
                data.length +
                    " " +
                    Object.keys({ userSeed })[0] +
                    " records inserted."
            );
        })
        .catch((err) => {
            console.error(err);
            process.exit(1);
        });
}, 1000);
