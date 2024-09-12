const { Schema, model } = require('mongoose')

// Right now, each piece of gear would get it's own Schema

// The reason for this, is to make the userSchema a bit easier to read/go through cause each piece of gear is it's own thing
// Users will also be able to put in multiples of each gear, like maybe they have two kinds of tents or w/e 

// I think when I start building the front end, it'll make it easier for when I'm building a scene i can just call one specific part of the data

// For example: when i want to make the 3D scene, i can just call for the user.shelter and get that info, user.sleepingBag and get that info
// I think this will be more performant because I won't have to call for everything each time I want to get some sort of info ie just what the user's shelter is

// But, this could also overcomplicate other parts like the resolvers needing me to put in .populate('shelter).populate('sleepingBag) etc for each piece of gear. 
// And needing to make very specific resolvers to get each piece of info and I can't just easily say 'get user info' and the database gives me everything to pick from. Unless i add in all the .populate()



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