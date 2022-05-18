/**
 * Imports
 */
import userModel from "../../models/user.js";

/**
 * Exports
 */
export const registerGet = (req, res) => {
    res.render('security/register');
}

export const registerPost = (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    userModel.create({ firstName, lastName, email, password })
        .then(() => {
            req.flash('messages', {
                class: 'success',
                content: 'Votre compte a bien été crée'
            });

            res.redirect('/login');
        })
        .catch(err => {
            req.flash('messages', {
                class: 'danger',
                content: "Une erreur est survenu : " + err
            })

            res.redirect('/register');
        });
}