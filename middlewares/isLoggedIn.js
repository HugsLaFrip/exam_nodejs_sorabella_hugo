/**
 * Imports
 */
import jwt from "jsonwebtoken";

/**
 * Middleware
 */
const isLoggedIn = (req, res, next) => {
    const token = req.session.token;

    if (!token) return res.redirect('/login');

    jwt.verify(token, process.env.SESSION_TOKEN, err => {
        if (err) return res.redirect('/login');

        next();
    })
}

/**
 * Export
 */
export default isLoggedIn;