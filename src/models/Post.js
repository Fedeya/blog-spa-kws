import { Schema, model } from 'mongoose'

const postSchema = new Schema({
    title: { type: String, required: true, max: 100 },
    content: { type: String, required: true, min: 64 },
    category: { type: String },
    imageUrl: { type: String },
    likes: { type: Number, default: 0 },
    comments: { type: Number, default: 0 }
}, {
    timestamps: true
});

export default model('Post', postSchema)