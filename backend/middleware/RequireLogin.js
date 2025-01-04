const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')
const USER = mongoose.model("USER")
const {Jwt_secret} = require("../key")

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ error: "you must be logged in" });
    }
    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, Jwt_secret, (err, payload) => {
        if (err) {
            return res.status(401).json({ error: "you must be logged in" });
        }

        const { _id } = payload;
        USER.findById(_id).then(userdata=>{
            req.user = userdata
            next();
        })
    });
};

