const express = require('express');
const User = require('../models/user.model')
const router = express.Router()
const bcrypt = require('bcryptjs');
router.post('/', async (req, res) => {
    const { username, password: plainTextPassword } = req.body;
    const password = await bcrypt.hash(plainTextPassword, 10)
    if (!username || typeof username !== 'string') {
        return res.json({status:'errror',error : 'invalid user name'})
    }
    if (plainTextPassword.length<5) {
        return res.json({ status: 'errror', error: 'Passwaord to small. Should be atleast ' })
    }
    try {
        const response = await User.create({
            username,
            password
        })
        console.log('User is created : ', response)
    } catch (error) {
        if(error.code===11000){
            return res.json({ status: 'error',error:'user in already exits' })
        }throw error
    }

    res.json({ status: 'ok' })
})
module.exports = router