const { User } = require('../models')
const {
    Shelter,
    SleepingBag
} = require('../models/Gear')

const { signToken, AuthenticationError} = require('../utils/auth')

const resolvers ={
    Query: {
        users: async () => 
        {
            return User.find({}).populate('shelter').populate('sleepingBag')
        }
    }


}

module.exports = resolvers