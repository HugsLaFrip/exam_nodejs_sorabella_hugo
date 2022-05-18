const flashMessages = (req, res, next) => {
    res.locals.flashMessages = req.flash('messages');
    next();
}

export default flashMessages;