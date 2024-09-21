const fs = require('fs')

//sync 
const fileContent = fs.readFileSync('file.txt','utf-8');
console.log(fileContent)


// async 
fs.readFile('file.txt','utf-8', (err,data) => {
  if (err) {
    return;
  }
  console.log(data)
})

// write file
// async way
fs.writeFile('text.txt','writing the content', (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('content is added to the file')
})

fs.writeFileSync('newfile.txt',"hello sync contet written",'utf-8')
console.log('new file is adeded')

fs.stat('file.txt',(err,stats) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(stats)
})

const stats = fs.statSync('file.txt')
console.log(stats)


fs.mkdir('new_directory',(err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('Directory')
})

fs.rmdir('new_directory',(err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('Directory removed')
})

fs.unlink('file.txt',(err) => {
  if (err) {
    console.log(err) 
    return
  }
  console.log('file')
})

fs.unlinkSync('text.txt')
console.log('done')