import mongoose, { Mongoose } from 'mongoose'
const Visas = new mongoose.Schema({
    title:String,
    link:String,
    gallery:Array,
    overview:String,
    inclusions:Array,
    exclusions:Array,
    price:Number,
    termConditions:String,
}, { timestamps: true })

mongoose.models = {};
export default mongoose.model('Visas', Visas);