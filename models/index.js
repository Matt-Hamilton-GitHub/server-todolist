const mongoose = require('mongoose');
const { env } = require('process');


const password = 'Test1234'

const mongooseUrl = 'mongodb+srv://admin-matt:'+password+'@to-do-list.lulkb.mongodb.net/db-Todo'
mongoose.set('debug',true)

mongoose.connect(mongooseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.Promise = Promise;

module.exports.Todo = require('./todo')