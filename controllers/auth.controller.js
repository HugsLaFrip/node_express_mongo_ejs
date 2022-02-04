import userModel from "../models/user.model";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const maxAge = 7 * 24 * 60 * 60 * 1000;

export const loginGet = (req, res) => {
    res.render('auth/login')
}

export const loginPost = (req, res) => {
    const { email, password } = req.body;

    userModel
        .findOne({ email: email })
        .exec()
        .then(user => {
            const auth = bcrypt.compareSync(password, user.password);

            if (!auth) return res.redirect('/auth/login');

            const id = user._id;
            const token = jwt.sign({ id }, process.env.TOKEN, { expiresIn: maxAge });

            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge });
            res.redirect('/');
        })
        .catch(err => res.status(200).json({ err: err }));
}

export const logout = (req, res) => {
    res.clearCookie('jwt');
    res.redirect('/');
}

export const registerGet = (req, res) => {
    res.render('auth/register');
}

export const registerPost = (req, res) => {
    const { firstName, lastName, email, password, passwordConfirm } = req.body;

    if (!(password === passwordConfirm)) return res.redirect('/auth/register');

    userModel
        .create({ firstName, lastName, email, password })
        .then(() => res.redirect('/auth/login'))
        .catch(err => res.status(200).json(err));
}