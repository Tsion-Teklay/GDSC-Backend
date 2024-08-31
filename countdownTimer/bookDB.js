const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost:27017/libraryDB');

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
  });
  mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error:', err);
  });
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose is disconnected');
  });

  const bookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    yearPublished: {type: Number, required: true},
    genres: {type: Array},
    availableCopies: {type: Number, default: 5}
  });

  const book = mongoose.model('book', bookSchema);


  const book1 = new book({
    title: "abs",
    author: "tsi",
    yearPublished:2020,
    genres:["ab","cd"],
    availableCopies:4
  });

  book1.save()
  .then(book=>console.log(book))
  .catch(err=>console.log(err));


// bookSchema.methods.addBook = function(){
//     const newBook = this.save();
//     return newBook;
// }


function updateCopies(name){
    book.findOneAndUpdate({title})
}



