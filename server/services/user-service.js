const path = require('path')
const bcrypt = require('bcrypt')
const { v4: uuidv4 } = require('uuid')

const UserModel = require('../model/user-model')
const mailService = require('./mail-service')
const tokenService = require('./token-service')
const UserDto = require('../dtos/user-dto')

require('dotenv').config({ path: path.join(__dirname, '..', '.env') })

class UserService {
    async registration(email, password) {
        const candidate = await UserModel.findOne({ email })

        if (candidate) {
           throw new Error(`Пользователь с почтой ${email} уже существует`)
        }

        const hashPassword = await bcrypt.hash(password, 3)
        const activationLink = uuidv4()

        const user = await UserModel.create({
            email,
            password: hashPassword,
            activationLink,
        })

        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`)

        const userDto = new UserDto(user)
        const tokens = tokenService.generateToken({ ...userDto })

        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {
            ...tokens,
            user: userDto,
        }
    }
}

module.exports = new UserService()
