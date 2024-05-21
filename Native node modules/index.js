//const fs = require("fs");
 
/*fs.writeFile("message.txt", "Hello from NodeJS!", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
});*/
//fs.readFile("./message.txt", "utf8", (err,data) => {
  //  if (err) throw err;
    //console.log(data);
//});

const math = require("./math");
console.log(math.add(3,3));
console.log(math.sub(4,3));