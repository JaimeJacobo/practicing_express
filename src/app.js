const express = require('express')
const chalk = require('chalk')
const path = require('path')

console.log(__dirname)


const app = express()

//Esto conecta esta carpeta (src) con la carpeta 'public'
const publicDirectoryPath = path.join(__dirname, '../public')

//Esto conecta esta carpeta (src) con la carpeta 'templates'. Esto se hace cuando quieres utilizar otro nombre en la carpeta de hbs que no sea 'views', que es la que viene por defecto. En el segundo argumento va el nombre de la carpeta donde guarda todos los hbs
const viewsPath = path.join(__dirname, '../templates')

//Este es un comando por defecto para conectar hbs. Hay que ponerlo siempre para que funcione hbs
app.set('view engine', 'hbs')

//Est es el comando para que 'views' no sea la carpeta por defecto, y en vez sea el que hayamos puesto en 'viewsPath'
app.set('views', viewsPath)

//Esto hace estáticos los archivos contenidos en 'public'
app.use(express.static(publicDirectoryPath))

//INDEX PAGE
app.get('', (req, res)=>{
  res.render('index', {
    title: "Weather App",
    name: 'Jaime Jacobo'
  })
})

//ABOUT PAGE
app.get('/about', (req, res)=>{
  res.render('about', {
    title: 'About me page',
    name: 'Jaime Jacobo'
  })
})

//HELP PAGE
app.get('/help', (req, res)=>{
  res.render('help', {
    title: 'This is the help page',
    name: 'Jaime Jacobo'
  })
})

//WEATHER PAGE
app.get('/weather', (req, res)=>{
  res.send({
    forecast: '',
    location: ''
  })
})

app.listen(3000, ()=>{
  console.log(chalk.green('------- Connected to the server. Listening in port 3000 -------'))
})




