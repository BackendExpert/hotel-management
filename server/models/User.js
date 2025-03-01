const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    staffid: { type: String },
    role: { type: String, enum: ['admin', 'moderator'], required: true, default: "user" },  
}, {timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;