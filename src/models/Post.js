import { Schema, model } from 'mongoose'

const postSchema = new Schema({
    title: { type: String, required: true, max: 100 },
    content: { type: String, required: true, min: 64 }
}, {
    timestamps: true
});

export default model('Post', postSchema)