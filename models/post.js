const mongoose = require('mongoose');


const postSchema = mongoose.Schema({
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
   date: {
    type:   Date,
    default: Date.now
   },
   patientName: String,
    address: String,
    phoneNumber: String,
    disease: String,
   
});
    
    module.exports = mongoose.model('Post', postSchema); 