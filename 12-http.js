const http = require('http')

const server = http.createServer((req, res) => {
   if (req.url === '/') {
      res.end('Welcome to the hompage!')
   }
   if (res.url === '/about') {
      res.end('Here is the short history')
   }
   res.end(
      //<div>
         `<h1>Opps!</h1>
         <p>We can't seem to find the page you are looking for.</p>
         <a href="/">Back home.</a>`
      // </div>
   )
   // res.write('Welcome to our homepage!')
   // res.end()
})

server.listen(5000) 