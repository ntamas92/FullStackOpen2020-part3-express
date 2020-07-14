require('dotenv').config();
const mongoose = require("mongoose");
const PhonebookEntry = require('./models/phonebookEntry')

const listPhonebookEntries = () => {
  PhonebookEntry.find({}).then((result) => {
    result.forEach((entry) => {
      console.log(entry.name, entry.number);
      mongoose.connection.close();
    });
  });
};

listPhonebookEntries()