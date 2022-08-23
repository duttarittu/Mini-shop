const express = require("express");
const User = require("../models/User");
const { verifyTokenAndAuth, verifyTokenAndAdmin } = require("./verifyToken");
const router = express.Router();

//UPDATE
router.put("/:id",verifyTokenAndAuth, async (req,res)=>{
    if(req.body.password){
        res.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString();
    }
    try{
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
            $set: req.body
            },
            {new :true}
        );
        res.status(200).json(updatedUser);
    }catch(err){
        res.status(500).json(err);
    }
});

//DELETE
router.delete("/:id",verifyTokenAndAuth,async(req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json("user has been deleted..")
    }
    catch(err){
        res.status(500).json(err)
    }
})

//GET USER BY ID
router.get("/find/:id",verifyTokenAndAdmin,async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json({others})
    }
    catch(err){
        res.status(500).json(err)
    }
})

//GET ALL USERS
router.get("/",verifyTokenAndAdmin,async(req,res)=>{
    try{
        const users = await User.find();
        res.status(200).json(users)
    }
    catch(err){
        res.status(500).json(err);
    }
})


module.exports = router;
