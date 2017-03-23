var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(express.static('public'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/todos', function(req, res) {
	console.log('GET: todos called...')
	res.send([  { id: 1, title: 'finish accounting', completed: false }, 
				{ id: 2, title: 'load test', completed: true } ])
})

app.put('/todos/:id', function(req, res) {
	debugger
	console.log('PUT: todos called...')
	res.send('PUT: todos called...')
})

app.post('/todos/', function(req, res) {
	debugger
	console.log('POST: todos called...')
	res.send('POST: todos called...')
})

app.listen(4000, function () {
  console.log('Example app listening on port 4000!')
})

