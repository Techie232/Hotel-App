const mongoose = require('mongoose');

exports.dbConnect = () => {
   mongoose.connect("mongodb+srv://someonn4:8eCKE8FrXTwS2qoI@cluster0.o41uwwq.mongodb.net/hotel", {})
      .then(() => {
         console.log('Database Connected Successfully');
      })
      .catch((error) => {
         console.log('Db Connection Failed!');
         console.log(error);
         process.exit(1);
      })
}