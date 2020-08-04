import Mongoose  from 'mongoose'

import Address  from '../schemas/Address';

const PersonSchema = new Mongoose.Schema(
    {
        type: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        company_name: { type: String },
        cpf: { type: String },
        cnpj: { type: String },
        gender: { type: String },
        birth: { type: Date },
        email: { 
            type: String,
            lowercase: true,
            trim: true,
            index: true,
            unique: true,
            sparse: true
        },
        phone: { type: String },
        cell_phone: { type: String },
        photo_url: { type: String },
        address: [ Address ]
    },
    {
        timestamps: true,
        versionKey: false
    }
)

export default Mongoose.model('Person', PersonSchema)