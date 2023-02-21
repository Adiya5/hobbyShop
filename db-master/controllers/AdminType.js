const AdminTypeModel = require('../models/adm_type')

exports.create = async (req, res) => {
    if (!req.body.adm_type && !req.body.permissions) {
        res.status(400).send({ message: "Content can not be empty!" });
    }

    const admin_type = new AdminTypeModel({
        adm_type: req.body.adm_type,
        permissions: req.body.permissions
    });

    await admin_type.save().then(data => {
        res.send({
            message:"Admin type created successfully!!",
            admin_type:data
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
        const admin_type = await AdminTypeModel.find();
        res.status(200).json(admin_type);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

// Find a single User with an id
exports.findOne = async (req, res) => {
    try {
        const admin_type = await AdminTypeModel.findById(req.params.id);
        res.status(200).json(admin_type);
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

    await AdminTypeModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Admin type not found.`
            });
        }else{
            res.send({ message: "Admin type updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

// Delete a user with the specified id in the request
exports.delete = async (req, res) => {
    await AdminTypeModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Admin type not found.`
            });
        } else {
            res.send({
                message: "Admin type deleted successfully!"
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};