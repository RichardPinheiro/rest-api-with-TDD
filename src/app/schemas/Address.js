import Mongoose, { Schema } from 'mongoose'

const AddressSchema = new Mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        number: {
            type: Number,
            required: true
        },
        complement: { type: String },
        neighborhood: { type: String },
        city: { 
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zip_code: { type: String },
        person_id: {
            type: Schema.Types.ObjectId,
            ref: 'Person'
        }
    }
)

export default AddressSchema