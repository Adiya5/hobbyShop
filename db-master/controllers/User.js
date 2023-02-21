const UserModel = require('../models/user')
const userService = require ('../services/userService')

class UserController{
    async register(req,res){
        try {
            const email = req.body.email;
            const user_f_name = req.body.user_f_name;
            const user_s_name = req.body.user_s_name;
            const phone_number = req.body.phone_number;
            const card = req.body.card;
            const home_address = req.body.home_address;
            const password = req.body.password;
            console.log(user_f_name, user_s_name, phone_number, card, home_address, email, password)
            // const {username, email, password} = req.body;
            const userData = await userService.registration(user_f_name, user_s_name, phone_number, email, password, card, home_address);
            res.status(200).redirect('/login');
        }catch (e) {
            console.log(e);
        }
    }

    async login(req,res){
        try {
            const email = req.body.email;
            const password = req.body.password;
            await userService.login(email,password);
            res.status(200).redirect('/index');

        }catch (e) {
            console.log(e);
        }
    }

}

module.exports = new UserController()
exports.create = async (req, res) => {
    if (!req.body.email && !req.body.user_f_name && !req.body.user_s_name && !req.body.phone_number
        && !req.body.card && !req.body.home_address && !req.body.password) {
        res.status(400).send({ message: "Content can not be empty!" });
    }

    const user = new UserModel({
        email: req.body.email,
        user_f_name: req.body.user_f_name,
        user_s_name: req.body.user_s_name,
        phone_number: req.body.phone_number,
        card: req.body.card,
        home_address: req.body.home_address,
        password: req.body.password
    });

    await user.save().then(data => {
        res.send({
            message:"User created successfully!!",
            user:data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating user"
        });
    });
};

// Retrieve all users from the database.
exports.findAll = async (req, res) => {
    try {
        const user = await UserModel.find();
        res.status(200).json(user);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

// Find a single User with an id
exports.findOne = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        res.status(200).json(user);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
};

// Update a user by the id in the request
exports.update = async (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    await UserModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `User not found.`
            });
        }else{
            res.send({ message: "User updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

// Delete a user with the specified id in the request
exports.delete = async (req, res) => {
    await UserModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
            res.status(404).send({
                message: `User not found.`
            });
        } else {
            res.send({
                message: "User deleted successfully!"
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};