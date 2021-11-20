const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

//serve react build folder
app.use(express.static(path.join(__dirname, "..", "build")));

//connect to MongoDB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/" + process.env.DB_NAME,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
    }
);

// Sets up the routes
app.use(routes);

//start server
app.listen(PORT, () => {
    console.log(`Node running at: http://localhost:${PORT}`);
});
