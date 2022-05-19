/**
 * Imports
 */
import winModel from "../models/win.js";

/**
 * Exports
 */
export const userEarnings = async (req, res) => {
    const winnings = await winModel.find(({ user: req.session.user })).populate(['user', 'bakery']).sort({ _id: -1 });

    res.render('winnings/user', { winnings });
}

export const allEarnings = async (req, res) => {
    const winnings = await winModel.find().populate(['user', 'bakery']).sort({ _id: -1 });

    res.render('winnings/index', { winnings });
}