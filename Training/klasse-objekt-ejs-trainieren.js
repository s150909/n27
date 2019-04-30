class Auto {
    constructor() {
      this.Raeder
      this.Sitze
    }
  }

  
  class Fussballer {
      constructer(){
          this.nummer
          this.position
      }
  }

  class Gericht {
      constructer(){
          this.Preis
      }
  }
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.set('views', 'Training')

const server = app.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})
// Eine Klasse ist ein Bauplan.
// ein Objekt ist die konkrete umsetzung auf der Grundlage des Bauplans
// Alle Objekte eines Bauplanes haben die selben eigenschaften, aber
// möglicherweise unterschiedliche Eigenschaftswerte.

//Klassendefinition
//========================
class Rechteck{
    constructor(){
        this.laenge
        this.breite
    }
}
class Schueler{
    constructor(){
        this.geschlecht
        this.vorname
        this.alter

    }
}

class Spieler{
    constructor(){
        this.name
        this.verein
        this.position
        this.Trikotnummer
    }
}

//Deklaration eines Rechteck-Objekt vom Typ Rechteck
// Deklaration= Bekanntmachung, dass es ein Objekt vom Typ Rechteck geben soll.
// Klasse wird großgeschrieben , Objekt nicht

//let rechteck = ...

//instanziierung erkennt man am reservierten Wort "new".
//Instanziierung reserviert Speicherzellen für das soeben deklarierte Objekt.

//...= new Rechteck()

//Initialisierung belegt die reservierte Speicherzelle mit konkreten Eigenschaftswerten.

//rechteck.breite = 3

let rechteck = new Rechteck()
rechteck.breite = 3
rechteck.laenge = 2

console.log("Breite: " + rechteck.breite)
console.log("Länge: " +rechteck.laenge)
console.log(rechteck)

let schueler = new Schueler()
schueler.geschlecht = "w"
schueler.vorname = "Petra"
schueler.alter = 16 

let spieler = new Spieler()
spieler.name = "Thomas Müller"
spieler.verein = "FC Bayern München"
spieler.position = "Stürmer"
spieler.trikotnummer = 25

class Restaurant {
    constructor(){

    }
}







// Wenn localhost:3000/klasse-objekt-ejs-trainieren aufgerufen wird ...

app.get('/klasse-objekt-ejs-trainieren',(req, res, next) => {   

    // ... wird klasse-objekt-ejs-trainieren.ejs gerendert:

    res.render('klasse-objekt-ejs-trainieren', {
        breite : rechteck.breite,
        laenge : rechteck.laenge,
        geschlecht : schueler.geschlecht,
        vorname : schueler.vorname,
        alter:  schueler.alter,
        name: spieler.name,
        verein: spieler.verein,
        position: spieler.position,
        trikotnummer:spieler.trikotnummer
        
})
})
