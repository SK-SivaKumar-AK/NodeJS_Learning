/* define packages */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');



/* Import another file to this file */
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');




/* Call the function using 'use' key word is called middleware in expressJS */

/* use body parser in express */
app.use(bodyParser.urlencoded());

/* use assets folder permission with route */
app.use(express.static(path.join(__dirname , 'assets')));


/* use another function in another file in express */
app.use('/admin' , adminRoutes);
app.use('/shop' , shopRoutes);
app.use((req , res , next) => {

    /* send method send any response */
    //res.status(404).send('<h1>404 Page Not Found.</h1>');

    /* sendfile methode send the file as response */
    //dirname = Level_2\4_ExpressJS\
    res.sendFile(path.join(__dirname , 'views' , '404.html'));
});










// /* middleware 1 */
// app.use((req , res , next) => {
//     console.log('First Middleware!');

//     /* next is calling the next midddleware */
//     next();
// });

// /* middleware 2 */
// app.use((req , res , next) => {
//     console.log('Second Middleware!');

//     /* next is calling the next midddleware */
//     next();
// });

// /* middleware 3 */
// app.use((req , res , next) => {
//     console.log('Third Middleware!');

//     /* content type is application/html automatically pick */
//     //res.send('<h1>Hi, SivaKumar!</h1>');

//     /* content type is application/html automatically pick */
//     //res.send({name : 'SivaKumar'});
// });





/* create and listen server */
app.listen(3000);