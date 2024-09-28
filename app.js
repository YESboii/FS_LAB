const express = require("express");
const app = express();
const mongoose = require("mongoose");

const taskRoutes = require("./routes/taskRoutes");
const userRoutes = require('./routes/UserRoutes')

const {MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT} = require("./config/config");
const MONGO_URL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

mongoose.connect(
    MONGO_URL)
    .then(() => {
        console.log("Successfully connected to MongoDB");
    })
    .catch((e) => {
        console.log("Error :",e);
    });


app.use(express.json());    

app.get("/", (req, res) => {
    res.send("<h1>Hello, world</h1>");
});


app.use("/api/v1/tasks", taskRoutes);
app.use("/api/v1/users", userRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port:${PORT}`);
});