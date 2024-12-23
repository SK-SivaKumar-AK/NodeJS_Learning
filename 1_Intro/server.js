console.log("Hello World");
//console.log(global);


const os = require("os");   // inbuild

console.log(os.type());
console.log(os.version());
console.log(os.homedir());
console.log(__dirname);
console.log(__filename);

console.log("--------------------------------------");

const path = require("path");
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));

console.log("--------------------------------------");

//const math = require("./math");
//console.log(math.add(2 , 3));
//console.log(math.sub(2 , 3));
//console.log(math.mul(2 , 3));
//console.log(math.div(2 , 3));

//OR

const {add , sub , mul , div} = require("./math");

console.log(add(2 , 3));
console.log(sub(2 , 3));
console.log(mul(2 , 3));
console.log(div(2 , 3));