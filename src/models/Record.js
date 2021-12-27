const Mongoose = require("mongoose");

const RecordSchema = new Mongoose.Schema(
    {
        key: String,
        value:String,
        counts: [Number],
        createdAt: Date
    },
    { timestamps: true, versionKey: false }
);

module.exports = Mongoose.model("record", RecordSchema);