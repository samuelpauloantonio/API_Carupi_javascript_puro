const mongoose = require('mongoose')
mongoose.connect(`mongodb://${process.env.DB_MONGO_URL}:${process.env.DB_PORT}/${process.env.DATABASE}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  keepAlive: true,
  useCreateIndex: true,
  useFindAndModify: false
})
