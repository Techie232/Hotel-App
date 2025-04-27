const mongoose = require('mongoose');

exports.dbConnect = () => {
   mongoose.connect("...", {})
      .then(() => {
         console.log('Database Connected Successfully');
      })
      .catch((error) => {
         console.log('Db Connection Failed!');
         console.log(error);
         process.exit(1);
      })
}