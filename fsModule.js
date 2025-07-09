const fs = require('node:fs');


fs.readFile('file.txt','utf8',(err,data)=>{
    console.log(err,data)
})

console.log("finished read file") 
fs.writeFile('file2.txt', "this is a data",()=>{
    console.log("written to the file")
});
console.log("Finished reading file")