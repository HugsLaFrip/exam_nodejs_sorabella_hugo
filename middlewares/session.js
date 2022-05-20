/**
 * Middleware
 */
const sessionToTemplate = (req, res, next) => {
    res.locals.session = req.session;
    next();
}

/**
 * Export
 */
export default sessionToTemplate;