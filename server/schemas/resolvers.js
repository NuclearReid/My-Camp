const { 
    User,
    Shelter,
    SleepingBag 
} = require('../models')

const { signToken, AuthenticationError} = require('../utils/auth')

const resolvers ={
    Query: {
        users: async () => 
        {
            return User.find({}).populate('shelter').populate('sleepingBag')
        }
    },

    Mutation: {
        addUser: async(parent, { username, password }) => {
            const shelter = Shelter.create({
                name: 'Nothing Yet',
                // rating: '0',
                review: 'Undecided',
                // weight: '0'
            })
            const sleepingBag = SleepingBag.create({
                name: 'Nothing Yet',
                // rating: '0',
                review: 'Undecided',
                // weight: '0',
            })
            const user = User.create({
                username,
                password,
                shelter: [shelter._id],
                sleepingBag: [sleepingBag._id],
            })

            const token = signToken(user);
            return {token, user}
        },
        login: async (parent, { username, password }) => {
            const user = await User.findOne( { username })

            if(!user) {
                throw AuthenticationError
            }
            const correctPw = await user.isCorrectPassword(password)
            if(!correctPw)
            {
                throw AuthenticationError
            }
            const token = signToken(user)
            return {token, user}
        },

        addShelter: async(parent, {name, rating, review, weight}, context) => {
            if(!context.user)
            {
                throw new AuthenticationError('You need to be logged in!')
            }

            const newShelter = await Shelter.create({
                name, 
                rating,
                review,
                weight
            })
            
            const updatedUser = await User.findByIdAndUpdate(
                context.user._id,
                { $push: {shelter: newShelter._id}},
                { new: true }
            ).populate('shelter').populate('sleepingBag')

            return updatedUser
        },

        addSleepingBag: async(parent, { name, rating, review, weight }, context)  => {
            if(!context.user ) {
                throw new AuthenticationError('You need to be logged in!')
            }

            const newSleepingBag = await SleepingBag.create({
                name,
                rating,
                review,
                weight
            })

            // With every piece of gear needing it's own schema. there will eventually be very large string of .populate('')
            const updatedUser = await User.findByIdAndUpdate(
                context.user._id,
                { $push: {sleepingBag: newSleepingBag._id } },
                { new: true }
            ).populate('shelter').populate('sleepingBag') 

            return updatedUser
        }



    }
}

module.exports = resolvers