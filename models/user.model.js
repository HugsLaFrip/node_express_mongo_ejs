import mongoose from 'mongoose';
import { isEmail } from 'validator';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 75,
        trim: true
    },
    email: {
        type: String,
        required: true,
        validate: [isEmail],
        lowercase: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        minlength: 8,
        trim: true
    }
}, {
    timestamps: true
});

userSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

const userModel = mongoose.model('user', userSchema);

export default userModel;