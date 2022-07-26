const bodyParser = require('body-parser');
const express = require('express')
const path = require('path')
const app = express();
const port = 9999;
app.use('/', express.static(path.join(__dirname, 'static')))

const connectToMongoose = require('./config/db.config');
//db config
connectToMongoose()
// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(helmet());
// app.use(morgan("common"));

app.use('/api/register',require('./router/register.router'))
app.use('/api',require('./router/login.router'))
app.listen(port, () => {
    console.log(`server up at ${port}`,)
})