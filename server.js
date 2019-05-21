class Konto{
    constructor(){
        this.Kontonummer
        this.Kontoart
    }
}
class Kunde{
    constructor(){
        this.Mail
        this.Name
        this.Kennwort
        this.IdKunde
        this.Geburtsdatum
        this.Adresse
        this.Telefon
    }
}
let kunde = new Kunde()
kunde.Mail = "zuki@gmail.com"
kunde.Name = "Zuki"
kunde.Kennwort = "1234"
kunde.IdKunde = 4711
kunde.Geburtsdatum = "13.5"
kunde.Adresse = "Zur hohen Straße"
kunde.Telefon = "028662346"


const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())

const server = app.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})

app.get('/',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){
        console.log("Kunde ist angemeldet als " + idKunde)
        res.render('index.ejs', {                              
        })
    }else{
        res.render('login.ejs', {                    
        })    
    }
})

app.get('/login',(req, res, next) => {         
    res.cookie('istAngemeldetAls', '')       
    res.render('login.ejs', {                    
    })
})

app.get('/login',(req, res, next) => {   
    res.render('login.ejs', {                    
    })
})

app.post('/',(req, res, next) => {   

    const idKunde = req.body.idKunde
    const kennwort = req.body.kennwort

    if(idKunde == kunde.IdKunde && kennwort === kunde.Kennwort){
        console.log("Der Cookie wird gesetzt")
        res.cookie('istAngemeldetAls','idKunde')
        res.render('index.ejs', {                    
        })
    }else{
        console.log("Der Cookie wird gelöscht")
        res.cookie('istAngemeldetAls','')
        res.render('login.ejs', {                    
        })
    }
})

app.get('/impressum',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){
        console.log("Kunde ist angemeldet als " + idKunde)
        res.render('impressum.ejs', {                              
        })
    }else{
        res.render('login.ejs', {                    
        })    
    }
})

app.get('/kontoAnlegen',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){
        console.log("Kunde ist angemeldet als " + idKunde)
        res.render('kontoAnlegen.ejs', { 
            meldung : ""                             
        })
    }else{
        res.render('login.ejs', {                    
        })    
    }
})

app.post('/kontoAnlegen',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){

        let konto = new Konto()
        konto.Kontonummer = req.body.kontonummer
        konto.Kontoart = req.body.kontoart

        console.log("Kunde ist angemeldet als " + idKunde)
        res.render('kontoAnlegen.ejs', {                              
           meldung : "Das Konto " + konto.Kontonummer + " wurde erfolgreich angelegt." 
           //string ist eine zeichenkette
           // mehrere Ketten verketten/verbinden wir mit dem +
        })
    }else{
        res.render('login.ejs', {                    
        })    
    }
    
})

app.get('/profilBearbeiten',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){
        console.log("Kunde ist angemeldet als " + idKunde)
        res.render('profilBearbeiten.ejs', { 
            meldung : ""                             
        })
    }else{
        res.render('login.ejs', {                    
        })    
    }
})

app.post('/profilBearbeiten',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){

        let kunde = new Kunde()
        kunde.Mail = req.body.mail
        kunde.Name = req.body.name
        kunde.Kennwort = req.body.kennwort
        kunde.IdKunde = req.body.idKunde
        kunde.Geburtsdatum = req.body.geburtsdatum
        kunde.Adresse = req.body.adresse
        kunde.Telefon = req.body.telefon

        console.log("Kunde ist angemeldet als " + idKunde)
        res.render('profilBearbeiten.ejs', {                              
           meldung : "Das Profil wurde bearbeitet: <br>Mail:" + kunde.Mail + "<br> Kennwort: " +kunde.Kennwort + "<br> Adresse:" + kunde.Adresse +"<br> Telefon:" + kunde.Telefon
           //string ist eine zeichenkette
           // mehrere Ketten verketten/verbinden wir mit dem +
        })
    }else{
        res.render('login.ejs', {                    
        })    
    }
    
})
