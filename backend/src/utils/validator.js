const validator = require('validator')

function validateInput(req, res, next) {
    try {
        const { email, password } = req.body
        if (!validator.isEmail(email || '')) {
            throw new Error('Invalid email')
        }

        // Keep strong password checks for registration only.
        if (req.path === '/login') {
            if (!password) {
                throw new Error('Password is required')
            }
            return next()
        }

        if (!validator.isStrongPassword(password || '')) {
            throw new Error('Password is not strong enough')
        }

        return next()
    } catch (err) {
        return res.status(400).send({ message: 'Validation error', error: err.message })
    }
}

module.exports = { validateInput }


