const fs  = require ('fs');

const readStream = fs.createReadStream('./docs/blog.txt' , {encoding: 'utf8'})
const writeStrream = fs.createWriteStream('./docs/myCv.txt');

// readStream.on('data' , (chunk) => {
//   console.log('-------- New CHUCK ---------');
// //  console.log(chunk.toString());
//     console.log(chunk);
     
//     writeStrream.write('\n NEW CHUCK \n' );
//     writeStrream.write(chunk)
// })

readStream.pipe(writeStrream)
