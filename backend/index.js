let express = require('express'),
path = require('path'),
mongoose = require('mongoose'),
cors = require('cors'),
bodyParser = require('body-parser'),
dbConfig = require('./database/db')

//connecting with mongo db
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true
}).then(() => {
    console.log('Database is successfully connected')
},
    error => {
        console.log('Database could not be connected' + error)
    }
)

// Setting up port with express js
const doctorRoute = require('./route/doctor.route')
const patientRoute = require('./route/patient.route')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: false
}));

app.use(cors());
app.use('/api/doctor', doctorRoute)
app.use('/api/patient', patientRoute)

//create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('connected to port' + port)
})