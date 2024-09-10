const { Schema, model } = require('mongoose')

// Shelter
const shelterSchema = new Schema({
    name: String,
    rating: Number,
    review: String,
    weight: Number
})

const Shelter = model('Shelter', shelterSchema)

// Sleeping Bag
const sleepingBagSchema = new Schema({
    name: String,
    rating: Number,
    review: String,
    weight: Number
})

const SleepingBag = model('SleepingBag', sleepingBagSchema)

module.exports = { Shelter, SleepingBag }