const { readFile } = require('fs')

console.log('Started a first task.')

// Check file Path
readFile('./content/first.txt', 'utf-8', (err, result) => {
   if(err) {
      console.log(err)
      return;
   }
   console.log(result)
   console.log('Completed first task.')
}) 
console.log('Starting new task.')