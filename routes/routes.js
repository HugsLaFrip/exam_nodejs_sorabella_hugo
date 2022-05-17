/**
 * Imports
 */
import express from "express";

/**
 * Router
 */
const router = express.Router();

/**
 * Routes
 */
router.get('/', (req, res) => {
    res.render('home');
});

/**
 * Export
 */
export default router;