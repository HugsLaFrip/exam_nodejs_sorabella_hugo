/**
 * Imports
 */
import moment from "moment";

/**
 * Middleware
 */
const canPlay = (req, res, next) => {
    const { nextTry } = req.session.user;

    if (nextTry && new Date() < new Date(nextTry)) {
        req.flash('messages', {
            class: 'danger',
            content: "Vous avez déjà effectué votre tirage quotidien. Prochain tirage possible le : " + moment(nextTry).format("DD/MM/YYYY à HH:mm:ss")
        });

        return res.redirect('/play');
    }

    next();
}

/**
 * Export
 */
export default canPlay;