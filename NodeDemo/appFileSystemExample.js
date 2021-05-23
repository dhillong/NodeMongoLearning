const fs = require("fs");

fs.readdir("./", function(err, files){
    if(err) console.log(`Erros ${err}`);
    else console.log(`Files : ${files}`);
})