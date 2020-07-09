const express = require("express");
const { response } = require("express");
const morgan = require("morgan")
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use(morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms',
      JSON.stringify(req.body)
    ].join(' ')
  }))

app.get('/api/persons', (req, res) => {
    res.json(phonebookEntries)
});

app.get('/api/persons/:id', (req, res) => {
    const entry = phonebookEntries.find(x => x.id == req.params.id);
    
    if(entry) {
        res.json(entry);
        return;
    }

    res.status(404).end();
})

app.delete('/api/persons/:id', (req, res) => {
    const entry = phonebookEntries.find(x => x.id == req.params.id);
    
    if(entry) {
        phonebookEntries = phonebookEntries.filter(x => x.id != entry.id);

        res.status(204).end();
        return;
    }

    res.status(404).end();
})

app.post('/api/persons', (req, res) => {
    const body = req.body;

    if(!body.name || !body.number){
        return res.status(400).json({ error: 'Name or number is missing.' });
    }

    if(phonebookEntries.find(x => x.name === body.name) !== undefined){
        return res.status(400).json({error: 'An entry is already stored for this name in the phonebook.'})
    }

    const newEntry = {
        id: generateUniqueId(),
        name: body.name,
        number: body.number,
    }

    phonebookEntries = phonebookEntries.concat(newEntry)

    res.json(newEntry)
})

app.get('/api/info', (req, res) => {
    res.send(`<p>Phonebook has info for ${phonebookEntries.length} people.</p><p>${new Date()}}</p>`);
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const generateUniqueId = () => {
    let newId

    do{
        newId = (Math.random() * 100000).toFixed(0);
    }while(phonebookEntries.find(x => x.id == newId) !== undefined)

    return newId;
}

let phonebookEntries = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3,
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4,
  },
];
