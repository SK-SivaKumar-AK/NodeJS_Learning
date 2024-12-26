const express = require('express');
const router = express.Router();
const path = require('path');


/* Import another file to this file */
const rootDir = require('../helpers/path');



router.get('/' , (req , res , next) => {

    /* send method send any response */
    //res.send('<h1>Welcome Page!</h1>');

    /* sendfile methode send the file as response */
    //dirname = Level_2\4_ExpressJS\routes
    //res.sendFile(path.join(__dirname , '..' , 'views' , 'shop.html'));
    //            OR
    res.sendFile(path.join(rootDir , 'views' , 'shop.html'));
});



module.exports = router;