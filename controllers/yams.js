/**
 * imports
 */
import bakeryModel from "../models/bakery.js";
import userModel from "../models/user.js";
import winModel from "../models/win.js";
import { getDiceResults, yamsResult } from "../services/game.js";

/**
 * Exports
 */
export const play = (req, res) => {
    res.render('play/index');
}

export const result = async (req, res) => {
    const results = getDiceResults(5, 6);
    const { winType, bakeryWon } = yamsResult(results);

    const date = new Date();
    date.setDate(date.getDate() + 1);

    await userModel.updateOne({ name: req.session.user.email }, { nextTry: date });

    if (!winType) return res.render('play/result', { results });

    const bakeries = await bakeryModel.aggregate([{ $sample: { size: bakeryWon } }]);
    const user = req.session.user;

    bakeries.forEach(bakery => {
        winModel.create({ user, bakery });
    })

    res.render('play/result', { results, win: { winType, bakeryWon } });
}