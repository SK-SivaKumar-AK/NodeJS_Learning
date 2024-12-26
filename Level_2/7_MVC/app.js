/* package define */
const express = require('express');
const app = express(); 
const path = require('path');
const { engine } = require('express-handlebars');




/* template config */
app.engine('hbs' , engine({
    extname : '.hbs',
    defaultLayout : false
}));
app.set('views' , path.join(__dirname , 'views'));
app.set('view engine' , 'hbs');



/* Import external files */

/* middleware config */
const {staticFiles , urlencode} = require('./middleware/config');
staticFiles(app);
urlencode(app);

/* Routes */
const userRouter = require('./routes/userRoutes');
app.use(userRouter);



/* server listen */
app.listen(8080 , ()=>{
    console.log('server is runing');
});