const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
    storeId:{
        type: String,
        required: [true,'Store_id'],
        unique:true,
        trim: true,
        maxlength: [10,'store id must not exceed 10 characters']
    },
    address:{
        type: String,
        required: [true,'add an address']
    },
    location:{
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
          },
          coordinates: {
            type: [Number],
            required: true
          },
          formattedAddress: String
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Store,StoreSchema');