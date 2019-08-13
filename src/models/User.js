import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    date: { type: Date, default: Date.now },
    isAdmin: { type: Boolean, default: false }
});

export default model('User', userSchema)