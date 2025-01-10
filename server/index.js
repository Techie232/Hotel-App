const express = require('express');
const app = express();
const { dbConnect } = require('./config/databaseConnection');
const hotelRoutes = require("./routes/hotel");
const { cloudinaryConnection } = require("./config/cloudinary");
const fileUpload = require('express-fileupload');
const cors = require('cors');
const PORT = 4000

app.use(express.json());
app.use(fileUpload({
   useTempFiles : true,
   tempFileDir : '/tmp/'
}));
app.use(cors()); 

app.use('/api/v1', hotelRoutes);

dbConnect();
cloudinaryConnection();


app.get('/', (req, res) => {
   return res.json({
      success: true,
      message: 'Your Server is UP and RUNNING',
   })
})

app.listen(PORT, () => {
   console.log(`Your app is running on ${PORT}`)
})