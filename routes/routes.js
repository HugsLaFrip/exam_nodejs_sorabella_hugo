/**
 * Imports
 */
import express from "express";
import { loginGet, loginPost, logout } from "../controllers/security/login.js";
import { registerGet, registerPost } from "../controllers/security/register.js";
import { play, result } from "../controllers/yams.js";
import isLoggedIn from "../middlewares/isLoggedIn.js";
import { formatDate } from "../services/date.js";

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
console.log(formatDate(new Date()));
router.route('/login')
    .get(loginGet)
    .post(loginPost);

router.get('/logout', logout);

router.route('/register')
    .get(registerGet)
    .post(registerPost);

router.get('/play', isLoggedIn, play);
router.get('/result', isLoggedIn, result);

/**
 * Export
 */
export default router;