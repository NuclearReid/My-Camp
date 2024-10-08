const { Schema, model} = require('mongoose')
const bcrypt = require('bcrypt')


// I think what i currently have in the schema is easier to follow than something like this:
/* 
    gear: [{
    type: Schema.Types.OBjectID, ref: 'Gear
    }],
 */
// and in that gear[] is everything

const userSchema = new Schema({
        username: 
        {
            type: String,
            required: true,
            unique: true
        },
        password:
        {
            type: String,
            required: true
        },
        shelter: [{ 
            type: Schema.Types.ObjectId, ref: 'Shelter'
        }],
        sleepingBag: [{
            type: Schema.Types.ObjectId, ref: 'SleepingBag'
        }]
})

userSchema.pre('save', async function (next) 
{
    if(this.isNew || this.isModified('password')) 
    {
        this.password = await bcrypt.hash(this.password, 10)
    }
    next()
})

userSchema.methods.isCorrectPassword = async function(password)
{
    return bcrypt.compare(password, this.password)
}

const User = model('User', userSchema)

module.exports = User