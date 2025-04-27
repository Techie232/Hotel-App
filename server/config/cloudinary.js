const cloudinary = require('cloudinary').v2;

exports.cloudinaryConnection = () => {
   try {
      cloudinary.config({
         cloud_name: "your_name",
         api_key: "your",
         api_secret: "your",
      })
   } catch (error) {
      console.log('Something went wrong in Cloudinary Connection', error)
   }
}