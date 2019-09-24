const express = require('express')
const chalk = require('chalk')
const path = require('path')

console.log(__dirname)


const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.get('/weather', (req, res)=>{
  res.send({
    forecast: '',
    location: ''
  })
})

app.listen(3000, ()=>{
  console.log(chalk.green('------- Connected to the server. Listening in port 3000 -------'))
})




