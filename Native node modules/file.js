const fs = require("fs");
//Sync ... or Blocking Request
//fs.writeFileSync("./text.txt","Hello World");

//Async or Non-blocking Request

//fs.writeFile("./text.txt","Hello World Async",(err) => {});

//Sync
//const result = fs.readFileSync("./contacts.txt","utf-8");
//console.log(result);

/* fs.readFile("./contacts.txt","utf-8",(err,result) => {
    if(err){
        console.log("Error",err);
    }
    else{
        console.log(result);
    }
});*/

//fs.appendFileSync("./text.txt",'Hey There\n');
//fs.mkdirSync("my-docs");

/*const os = require("os");
console.log(os.cpus().length);*/

//Blocking

/*console.log("1");
const result = fs.readFileSync("contacts.txt","utf-8");
console.log(result);
console.log("2");*/

//Non-Blocking
/*console.log("1");
 fs.readFile("contacts.txt","utf-8",(err,result) => {
    console.log(result);
 });
console.log("2");*/

