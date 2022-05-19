/**
 * Imports
 */

/**
 * Middleware
 */
const canPlay = (req, res, next) => {
    if (!req.session.user.nextTry || new Date() < req.session.user.nextTry) {
        req.flash('messages', {
            class: 'danger',
            content: 'Prochain tirage possible le :'
        })
    }

    next();
}

/**
 * Export
 */
export default canPlay;