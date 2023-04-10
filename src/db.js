// Require the mongose library
const mongoose = require('mongoose');

module.exports = {
  connect: DB_HOST => {
    // Use the Mongo driver's updated URL string parser
    mongoose.set('useNewUrlParser', true);
    // Use `findOneAndUpdate()` in place of findAndModify()
    mongoose.set('useFindAndModify', false);
    // Use `createIndex()` in place of `ensureIndex()`
    mongoose.set('useCreateIndex', true);
    // Use the new server discovery & monitoring engine
    mongoose.set('useUnifiedTopology', true);

    mongoose.connect('mongodb+srv://gexo777:I52I6KX79siMdGh6@cluster0.mwpbjzh.mongodb.net/?retryWrites=true&w=majority',
        { useNewUrlParser: true })
        .then(() => console.log("Mongodb connected"))
        .catch(err => console.log(err));


    // Connect to the DB
    mongoose.connect(DB_HOST);
    // Log an error if we fail to connect
    mongoose.connection.on('error', err => {
      console.error(err);
      console.log(err);
      console.log(
          'MongoDB connection error. Please make sure MongoDB is running.'
      );
      process.exit();
    });
  },

  close: () => {
    mongoose.connection.close();
  }
};
