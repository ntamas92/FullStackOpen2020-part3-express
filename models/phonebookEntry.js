const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const url = process.env.MONGODB_URI;
console.log("connecting to", url);

var mongooseConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

mongoose
  .connect(url, mongooseConnectOptions)
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

const phonebookEntrySchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, unique: true },
  number: { type: String, required: true, minlength: 8 },
});
phonebookEntrySchema.plugin(uniqueValidator);

phonebookEntrySchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = new mongoose.model("PhonebookEntry", phonebookEntrySchema);
