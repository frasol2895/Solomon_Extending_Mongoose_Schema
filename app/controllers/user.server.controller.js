const User = require('mongoose').model('User');

exports.create = async function(req, res) {
    try {
        const user = new User(req.body);
        const savedUser = await user.save();

        console.log(`Saved user: ${savedUser.firstName} ${savedUser.lastName}, ID: ${savedUser._id}`);
        res.status(200).send('User Added');
    } catch (error) {
        console.error('Could not save user:', error.message);
        res.status(500).send('Could not save user');
    }
};