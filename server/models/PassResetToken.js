const mongoose = require('mongoose');

const PassResetTokenSchema = new mongoose.Schema({
    email: { type: String, required: true},
    otp: { type: String, required: true},
    expire_at: { 
        type: Date, 
        required: true,
        index: { expireAfterSeconds: 0}
    },
}, {timestamps: true});

const PassResetToken = mongoose.model('PassResetToken', PassResetTokenSchema);

module.exports = PassResetToken;