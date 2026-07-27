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


    const allowingFields = ["firstName", "lastName",  "email", "password"];

    const inValidFields = Object.keys(req.body).filter((item) => !allowingFields?.includes(item));
    if(inValidFields?.length > 0) {
        throw new Error(`Invalid Fields: ${inValidFields.join(',')}`)
    }


}

module.exports = {
    validateSchema
}