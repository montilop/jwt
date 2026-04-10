const userService = require('../services/user-service')

class UserController {
    async registration(req, res, next) {
        try {
            const { email, password } = req.body
            const userData = await userService.registration(email, password)

            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
            })

            return res.json(userData)
        } catch (error) {
            return next(error)
        }
    }

    async login(req, res, next) {
        try {
            return res.status(501).json({ message: 'Login is not implemented yet' })
        } catch (error) {
            return next(error)
        }
    }

    async logout(req, res, next) {
        try {
            return res.status(501).json({ message: 'Logout is not implemented yet' })
        } catch (error) {
            return next(error)
        }
    }

    async refresh(req, res, next) {
        try {
            return res.status(501).json({ message: 'Refresh is not implemented yet' })
        } catch (error) {
            return next(error)
        }
    }

    async getUsers(req, res, next) {
        try {
            return res.json(['123', '123'])
        } catch (error) {
            return next(error)
        }
    }

    async activate(req, res, next) {
        try {
            return res.status(501).json({ message: 'Activate is not implemented yet' })
        } catch (error) {
            return next(error)
        }
    }
}

module.exports = new UserController()
