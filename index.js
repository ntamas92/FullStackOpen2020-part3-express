require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const PhonebookEntry = require("./models/phonebookEntry");

const app = express();

app.use(express.static("build"));
app.use(express.json());
app.use(cors());

app.use(
    morgan(function (tokens, req, res) {
      return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, "content-length"),
        "-",
        tokens["response-time"](req, res),
        "ms",
        "req:",
        JSON.stringify(req.body)
      ].join(" ");
    })
  );

app.get("/api/persons", (req, res, next) => {
  PhonebookEntry.find({})
    .then((result) => res.json(result))
    .catch((error) => next(error));
});

app.get("/api/persons/:id", (req, res, next) => {
  PhonebookEntry.findById(req.params.id)
    .then((result) => res.json(result))
    .catch((error) => next(error));
});

app.delete("/api/persons/:id", (req, res, next) => {
  console.log(req.params.id);
  PhonebookEntry.findByIdAndRemove(req.params.id)
    .then((x) => {
      console.log(x);
      res.status(204).end();
    })
    .catch((error) => next(error));
});

app.post("/api/persons", (req, res, next) => {
  const body = req.body;

  if (!body.name || !body.number) {
    return res.status(400).json({ error: "Name or number is missing." });
  }

  //TODO: Implement here the check for duplicate names
  //   if (almafaToDelete.find((x) => x.name === body.name) !== undefined) {
  //     return res.status(400).json({ error: "An entry is already stored for this name in the phonebook." });
  //   }

  const newEntry = new PhonebookEntry({
    name: body.name,
    number: body.number,
  });

  newEntry
    .save()
    .then((savedEntry) => res.json(savedEntry))
    .catch((error) => next(error));
});

app.put("/api/persons/:id", (req, res, next) => {
  const body = req.body;

  const updatedEntry = {
    number: body.number,
  };

  PhonebookEntry.findByIdAndUpdate(req.params.id, updatedEntry, { new: true })
    .then((updatedNote) => res.json(updatedNote))
    .catch((error) => next(error));
});

app.get("/api/info", (req, res) => {
  PhonebookEntry.find({}).then((entries) => {
    res.send(`<p>Phonebook has info for ${entries.length} people.</p><p>${new Date()}}</p>`);
  });
});

const errorHandler = (error, req, res, next) => {
    console.error(error.message);

    if (error.name === "CastError") {
      return res.status(400).send({ error: "malformed id" });
    }
    else if(error.name === 'ValidationError'){
      return res.status(400).json({error: error.message})
    }
  
    next(error);
};

app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
