const express = require("express");
const router = express.Router();
const {getAllMessages,saveMessage,deleteAllMessages } = require("../services/messages");
const {Message} = require('../models/messages');

router.get('/:room',async (req,res,next) => {
    try {
        const { room } = req.params;
        const data = await getAllMessages(room); 
        res.send(data);
        
    } catch (error) {
        next(error);
    }
} )
// router.delete("/",async (req,res) =>{
//     try {
//         Message.drop( { } );
//         console.log("deleted");
//      } catch (e) {
//         console.log(e);
//      }
// })

module.exports = router;