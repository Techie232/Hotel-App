const Hotel = require('../models/Hotel');
const { uploadImage } = require('../utils/imageUploader');

exports.createHotel = async (req, res) => {
   try {

      const { name, price, country, location } = req.body;
      const imageFile = req.files.image;

      if (!name || !price || !country || !location || !imageFile) {
         return res.status(400).json({
            success: false,
            message: "All fields are mandatory",
         })
      }

      const uploadedImage = await uploadImage(imageFile, "Codehelp");

      const hotelInstance = await Hotel.create({
         name,
         price,
         country,
         location,
         image: uploadedImage?.secure_url
      })

      return res.status(200).json({
         success: true,
         message: 'Hotel Created Successfully',
      })

   } catch (error) {
      return res.status(500).json({
         success: false,
         message: 'Could not create Hotel data',
         error: error.message,
      })
   }
}

exports.fetchAllHotels = async (req, res) => {
   try {

      const allHotels = await Hotel.find({});

      return res.status(200).json({
         success: true,
         message: 'Fetched All Hotel data',
         data: allHotels,
      })

   } catch (error) {
      return res.status(500).json({
         success: false,
         message: 'Could not fetch Hotel data',
         error: error.message,
      })
   }
}