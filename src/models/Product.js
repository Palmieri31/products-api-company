import {Schema, model} from 'mongoose'

const productSchema = new Schema({
    name: String,
    category: String,
    price: Number,
    imgURL: String
}, {
    timestamps: true, //fecha de creacion y fecha de actualizacion
    versionKey: false
})

export default model('Product', productSchema);