const cloudinary = require('cloudinary').v2;

exports.cloudinaryConnection = () => {
   try {
      cloudinary.config({
         cloud_name: "dfd1cvajy",
         api_key: "732154562864739",
         api_secret: "40JSwduLjnxTJt-xWuA0v5ExbzQ",
      })
   } catch (error) {
      console.log('Something went wrong in Cloudinary Connection', error)
   }
}