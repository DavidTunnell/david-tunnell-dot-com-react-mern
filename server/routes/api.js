const router = require("express").Router();
const { Contact, VideoGame } = require("../models");
const nodemailer = require("nodemailer");
require("dotenv").config();
const { auth } = require("../middleware/Authorization");
const {
    RegisterUser,
    LoginUser,
    LogoutUser,
    getUserDetails,
} = require("../controllers/AuthenticationController");

//apply routes to user functions that are in the Authentication Controller
router.post("/users/register", RegisterUser);
router.post("/users/login", LoginUser);
router.get("/users/auth", auth, getUserDetails);
router.get("/users/logout", LogoutUser);

router.get("/vg/", (req, res) => {
    VideoGame.find({}, function (err, result) {
        if (err) {
            res.status(400).json(err);
        } else {
            res.json(result);
        }
    });
});

//POST - create video game beat record in db
router.post("/vg/", (req, res) => {
    var videoGameData = [
        {
            createdAt: Date.now(),
            title: req.body.title,
            difficulty: req.body.difficulty,
            date: req.body.date,
            notes: req.body.notes,
        },
    ];
    VideoGame.create(videoGameData, function (err, results) {
        if (err) {
            res.status(400).json(err);
        }
        res.send(results);
    });
});

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: process.env.GMAIL_ADDRESS,
        pass: process.env.GMAIL_PASSWORD, //if you have 2 factor authentication on: https://stackoverflow.com/a/49306726/1524210
    },
    secure: true,
});

//POST - create contact record in db
router.post("/contact/", (req, res) => {
    var contactData = [
        {
            createdAt: Date.now(),
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            message: req.body.message,
        },
    ];
    Contact.create(contactData, function (err, results) {
        if (err) {
            res.status(400).json(err);
        }
        res.send(results);
    });
});

//send an email with data from contact form
router.post("/contact/email/", (req, res) => {
    const { name, email, phone, message } = req.body;

    const text = `Name: ${name} \n Email: ${email} \n Phone #: ${phone} \n Message: ${message}`;
    const html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
        <li>Phone #: ${phone}</li>
        <li>Message: ${message}</li>
    </ul>
    `;

    const mailData = {
        from: process.env.GMAIL_ADDRESS, //it won't send from anything other than this anyway
        to: process.env.GMAIL_ADDRESS,
        subject: process.env.APP_NAME + " form submission",
        text: text,
        html: html,
    };

    transporter.sendMail(mailData, (error, info) => {
        if (error) {
            return console.log(error);
        }
        res.status(200).send({
            message: "Mail send",
            message_id: info.messageId,
        });
    });
});

module.exports = router;
