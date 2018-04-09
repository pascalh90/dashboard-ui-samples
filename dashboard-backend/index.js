const http = require('http')
const app = require('express')()
const knex = require('knex')({
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: "./assignment.sqlite"
  }
})
const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello world! Try the /app route for a list of appIDs.')
})

app.get('/app', (req, res) => {
  knex('assignment').select('appID').groupBy('appID')
    .then(values => res.json(values))
    .catch(err => res.status(500).send(err))
})

app.get('/app/:appID', (req, res) => {
  knex('assignment').select().where({appID: req.params.appID})
    .then(values => res.json(values))
    .catch(err => res.status(500).send(err))
})

app.get('/app/:appID/mediaTypeDistribution', (req, res) => {
	knex.raw('select mediaType, count(mediaType) as mediaTypeCount from assignment where appID = ? group by mediaType', req.params.appID)
	  .then(values => res.json(values))
	  .catch(err => res.status(500).send(err))
})

app.get('/app/:appID/:field', (req, res) => {
  knex('assignment').select('id',req.params.field).where({appID: req.params.appID})
    .then(values => res.json(values))
    .catch(err => res.status(500).send(err))
})

app.get('/fields', (req, res) => {
  knex('assignment').columnInfo()
    .then(fields => res.json(Object.keys(fields)))
    .catch(err => res.status(500).send(err))
})

app.get('/all/averageRateSendingRate', (req, res) => {
	knex.raw('select appID, avg(meanSendingRateKbps) as averageRate from assignment group by appID')
	  .then(values => res.json(values))
	  .catch(err => res.status(500).send(err))
})


app.get('/build/:buildName/:buildVersion/:field', (req, res) => {
  knex('assignment').select('id',req.params.field).where({buildName: req.params.buildName, buildVer: req.params.buildVersion})
    .then(values => res.json(values))
    .catch(err => res.status(500).send(err))
})

console.log('App listening on http://localhost:8081')
app.listen(8081)
