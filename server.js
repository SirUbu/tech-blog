// require dependencies
const express = require('express');
const sequelize = require('./config/connection');
const path = require('path');

// create express server
const app = express();
const PORT = process.env.PORT || 3001;

// set up/use session
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Ubu Walkie Talkie',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));


// set up Handlebars.js as app template engine
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


// add middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// use controllers
app.use(require('./controllers'));

// sync and listen for connection
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`APP NOW LISTENING ON PORT ${PORT}`));
});