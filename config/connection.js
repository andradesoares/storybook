const mongoose = require('mongoose');

mongoose.set('useUnifiedTopology', true)
mongoose.set('useNewUrlParser', true)

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useFindAndModify: false,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
    
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

module.exports = connectDB