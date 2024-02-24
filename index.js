require('dotenv').config();
const express = require('express')
var morgan = require('morgan')
var cors = require('cors')
const app = express()
const Person = require('./models/person')
const errorHandler = require('./middleware/errorHandler.js')

morgan.token('body', function getId (req) {
  return (req.body) ? JSON.stringify(req.body) : '';
})

app.use(express.static('build'));
app.use(cors());
app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))



app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})


app.get('/info', (request, response) => {
let count = 0;
  Person.find({}).then(res => {
    count = res.length;
    response.send(`<p>Phonebook has info for ${count} people</p> <p>${new Date()}</p>`)
})
})

app.get('/api/persons/:id', (request, response, next) => {

  Person.findById(request.params.id).then(person => {
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  }).catch(error => next(error))
  
})

app.get('/api/persons', (request, response) => {


  Person.find({}).then(res => {
    response.json(res)
})


})

app.delete('/api/persons/:id', (request, response, next) => {

  Person.findByIdAndDelete(request.params.id)
  .then(result => {
    response.status(204).end()
  })
  .catch(error => next(error))

})


const checkForUsedName = (name) => {
  const index = persons.findIndex(x => x.name === name);

  return (index === -1) ? false : true;
}

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const person = {
    number: body.number,
    name: body.name,
  }

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})

app.post('/api/persons', (request, response) => {
 const body = request.body

if (!body.name) {

  if (!body.number) {
    return response.status(400).json({ 
      error: 'name and number missing' 
    })
  }

  return response.status(400).json({ 
    error: 'name missing' 
  })
}

if (!body.number) {
  return response.status(400).json({ 
    error: 'number missing' 
  })
}

// if (checkForUsedName(body.name)){
//   return response.status(400).json({ 
//     error: 'Name already in use' 
//   })
// }

const person = new Person({
  name: body.name,
  number: body.number,
});

person.save().then(result => {
  console.log(result);
  console.log(`Added ${body.name} number ${body.number} to the phonebook`);
  response.json(result)
})


})
app.use(errorHandler);
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})