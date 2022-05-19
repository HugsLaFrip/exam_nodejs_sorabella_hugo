/**
 * Imports
 */
import express from "express";
import { loginGet, loginPost, logout } from "../controllers/security/login.js";
import { registerGet, registerPost } from "../controllers/security/register.js";
import { allEarnings, userEarnings } from "../controllers/winnings.js";
import { play, result } from "../controllers/yams.js";
import canPlay from "../middlewares/canPlay.js";
import isLoggedIn from "../middlewares/isLoggedIn.js";
import momentToTemplate from "../middlewares/moment.js";

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
    .post(loginPost);

router.get('/logout', logout);

router.route('/register')
    .get(registerGet)
    .post(registerPost);

router.get('/play', isLoggedIn, play);
router.get('/result', isLoggedIn, canPlay, momentToTemplate, result);
router.get('/my-earnings', isLoggedIn, momentToTemplate, userEarnings);
router.get('/all-earnings', momentToTemplate, allEarnings);
router.get('/winner', (req, res) => {
    res.send('The winner is...');
})

/**
 * Export
 */
export default router;