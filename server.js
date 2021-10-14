require('./models/db');

// const express = require('express');
// const path = require('path');
// const exphbs = require('express-handlebars');
// const bodyparser = require('body-parser');

const express = require('express')
const path = require('path')
const Handlebars = require('handlebars')
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const employeeController = require('./controllers/employeeController');

var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/', Handlebars: allowInsecurePrototypeAccess(Handlebars)}));
app.set('view engine', 'hbs');

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

app.use('/employee', employeeController);