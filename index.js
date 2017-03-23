var express = require('express')
var app = express()

app.use(express.static('public'))

app.get('/todos', function(req, res) {
	console.log('GET: todos called...')
	res.send([  { id: 1, title: 'finish accounting', completed: false }, 
				{ id: 2, title: 'load test', completed: true } ])
})

app.put('/todos', function(req, res) {
	console.log('PUT: todos called...')
	res.render('index.html')
})

app.post('/todos', function(req, res) {
	console.log('POST: todos called...')
	res.render('index.html')
})

app.listen(4000, function () {
  console.log('Example app listening on port 4000!')
})

