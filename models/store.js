const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true

        },
        photo: {
            type: String,
            trim: true
        },
        created: {
            type: Date,
            default: Date.now
        },
        rating: {
            type: Number,
            required: true
        }
    }
);
const Store = mongoose.model("Store", storeSchema);

module.exports = Store;
