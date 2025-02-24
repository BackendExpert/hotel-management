const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

const authController = {
    signup: async(req, res) => {
        try{
            const {
                username,
                email,
                password
            } = req.body

            const checkuser = await User.findOne({
                $or: [
                    { username: username },
                    { email: email },
                ]
            })
        }
        catch(err){
            console.log(err)
        }
    }
};

module.exports = authController;