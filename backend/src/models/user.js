const mongoose = require('mongoose');

// Define a TypeScript type for user data
const UserType = {
    email: { type: String, required: true, unique: true },
    pass: { type: String, required: true },
    savepass: { type: String, required: true }
};

// Define a mongoose schema using plain JavaScript objects
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    pass: { type: String, required: true },
    savepass: { type: String, required: true }
});

// Create a mongoose model using the schema
const User = mongoose.model('User', userSchema);

module.exports = User; // Exporting the mongoose model
