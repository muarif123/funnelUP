const express = require('express')
const {deletep,uploadproduct,getone, updateproduct, updateimg1, updateimg2, updateimg3, getcar, getonecr, editonecr, senduserd} = require('../actions/adminactions')
const checktoken = require('../middleware/istoken')
const isAdmin = require('../middleware/isadmin')
const upload = require('../middleware/multer')

const adminRouter = express.Router()

adminRouter.post('/productinfo',checktoken,isAdmin,upload.fields([{ name: 'image1' }, { name: 'image2' }, { name: 'image3' }]),uploadproduct)

adminRouter.post('/deleteproduc/:id',deletep)
adminRouter.get('/getone/:id',getone)
adminRouter.put('/updateproduct/:id',checktoken,isAdmin,updateproduct)
adminRouter.put('/updateimage1/:id',checktoken,isAdmin,upload.single('image1'),updateimg1)
adminRouter.put('/updateimage2/:id',checktoken,isAdmin,upload.single('image2'),updateimg2)
adminRouter.put('/updateimage3/:id',checktoken,isAdmin,upload.single('image3'),updateimg3)
adminRouter.post('/sendcar',upload.single('carimage'),getcar)
adminRouter.get('/getonecar/:id',getonecr)
adminRouter.put('/geteditcar/:id',upload.single('carimage'),editonecr)
adminRouter.get('/getuserinfos',senduserd)








module.exports = adminRouter
