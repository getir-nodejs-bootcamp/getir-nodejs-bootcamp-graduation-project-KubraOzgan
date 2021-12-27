const Mongoose = require("mongoose");
const db = Mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB.");
});

const connectDB = async () => {
    await Mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = {
    connectDB,
};