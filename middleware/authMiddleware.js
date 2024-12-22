const db = require('../database/database')
const jwt = require('jsonwebtoken')

/* ------------- RE CONNECTION ou PERMET DE TESTER LE TOKEN ------------- */
exports.verifyToken = (req, res, next) => {
    try {
        const token = req.headers.cookie.split("userToken=")[1].split(";")[0]
        console.log(token)
    
        const dataUser = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.dataUser = dataUser
        next()

    } catch (err) {
        res.status(403).json({message: 'Expired token, renvoie sur la page de connection'})
        //throw new Error({message: 'Expired token'});
    }
}
