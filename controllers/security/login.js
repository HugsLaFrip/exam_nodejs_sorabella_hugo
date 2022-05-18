/**
 * Imports
 */
import userModel from "../../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

/**
 * Exports
 */
export const loginGet = (req, res) => {
    if (req.session.user) return res.redirect('play');

    res.render('security/login');
}

export const loginPost = (req, res) => {
    const { email, password } = req.body;

    userModel.findOne({ email })
        .exec()
        .then(user => {
            if (!user || !bcrypt.compareSync(password, user.password)) {
                req.flash('messages', {
                    class: 'danger',
                    content: 'Email ou mot de passe incorrect'
                });
                return res.redirect('/login');
            }


            req.session.token = jwt.sign({ id: user._id }, process.env.SESSION_TOKEN, { expiresIn: 60 * 60 * 24 * 7 });
            req.session.user = user;

            res.redirect('/play');
        })
}

export const logout = (req, res) => {
    req.session.destroy();

    res.redirect('/');
}