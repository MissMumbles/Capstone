require('dotenv').config()
const {CONNECTION_STRING} = process.env
const Sequelize = require('sequelize')

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres', 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports={
    

    getRestItems:(req,res)=>{
        sequelize.query(`
        SELECT image_url AS photo,
        item_name AS name,
        price 
        FROM items 
        WHERE category='Restoring'
        `)

        .then((dbRes)=>{
            res.status(200).send(dbRes[0])
        })
        .catch((err)=>console.log(err))
    },

    getSeeds:(req,res)=>{
        sequelize.query(`
        SELECT image_url AS photo,
        item_name AS name,
        price 
        FROM items
        WHERE category='Seed'
        ;
        `)
        .then((dbRes)=>{
            res.status(200).send(dbRes[0])
        })
        .catch((err)=>console.log(err))
    },

    getOrbs:(req,res)=>{
        sequelize.query(`
        SELECT image_url AS photo,
        item_name AS name,
        price 
        FROM items 
        WHERE category='Orb';
        `)
        .then((dbRes)=>{
            res.status(200).send(dbRes[0])
        })
        .catch((err)=>console.log(err))
    },

    getThowItems:(req,res)=>{
        sequelize.query(`
        SELECT image_url AS photo,
        item_name AS name,
        price 
        FROM items 
        WHERE category='Throwing';
        `)
        .then((dbRes)=>{
            res.status(200).send(dbRes[0])
        })
        .catch((err)=>console.log(err))
    },

    getWands:(req,res)=>{
        sequelize.query(`
        SELECT image_url AS photo,
        item_name AS name,
        price 
        FROM items 
        WHERE category='Wand';
        `)
        .then((dbRes)=>{
            res.status(200).send(dbRes[0])
        })
        .catch((err)=>console.log(err))
    },

    getWearItems:(req,res)=>{
        sequelize.query(`
        SELECT image_url AS photo,
        item_name AS name,
        price 
        FROM items 
        WHERE category='Wearable';
        `)
        .then((dbRes)=>{
            res.status(200).send(dbRes[0])
        })
        .catch((err)=>console.log(err))
    },


    getDialog:(req,res)=>{
        const dialog= ["Welcome to my Shop!","Anything catch your eye?", "You'd better stock up if your headed to a dangerous Dungeon!","Look out for my Brother while you adventure! We provide items even in the depths of dungeons!", "I heard there is a dungeon that won't allow items! Terrible, I say! No need for you to go there though! Haha!", "Oran Berries are a must have!", "Do you have enough Reviver Seeds?"," X-Ray Specs let you see all enemies in dungeons! Well worth the price I assure you...","Perhaps a Max Ether? Wouldn't want to run out of moves in a tight spot!","Let me know if I can assist you choose an item!","Watch out for poisonous foes! Keep Pecha berries on you just in case!", "Friend Bows help recruit members!", "Cheri Berries are a must-have for foes that can paralyze!", "Ready to start you adventure right? Prepare with these fine items!","Don't go hungry in a dungeon... have a look at our Restoring Items!","Find a fine fashion choice with Our Wearable Items!", "Pure Seeds warp you straigh to the stairs of a floor! Useful to escape tricky Monster Houses... and nothing else...","Be careful out there! Best buy some items before you go!","Have you seen GuildMaster Wigglytuff? Such a strange Pokemon...", "Come now! You must by something!","Grimy food can save you if you are desperately hungry... just... be pepared for some side effects..." ];
        let randomIndex = Math.floor(Math.random() * dialog.length);
        let randomDialog= dialog [randomIndex];
      
        res.status(200).send(randomDialog);
    },

    createPost: (req, res) => {
        let { name, photo, comment  } = req.body
        sequelize.query(`insert into posts(user_name,photo_url,comment)
        values('${name}','${photo}','${comment}')
        returning*`)

        .then((dbRes)=>res.status(200).send(dbRes[0]))
        .catch(err=>console.log(err))       
    },

    getComments:(req,res)=> {
        sequelize.query(`select 
        id,
        user_name AS name,
        photo_url AS photo,
        comment AS posting
        FROM posts;`)
        .then((dbRes)=>res.status(200).send(dbRes[0]))
    },

    deletePost: (req,res)=>{
        let{id}=req.params;

        sequelize.query(`
        DELETE
        FROM posts
        WHERE id =${id};`)
            .then((dbRes)=>res.status(200).send(dbRes[0]))
            .catch((err)=>console.log(err))
    }
}