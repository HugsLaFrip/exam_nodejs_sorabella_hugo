/**
 * Imports
 */
import { getBakeryCount } from "../services/env.js"

/**
 * MiddleWare
 */
const isGameFinished = (req, res, next) => {
    const nbrOfBakeryWon = getBakeryCount();

    if (req.url != '/winner' && nbrOfBakeryWon >= 50) return res.redirect('/winner');

    next();
}

/**
 * Export
 */
export default isGameFinished;