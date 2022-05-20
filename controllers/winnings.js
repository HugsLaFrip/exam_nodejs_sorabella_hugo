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

export const winner = async (req, res) => {
    const winner = (await winModel.aggregate([{
        $group: {
            _id: "$user",
            winCount: { $count: {} }
        }
    }, {
        $sort: { winCount: -1 }
    }, {
        $lookup: {
            from: 'users',
            localField: '_id',
            foreignField: '_id',
            as: 'user'
        }
    }]))[0];

    res.render('winner', { winner });
}