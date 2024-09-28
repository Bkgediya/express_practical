//
// readable stream
// writable stream
// duplex stream
// transform stream

const fs = require('fs');
const path = require('path');

const http = require('http');

const server = http.createServer((req,res)=>{
  if(req.url !== '/'){
    return res.end('Not found')
  }
  const readableStream = fs.createReadStream('file.txt');

  readableStream.on('data', (chunk) => {
      res.write(chunk)
  });

  readableStream.on('end', () => {
    res.end() 
  });

  readableStream.on('error', (err) => {
    res.end(err)
  });
})

server.listen(5000,()=>{
    console.log('Server is running on port 5000')
})

