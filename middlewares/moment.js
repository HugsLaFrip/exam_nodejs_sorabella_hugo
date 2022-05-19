/**
 * Imports
 */
import moment from "moment"

const momentToTemplate = (req, res, next) => {
    res.locals.moment = moment;
    next();
}

/**
 * Export
 */
export default momentToTemplate;