// einzeiliger Kommentar
/*Mehrzeiliger 
Kommentar*/
//Infos un anderen Programieren zeigen wie etwas funktionert
const bodyParser = require('body-parser')

//Anweisungen nach oben nach untnten abgearbeitet
// zweitesn tool

const express = require('express')
//helfen frame work , gint es auch als Internetseite
//müssen dafür aber erst auf der Internet seite
const app = express()
//bindegleid zwischen den clied und nodejs
app.use(bodyParser.urlencoded({extendet: true}))
app.use(express.static('public'))
app.set('view engine', 'ejs')
//Daten aus der Datenbank an die html formular
app.use(express.static('puplic'))
//ab jetzt sucht die app di statishen inhalte unterm puplic ordner
const server = app.listen(process.env.PORT || 3000, () => {
    console.log('Der Server ist erfolgreich gestartet auf Port %s', server.address().port)
})
app.get('/',(req, res, next) => {
    res.render('index.ejs', {

    })
})