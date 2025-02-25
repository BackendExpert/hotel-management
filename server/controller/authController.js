const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const User = require('../models/User');
const validator = require('validator');
const PassResetToken = require('../models/PassResetToken');
const crypto = require('crypto')

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

            if (!validator.isEmail(email)) {
                return res.json({ error: "Invalid email format" });
            }

            if (password.length < 6) {
                return res.json({ Error: "Password must be at least 6 characters" });
            }

            const checkuser = await User.findOne({
                $or: [
                    { username: username },
                    { email: email },
                ]
            })

            if(checkuser){
                return res.json({ Error: "User Already Exists"})
            }

            const hashpass = await bcrypt.hash(password, 10)

            const newuser = new User({
                username: username,
                email: email,
                password: hashpass
            })

            const newresultuser = await newuser.save()

            if(newresultuser){
                return res.json({ Status: "Success"})
            }
            else{
                return res.json({ Error: "Internal Server Error"})
            }
        }
        catch(err){
            console.log(err)
        }
    },

    signin: async(req, res) => {
        try{
            const {
                email,
                password
            } = req.body

            const chechuser = await User.findOne({ email: email })

            if(!chechuser){
                return res.json({ Error: "User not found.."})
            }

            const checkpass = await bcrypt.compare(password, chechuser.password)

            if(!checkpass){
                return res.json({ Error: "Password not Match"})
            }

            const token = jwt.sign({ id: chechuser._id, role:chechuser.role }, process.env.JWT_SECRET);
            return res.json({ Status: "Success", Result: chechuser, Token: token })
        }
        catch(err){
            console.log(err)
        }
    },

    chechemailtogetpass: async(req, res) => {
        try{
            const { email } = req.body

            const checkuser = await User.findOne({ email: email })

            if(!checkuser){
                return res.json({ Error: "User Cannot be found by given Email Address"})
            }

            const optalreadyget = await PassResetToken.findOne({ email: email })

            if(optalreadyget){
                return res.json({ Error: "User Already Request OTP, Check Email and Wait 15min and try again"})
            }

            const otp = Array.from(crypto.randomFillSync(new Uint8Array(6)))
            .map(byte => "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"[byte % 62])
            .join('');

            const hashotp = await bcrypt.hash(otp, 10)
            const defultTime = new Date(); 
            const expireAt = new Date(defultTime.getTime() + 15 * 60000);

            const token = jwt.sign({ email: email }, process.env.JWT_SECRET);
            

            const newotp = new PassResetToken({
                email: email,
                otp: hashotp,
                token: token,
                expire_at: expireAt
            })

            const resultsaveotp = await newotp.save()

            if(resultsaveotp){
                const mailOptions = {
                    from: process.env.EMAIL_USER,
                    to: email,
                    subject: "Password Reset",
                    html: `<h1>Password Reset OTP</h1>
                            <p>Password Reset Token: ${otp}</p>
                            <p>This token will be expired after 15min</p>
                            <p>Thank you</p>
                            <p>Admin</p>
                    `
                };
                await transporter.sendMail(mailOptions);

                return res.json({ Status: "Success", Token: token })
            }
            else{
                return res.json({ Error: "Internal Server Error"})
            }

        }   
        catch(err){
            console.log(err)
        }
    },

    verifyotp: async(req,res) => {
        try{
            const { otp } = req.body
            const token = req.params.token
            const email = req.params.email
            
            const checkusertoken = await PassResetToken.findOne({
                $or: [
                    { token: token },
                    { email: email },
                ]
            })

            if(!checkusertoken){
                return res.json({ Error: "User cannot be Authenticated"})
            }

            

        }
        catch(err){
            console.log(err)
        }
    }
};

module.exports = authController;