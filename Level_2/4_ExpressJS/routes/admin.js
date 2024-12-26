const express = require('express');
const router = express.Router();
const path = require('path');


/* Import another file to this file */
const rootDir = require('../helpers/path');



/* activity with router middleware */

// app.use('/add-product' , (req , res , next) => {
//     res.send('<h1>Add Product</h1><form action="/store-product" method="POST"><input type="text" name="title"/><input type="submit" value="submit"/></form>');
// });
// app.use('/store-product' , (req , res , next) => {
//     console.log('form data:' , req.body);
//     res.send('<h1>Product stored!</h1>');
// });              
//                     OR
router.get('/add-product' , (req , res , next) => {

    /* send method send any response */
    //res.send('<h1>Add Product</h1><form action="/admin/store-product" method="POST"><input type="text" name="title"/><input type="submit" value="submit"/></form>');


    /* sendfile methode send the file as response */
    //dirname = Level_2\4_ExpressJS\routes
    //res.sendFile(path.join(__dirname , '..' , 'views' , 'add-product.html'));
    //                OR
    res.sendFile(path.join(rootDir , 'views' , 'add-product.html'));
});

router.post('/store-product' , (req , res , next) => {
    console.log('form data:' , req.body);
    res.send('<h1>Product stored!</h1>');
});


module.exports = router;