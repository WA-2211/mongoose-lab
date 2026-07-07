const mongoose = require('mongoose')
const Recipe = require('./Recipe/Recipe')
const dotenv = require('dotenv').config()


async function connectedToDataBase() {
    try{
    await mongoose.connect(process.env.DATABASE_CONNECTION_STRING)
        console.log('Connected to database!')

}catch(err){
    console.log('Connection failed.', err)

}}

connectedToDataBase()

const connectToDb = {connectedToDataBase}
module.exports = connectToDb