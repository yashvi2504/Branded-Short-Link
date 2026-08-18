const express = require('express');
const router=express.Router();
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const Users=require("../models/Users");
router.post("/Users",async(req,res)=>{
    const{UserId,Email,Password,GoogleId}=req.body;
    const user=await Users.create({
        UserId,
        Email,
        Password,
        GoogleId
    });
    res.status(201).json({
        message:"User requested successfully",
       user:user
    });
});
router.post("/login",async(req,res)=>{
    const {Email,Password}=req.body;
    const user=await Users.findOne({
        Email:Email
    });
    if(!user){
        return res.status(401).json({
            message:"Invalid message"
        });
    }
    if(user.Password!==Password){
        return res.status(401).json({
            message:"Invalid Passewords"
        });
    }
    res.status(200).json({
        message:"Login Successful"
    });
});

router.delete("/Users/:id",async(req,res)=>{
    const id=req.params.id;
    const User=await Users.findOneAndDelete({
        UserId:id
    });
    if(!User){
        return res.status(401).json({
            message:"Invalid message"
        });
    }
    res.status(200).json({
        message:"Accound deleted Successful"
    });

});
    router.get("/Users/:id",async(req,res)=>{
        const id=req.params.id;
        const User=await Users.findOne({
            UserId:id
        });
         if(!User){
        return res.status(401).json({
            message:"Invalid message"
        });
    }
      res.status(200).json({
        message:"User found successfully",
        user:User

    });
    });

module.exports = router;