const userSchema = require("../models/userSchema");
const ApiResponse = require("../utils/APIresponse");
const FailResponse = require("../utils/Failresponse");
const matchpass = require("../utils/compare");
const encrypt = require("../utils/encryption");
const genToken = require("../utils/token");

const productschema = require("../models/productschema");
const carousel = require("../models/carousel");

const signup = async(req,res)=>{
    console.log(req.body);
    try {
        var encPassword = await encrypt(req.body.password)
        console.log(encPassword);
        req.body.password = encPassword
        var result = await userSchema.create(req.body)
        console.log(result);

        
    } catch (error) {
        
    }
    
}
const login = async(req,res)=>{
    try {
        var response = await userSchema.findOne({email:req.body.email})
        if(!response){
            res.status(200).json(new FailResponse(404,null,'User not found'))

        }
        var iscorrect = await matchpass(req.body.password,response.password)
        if(!iscorrect){
            res.status(200).json(new FailResponse(401,null,'Incorrect Password'))

        }
        var token = await genToken(response._id)
        if(token){
            res.status(200).json(new ApiResponse(200,{response,token},'Login Succesfully'))
        }
        
    } catch (error) {
        
    }
}
const changepass = async(req,res)=>{
    
    try {
        var response = await matchpass(req.body.oldpass,req.user.password)
        if(!response){
            res.status(200).json(new FailResponse(401,null,'Invalid Old Password'))
        }
        var newpass = await encrypt(req.body.newpass)
        var changepass = await userSchema.findOneAndUpdate({
            _id:req.user._id
        },
    {
        $set:{password:newpass}
    },
{
    new : true
})
 if(changepass){
    res.status(200).json(new ApiResponse(200,{},'Password Updated Successfully'))
 }
console.log(result,'password updated');
     
        
    } catch (error) {
        
    }
}
const changepass2 = async(req,res)=>{
    
    var newpas = await encrypt(req.body.newpass)
    try {
        var response = await userSchema.findOneAndUpdate({
            email:req.body.email
        },{
            $set:{password:newpas}
        },
    {
        new:true

    })
    console.log(response);

    if(!response){
        res.status(200).json(new FailResponse(404,null,'Verification failed'))
    }
    else{
        res.status(200).json(new ApiResponse(200,null,'Password Updated Successfully'))
    }

     
        
    } catch (error) {
        
    }
}

const sendproducts = async (req,res) => {
        var response = await productschema.find({})
        res.json(response)
}
const sendquery = async(req,res)=>{
    try {
        var inputvalue = req.params.id.split(' ')
        console.log(inputvalue);
        var results = []
        let words;
        for(words of inputvalue){
            var category = await productschema.find({category:words})
            var names = await productschema.find({name:{$regex:new RegExp(words,'i')}})
            results = results.concat(category,names)
        }
        if(results.length===0){
            res.status(200).json(new FailResponse(404,null,`There are no products that match "${words}"`))
            
        }
        console.log(results);
        res.json(results)
        
    } catch (error) {

        
    }
}
const sendcat = async(req,res)=>{
    console.log(req.params.id);
    try {
        var response = await productschema.find({category:req.params.id})
        res.json(response)

        
    } catch (error) {
        
    }
}
const getdetail = async(req,res)=>{
    try {
        var response = await productschema.findById(req.params.id)
        var updated = []
        updated.push(response)
        res.json(updated)
        
    } catch (error) {
        
    }
}
const sendrel = async(req,res)=>{
  
    
    try {
        var response = await productschema.find({_id:req.params.id})
        console.log(response);
        var result = await productschema.find({category:response[0].category})

        res.json(result)

        
    } catch (error) {
        console.log(error);
        
    }

}
const sendcarousel = async(req,res)=>{
    try {
        var response = await carousel.find({})
        res.json(response)
        
    } catch (error) {
        
    }
}



module.exports = {signup,login,changepass,changepass2,sendproducts,sendquery,sendcat,getdetail,sendrel,sendcarousel}