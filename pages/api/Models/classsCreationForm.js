import mongoose from 'mongoose'

const DefaultSchema = new mongoose.Schema({
    count: Number,
    dept: String, 
    startRno: Number, 
    section: String, 
    yearOfStudy: Number, 
    oddOrEven: String,
    passedOut: Number
})

mongoose.models = {};

const classCreation = mongoose.model('Default', DefaultSchema);

export default classCreation;