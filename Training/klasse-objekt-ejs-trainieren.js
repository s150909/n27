class Auto {
    constructor() {
      this.Raeder
      this.Sitze
    }
  }

  class Schueler {
      constructor(){
          this.vorname
          this.nachname
          this.schuelerId

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

// Wenn localhost:3000/klasse-objekt-ejs-trainieren aufgerufen wird ...

app.get('/klasse-objekt-ejs-trainieren',(req, res, next) => {   

    // ... wird klasse-objekt-ejs-trainieren.ejs gerendert:

    res.render('klasse-objekt-ejs-trainieren', {                                      
    })
})
