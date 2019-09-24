const express = require('express')
const chalk = require('chalk')
const path = require('path')
const hbs = require('hbs')

console.log(__dirname)


const app = express()

//Esto conecta esta carpeta (src) con la carpeta 'public'
const publicDirectoryPath = path.join(__dirname, '../public')

//Esto conecta esta carpeta (src) con la carpeta 'views'. Esto se hace cuando quieres utilizar otro nombre en la carpeta de hbs que no sea 'views', que es la que viene por defecto. En el segundo argumento va el nombre de la carpeta donde guarda todos los views de la hbs
const viewsPath = path.join(__dirname, '../templates/views')

//Este path une la app con la carpeta de partials
const partialsPath = path.join(__dirname, '../templates/partials')

//Este es un comando por defecto para conectar hbs. Hay que ponerlo siempre para que funcione hbs
app.set('view engine', 'hbs')

//Esto le indica a la app que hay partials y dónde están
hbs.registerPartials(partialsPath)

//Est es el comando para que 'views' no sea la carpeta por defecto, y en vez sea el que hayamos puesto en 'viewsPath'
app.set('views', viewsPath)

//Esto hace estáticos los archivos contenidos en 'public'
app.use(express.static(publicDirectoryPath))





//INDEX PAGE
app.get('', (req, res)=>{
  res.render('index', {
    title: "Index Page",
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
    title: 'Help page',
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

app.get('/help/*', (req, res)=>{
  res.render('error404_help', {
    title: 'Help page not found',
    name: 'Jaime Jacobo'
  })
})

//NON EXISTENT PAGE
app.get('*', (req, res)=>{
  res.render('error404', {
    title: 'Not found page',
    name: 'Jaime Jacobo'
  })
})

app.listen(3000, ()=>{
  console.log(chalk.green('------- Connected to the server. Listening in port 3000 -------'))
})




