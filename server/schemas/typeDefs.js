const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        password: String
        shelter: [Shelter]
        sleepingBag: [SleepingBag]
    }
    
    type Shelter {
        _id: ID
        name: String
        rating: Float
        review: String
        weight: Float
    }

    type SleepingBag {
        _id: ID
        name: String
        rating: Float
        review: String
        weight: Float
    }


    type Query
    {
        users: [User]
    }
`

module.exports = typeDefs