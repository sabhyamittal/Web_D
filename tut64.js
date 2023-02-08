const fs=require("fs");
let text=fs.readFileSync("dele.txt","utf-8");
text=text.replace("sabhya","priya");
console.log("the content of the file is ");
console.log(text);
console.log("Creating a new file...");
fs.writeFileSync("Sabhya.txt",text);