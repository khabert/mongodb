const mongoose = require('mongoose')

const connectToDb = async() => {
    try {
        await mongoose.connect("mongodb+srv://khabertzion:7r7dLqMju6L7fQx@cluster0.0n56sl4.mongodb.net/?retryWrites=true&w=majority",);
        console.log("connection to db successfull")
    } catch (error) {
        console.log("connection to db failed", error)
    }
    const db = mongoose.connect

    return db
}

module.exports = connectToDb