const { getUser } = require("../models/userModel");


const loginPage = (req , res , next)=>{
    res.render('login');
};


const dashboardPage = (req , res , next)=>{

    const user = getUser(req.query.email);
    
    res.render('dashboard' , {
        user : user
    });
};


const loginProcess = (req , res , next)=>{

    const user = getUser(req.body.email);

    if(user !== null && user.password === req.body.password){
        res.redirect('/dashboard?email='+req.body.email);
    }else if(user === null){
        res.render('error' , {
            message : 'No user present'
        })
    }else{
        res.render('error' , {
            message : 'invalid Credentials'
        })
    }
};



module.exports = {
    loginPage,
    dashboardPage,
    loginProcess
};