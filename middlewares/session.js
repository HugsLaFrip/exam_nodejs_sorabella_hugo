const sessionToTemplate = (req, res, next) => {
    res.locals.session = req.session;
    next();
}

export default sessionToTemplate;