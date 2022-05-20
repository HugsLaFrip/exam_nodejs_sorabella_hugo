/**
 * Middleware
 */
const flashMessages = (req, res, next) => {
    res.locals.flashMessages = req.flash('messages');
    next();
}


/**
 * Export
 */
export default flashMessages;