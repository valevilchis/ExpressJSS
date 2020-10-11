const express = require('express')
const app = express()
const port = 3000

app.use(express.static('css'));
app.use(express.static('fonts'));
app.use(express.static('img'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
 
