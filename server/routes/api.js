const router = require("express").Router();
const { contact } = require("../models");

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
    contact.create(contactData, function (err, results) {
        if (err) {
            res.status(400).json(err);
        }
        res.send(results);
    });
});

// router.get("/blogs", (req, res) => {
//     microBlog
//         .find({})
//         .sort({ createdAt: "desc" })
//         .then((dbTransaction) => {
//             res.json(dbTransaction);
//         })
//         .catch((err) => {
//             res.status(400).json(err);
//         });
// });

// router.get("/blogs/:id", (req, res) => {
//     const id = req.params.id;
//     microBlog
//         .findOne({ _id: id })
//         .then((dbTransaction) => {
//             res.json(dbTransaction);
//         })
//         .catch((err) => {
//             res.status(400).json(err);
//         });
// });

// router.delete("/blogs/:id", function (req, res) {
//     const id = req.params.id;
//     microBlog
//         .find({ _id: id })
//         .deleteOne()
//         .exec()
//         .then((dbTransaction) => {
//             res.json(dbTransaction);
//         })
//         .catch((err) => {
//             res.status(400).json(err);
//         });
// });

// router.put("/workouts/:id", (req, res) => {
//     Workout.findOneAndUpdate(
//         { _id: req.params.id },
//         { $push: { exercises: req.body } },
//         function (error, success) {
//             if (error) {
//                 res.status(400).json(error);
//             } else {
//                 res.json(success);
//             }
//         }
//     );
// });

module.exports = router;
