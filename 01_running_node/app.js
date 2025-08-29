import fs from 'fs'
const readStream = fs.createReadStream("para.txt");

console.log(readStream.readableFlowing)