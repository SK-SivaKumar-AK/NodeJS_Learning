const fs = require("fs");
const path = require("path");

// fs.readFile('./start.txt', (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });

//OR


// fs.readFile('./start.txt', 'utf8' , (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });


//filepath dynamic
fs.readFile(path.join(__dirname , "start.txt") , 'utf8' , (err, data) => {
    if (err) throw err;
    console.log(data);
});

fs.writeFile(path.join(__dirname , "subscribe.txt") , 'Hi, Developer sivakumar!' , (err) => {
    if (err) throw err;
    console.log("Writing Completed!");
    fs.appendFile(path.join(__dirname , "subscribe.txt") , '\n\nBye, Thank you.' , (err) => {
        if (err) throw err;
        console.log("Updated Completed!");
        fs.rename(path.join(__dirname , "subscribe.txt") , path.join(__dirname , "subscribe_remained.txt") , (err) => {
            if (err) throw err;
            console.log("Rename Completed!");
            fs.unlink(path.join(__dirname , "subscribe_remained.txt") , (err) => {
                if (err) throw err;
                console.log("Deleted Completed!");
            });
        });
    });
});

process.on("uncaughtException" , err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
});





