const express = require('express');
const path = require('path');

const staticFiles = (app)=>{
    app.use(express.static(path.join(__dirname , '..' , 'public')));
};

const urlencode = (app) => {
    app.use(express.urlencoded());
};


module.exports = {
    staticFiles,
    urlencode,
};