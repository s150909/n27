// Klassendefinition. Die Klasse ist der Bauplan,
//der alle relevanten Eigenschaften enthält.
// Nach der Deklaration wird mit dem reservierten Wort 
// 'new' ein Objekt der Klasse instanziiert.

class Konto{
    constructor(){
        this.Kontonummer
        this.Kontoart
    }
}

class Kunde{
    constructor(){
        this.Mail
        this.Nachname
        this.Kennwort
        this.IdKunde
        this.Geburtsdatum
        this.Adresse
        this.Telefonnummer
    }
}

// Deklaration und Instanziierung

let kunde = new Kunde()

// Initialisierung

kunde.Mail = "zuki@gmail.com"
kunde.Name = "Zuki"
kunde.Kennwort = "123"
kunde.IdKunde = 4711
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const iban = require('iban')
const app = express()
const mysql = require('mysql')
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())

const dbVerbindung = mysql.createConnection({
    host: "10.40.38.110",
    port:"3306",
    database:"dbn27",
    user:"placematman",
    password:"BKB123456!"

})
dbVerbindung.connect()
// Die Kontotabelle wird angelegt.

dbVerbindung.connect(function(err){
    dbVerbindung.query("CREATE TABLE IF NOT EXISTS konto(iban VARCHAR(22), anfangssaldo DECIMAL(15,2), kontoart VARCHAR(20), timestamp TIMESTAMP, PRIMARY KEY(iban));", function(err, result){
        if(err){
            console.log("Es ist ein Fehler aufgetreten: " + err)   
        }else{
            console.log("Tabelle erstellt bzw. schon existent.")
        }
    })
})
//Großgeschrieben weil es eine Datenbank ist
// Sprache sql 
// tabelle wird angelegt
// Varchar heiße das es maximal 22 oder 20 buchstaben hingeschrieben werden
//primary key guckt das es die iban auch wirklich nur 1 mal gibt

const server = app.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})

// Beim Aufrufen der Startseite wird die 
// app.get('/' ...) abgearbeitet.


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

// app.post() wird abgearbeitet, wenn der 
// Button gedrückt wird.

app.post('/',(req, res, next) => {   

    // Der Wert aus dem Input mit dem 
    // name = 'idKunde' wird über die
    // Anfrage (req) an den Server gesendet und
    // zugewiesen an eine Konstante namens
    // idKunde.

    const idKunde = req.body.idKunde
    const kennwort = req.body.kennwort

    // Wenn der Wert von idKunde gleich dem Wert der
    // Eigenschaft IdKunde von kunde ist UND
    // wenn der Wert von kennwort gleich dem Wert der
    // Eigenschaft Kennwort von kunde ist, dann
    // werden die Anweisungen im Rumpf der 
    // if-Kontrollstruktur ausgeführt.

    if(idKunde == kunde.IdKunde && kennwort == kunde.Kennwort){
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
        //Von der Klasse wird ein Objelt namens Konto instanziiert.            
        let konto = new Konto
        // Nach der Deklaration un der Instanziierung kommt due Instialisierung.
        // Das heißt, dass konkrete Eigenschaftswerte dem Objekt zugewiesen werden.

        konto.Kontonummer = req.body.kontonummer
        konto.Kontoart = req.body.kontoart
        
        const bankleitzahl = "27000000"
        const laenderkennung = "DE"

        let errechneteIban = iban.fromBBAN(laenderkennung, bankleitzahl + " " + req.body.kontonummer)
        console.log(errechneteIban)

        dbVerbindung.query("INSERT INTO konto(iban, anfangssaldo, kontoart, timestamp)VALOUS ('DE7890', 2000, 'Sparkonto', NOW()); VALUES (123)")
        // Einfügen von Kontonummer in die Tabelle konnte (SQL)


        console.log("Kunde ist angemeldet als " + idKunde)
        res.render('kontoAnlegen.ejs', {                              
           meldung : "Das Konto mit der IBAN " + errechneteIban + " wurde erfolgreich angelegt." 
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
        
        // ... dann wird kontoAnlegen.ejs gerendert.
        
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
        console.log("Kunde ist angemeldet als " + idKunde)
        
        kunde.Nachname = req.body.nachname
        kunde.Kennwort = req.body.kennwort
        kunde.Telefonnummer = req.body.telefonnummer
        kunde.Mail = req.body.mail
        kunde.Nachname = "Hülsken"
        
        res.render('profilBearbeiten.ejs', {                              
            meldung : "Die Stammdaten wurden geändert."
        })
    }else{
        // Die login.ejs wird gerendert 
        // und als Response
        // an den Browser übergeben.
        res.render('login.ejs', {                    
        })    
    }
})

app.get('/ueberweisen',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){
        console.log("Kunde ist angemeldet als " + idKunde)
        
        // ... dann wird kontoAnlegen.ejs gerendert.
        
        res.render('ueberweisen.ejs', {    
            meldung : ""                          
        })
    }else{
        res.render('login.ejs', {                    
        })    
    }
})
app.post('/ueberweisen',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){
        console.log("Kunde ist angemeldet als " + idKunde)
        
        let zielkontonummer = req.body.zielkontonummer
        let betrag = req.body.betrag
        // Das Zielkonto und der Betrag wird aus dem Formular entgegengenommen
 
        // TO-Do: Saldo um den Betrag reduzieren
        // TO-Do: Betrag beim Zielkontogutschreiben

        // Umsetzung mit einer gemeinsamen relationalen Datenbank
        res.render('ueberweisen.ejs', {                              
            meldung : "Die Überweisung wurde erfolgreich ausgeführt."
        })
    }else{
        // Die login.ejs wird gerendert 
        // und als Response
        // an den Browser übergeben.
        res.render('login.ejs', {                    
        })    
    }
})
