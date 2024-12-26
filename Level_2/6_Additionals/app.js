const express = require('express');
const app = express(); 
const path = require('path');
const multer = require('multer');

app.set('views' , path.join(__dirname , 'views'));
app.set('view engine' , 'ejs');


var storage = multer.diskStorage({
    destination : function(req , file , cb){
        cb(null , './6_Additionals/uploads');
    },
    filename : function(req , file , cb){
        cb(null , file.originalname.replace(/\.[^/.]+$/ , '')+'_'+Date.now()+path.extname(file.originalname))
    }
});

let maxSize = 10 * 1000 * 1000;
let upload = multer({
    storage :storage,
    limits : {
        fileSize : maxSize
    },
    fileFilter : function(req , file , cb){
        let fileTypes = /jpeg|jpg|png/;
        let mimetype = fileTypes.test(file.mimetype);
        let extname = fileTypes.test(path.extname(file.originalname));
    
        if(mimetype && extname){
            console.log(mimetype , extname);
            return cb(null , true);
        }

        cb('Error : File not supported'+fileTypes);
    }
}).single('mypic');


app.get('/' , (req , res) => {
    res.render('signup');
});
app.post('/upload' , (req , res) => {
    upload(req , res , function(err){
        if(err){
            if(err instanceof multer.MulterError && err.code=="LIMIT_FILZE_SIZE"){
                return res.send('Filze size is to large');
            }
        }else{
            res.send('Success! File Uploaded');
        }
    });
});
app.listen(8080 , ()=>{
    console.log('server is runing');
});