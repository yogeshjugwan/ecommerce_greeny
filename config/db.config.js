const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/complaint?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

const connectToMongoose = () => {
  const options = {
   // Don't build indexes
    // Maintain up to 10 socket connections
    // Keep trying to send operations for 5 seconds
    // Close sockets after 45 seconds of inactivity
    family: 4, // Use IPv4, skip trying IPv6
  };
  mongoose.connect(mongoURI, {family: 4},()=>{
    console.log('server in connected')
  })
}
module.exports = connectToMongoose;