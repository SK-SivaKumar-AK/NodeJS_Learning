const fs = require('fs');


const requestHandler = (req , res) => {
    /* Request section */
    //console.log(req.url);
    //console.log(req.method);
    //console.log(req.headers);


    /* Response section */
    if(req.url === '/'){
        res.setHeader('Content-type' , 'text/html');
        res.write('<html>');
        res.write('<head><title>NodeJS Form</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><input type="submit" name="send"></form></body>');
        res.write('</html>');
        return res.end();
    }

    if(req.url === '/message' && req.method === 'POST'){

        /* data getting */
        const body = [];
        req.on('data' , (chunk) => {
            body.push(chunk);
        });


        /* After data end ASYNC event*/
        return req.on('end' , () => {
            const parseBody = Buffer.concat(body).toString();
            let message = parseBody.split('&');
            message = message[0].split('=');
            console.log(message);

            /* This is Non=Blocking section because its async function so handle like this.*/
            fs.writeFile('./3_NodeJS_Internal/hello.txt' , `${message[0]} : ${message[1]}` , (err) => {  
                res.setHeader('location' , '/');
                res.statusCode = 302;
                return res.end(); 
            });
        });
    }

    res.setHeader('Content-type' , 'text/html');
    res.write('<html>');
    res.write('<head><title>NodeJS</title></head>');
    res.write('<body><h1>Hello from NodeJS Server!</h1></body>');
    res.write('</html>');
    res.end();


    
    /* stop the server */
    //process.exit();
};

module.exports = {
    handler : requestHandler,
    someText : 'Printed from another module!'
};