const path = require("path");
const fsPromises = require("fs").promises;

const fileOps = async () => {
    try{
        const data = await fsPromises.readFile(path.join(__dirname , "start.txt") , 'utf8');
        console.log(data);
        await fsPromises.writeFile(path.join(__dirname , "subscribe.txt") , 'Hi, Developer sivakumar! (Await)');
        console.log("Writing completed");
        await fsPromises.appendFile(path.join(__dirname , "subscribe.txt") , '\n\nBye, Thank you. (Await)');
        console.log("Updated completed");
        await fsPromises.rename(path.join(__dirname , "subscribe.txt") , path.join(__dirname , "subscribe_remained_await.txt"));
        console.log("Renamed completed");
        await fsPromises.unlink(path.join(__dirname , "subscribe_remained_await.txt"));
        console.log("Deleted completed");
    }catch(err){
        console.error(err);
    }
}
fileOps();