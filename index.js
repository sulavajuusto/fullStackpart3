const express = require('express')
var morgan = require('morgan')
const app = express()

morgan.token('body', function getId (req) {
  return (req.body) ? JSON.stringify(req.body) : '';
})

app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
let persons = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})


app.get('/info', (request, response) => {
  response.send(`<p>Phonebook has info for ${persons.length} people</p> <p>${new Date()}</p>`)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

const generateId =  () => {
  return Math.floor(Math.random() * 43534);
}

const checkForUsedName = (name) => {
  const index = persons.findIndex(x => x.name === name);

  return (index === -1) ? false : true;
}

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

if (checkForUsedName(body.name)){
  return response.status(400).json({ 
    error: 'Name already in use' 
  })
}

const person = {
  name: body.name,
  number: body.number,
  id: generateId(),
}


persons = persons.concat(person)
console.log('New Person created', person)

response.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})