/**
 * imports
 */
import moment from "moment";
import bakeryModel from "../models/bakery.js";
import userModel from "../models/user.js";
import winModel from "../models/win.js";
import { increaseBakeryWonCount } from "../services/env.js";
import { getDiceResults, yamsResult } from "../services/game.js";

/**
 * Exports
 */
export const play = (req, res) => {
    res.render('play/index');
}

export const result = async (req, res) => {
    const results = getDiceResults(5, 6);
    const { winType, nbrBakeryWon } = yamsResult(results);

    const date = moment().add(1, 'day');

    await userModel.updateOne({ name: req.session.user.email }, { nextTry: date });
    req.session.user.nextTry = date;

    if (!winType) return res.render('play/result', { results });

    increaseBakeryWonCount(nbrBakeryWon);

    const bakeries = await bakeryModel.aggregate([{ $sample: { size: nbrBakeryWon } }]);

    bakeries.forEach(bakery => {
        winModel.create({ user: req.session.user, bakery });
    })

    const earnings = await winModel.find().populate('bakery').sort({ _id: -1 }).limit(nbrBakeryWon);

    res.render('play/result', { results, win: { winType, nbrBakeryWon }, earnings });
}