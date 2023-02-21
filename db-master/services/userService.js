const userModel = require('../models/user')
const bcrypt = require ('bcryptjs')
class userService{

    async registration (user_f_name, user_s_name, email, password, phone_number, card, home_address){
        const candidate = await userModel.findOne({email: email})
        if (candidate){
            throw new Error(`This ${email} is already used`)
        }
        const hashPassword = await bcrypt.hash(password, 7);
        await userModel.create({user_f_name: user_f_name, user_s_name: user_f_name, email: email, password: hashPassword, phone_number: phone_number, card: card, home_address: home_address})
    }

    async login (email,password){
        const candidate = await userModel.findOne({email: email})
        if (!candidate){
            throw new Error(`There is no user with ${email}`)
        }
        const isValid = bcrypt.compareSync(password, candidate.password)
        if (!isValid){
            throw new Error(`Invalid password`)
        }
    }
}


module.exports = new userService()