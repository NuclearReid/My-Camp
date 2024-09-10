const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        password: String
        shelter: [Shelter]
        sleepingBag: [SleepingBag]
    }

    type Auth{
        token: String
        User: User
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

    type Mutation {
        addUser(
            username: String!
            password: String!

        ): Auth
        login(
            username: String!
            password: String!
        ): Auth

        addShelter(
            name: String!
            rating: Float
            review: String
            weight: Float
        ): User
        addSleepingBag(
            name: String!
            rating: Float
            review: String
            weight: Float
        ): User
    }
`

module.exports = typeDefs