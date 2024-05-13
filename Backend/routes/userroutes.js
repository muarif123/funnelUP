const express = require('express')
const {signup,login, changepass, changepass2, sendproducts, sendquery, sendcat, getdetail, sendrel, sendcarousel} = require('../actions/useractions')
const checktoken = require('../middleware/istoken')
const userRouter = express.Router()
userRouter.post('/signupinfo',signup)
userRouter.post('/logininfo',login)
userRouter.post('/changepas',checktoken,changepass)
userRouter.put('/updatepasser',changepass2)
userRouter.get('/getproductinfo',sendproducts)
userRouter.get('/getquery/:id',sendquery)
userRouter.get('/getcateg/:id',sendcat)
userRouter.get('/getonedetail/:id',getdetail)
userRouter.get('/getcatego/:id',sendrel)
userRouter.get('/sendcarousels',sendcarousel)


module.exports = userRouter