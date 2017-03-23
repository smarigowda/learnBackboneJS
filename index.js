var express = require('express')
var app = express()

app.use(express.static('public'))

app.get('/todos', function(req, res) {
	console.log('todos called...')
	res.send([{ title: 'finish accounting', completed: false }, { title: 'load test', completed: true }])
})

app.listen(4000, function () {
  console.log('Example app listening on port 4000!')
})

