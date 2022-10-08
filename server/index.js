require('dotenv').config()
const express = require("express");
const cors = require("cors");
const app = express();
const{SERVER_PORT}=process.env
const{seed} = require('./seed.js')
const{ getComments,getRestItems, getSeeds, getOrbs, getWands, getWearItems, getEightItems,getDialog, createPost, deletePost, getThowItems }=require('./controller.js')

app.use(cors());
app.use(express.json());

app.post('/seed',seed)

app.get('/dialog', getDialog)

app.get('/items/Restoring', getRestItems)
app.get('/items/Seeds', getSeeds)
app.get('/items/Orbs', getOrbs)
app.get('/items/Throwing',getThowItems)
app.get('/items/Wands', getWands)
app.get('/items/Wearable', getWearItems)

app.post('/comments', createPost)
app.get('/comments', getComments)
app.delete('/comments/:id', deletePost)






app.listen (SERVER_PORT,()=> console.log(`up on ${SERVER_PORT}`))