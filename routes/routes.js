/**
 * Imports
 */
import express from "express";
import { loginGet, loginPost, logout } from "../controllers/security/login.js";
import { registerGet, registerPost } from "../controllers/security/register.js";
import isLoggedIn from "../middlewares/isLoggedIn.js";

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

router.route('/login')
    .get(loginGet)
    .post(loginPost)

router.get('/logout', logout)

router.route('/register')
    .get(registerGet)
    .post(registerPost)

router.get('/play', isLoggedIn, (req, res) => {
    res.render('play/index');
})

/**
 * Export
 */
export default router;