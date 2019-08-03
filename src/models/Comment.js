import { Schema, model } from 'mongoose'
const { ObjectId } = Schema;

const commentSchema = new Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    comment: { type: String, required: true },
    gravatar: { type: String },
    post_id: { type:  ObjectId, required: true}
}, {
    timestamps: true
});
 
export default model('comments', commentSchema)