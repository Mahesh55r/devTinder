const validator = require('validator')


const validateSchema = (req) => {
    const {firstName, lastName, email, password} = req.body || {};

    if(!firstName || !lastName) {
        throw new Error('Enter Valid Name')
    } else if(!validator.isEmail(email)) {
        throw new Error('Enter Valid email')
    } else if (!validator.isStrongPassword(password)) {
        throw new Error('Enter Strong Password')
    }
}

module.exports = {
    validateSchema
}