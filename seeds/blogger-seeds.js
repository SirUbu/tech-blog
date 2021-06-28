// require dependencies
const { Blogger } = require('../models');

// array of blogger data objects for seeding
const bloggerData = [
    {
        id: 'T-tester1-B',
        username: 'alesmonde0',
        email: 'nwestnedge0@cbc.ca',
        password: 'password123'
    },
    {
        id: 'T-tester2-B',
        username: 'jwilloughway1',
        email: 'rmebes1@sogou.com',
        password: 'password123'
    },
    {
        id: 'T-tester3-B',
        username: 'iboddam2',
        email: 'cstoneman2@last.fm',
        password: 'password123'
    },
    {
        id: 'T-tester4-B',
        username: 'dstanmer3',
        email: 'ihellier3@goo.ne.jp',
        password: 'password123'
    },
    {
        id: 'T-tester5-B',
        username: 'djiri4',
        email: 'gmidgley4@weather.com',
        password: 'password123'
    },
    {
        id: 'T-tester6-B',
        username: 'msprague5',
        email: 'larnout5@imdb.com',
        password: 'password123'
    },
    {
        id: 'T-tester7-B',
        username: 'mpergens6',
        email: 'hnapleton6@feedburner.com',
        password: 'password123'
    },
    {
        id: 'T-tester8-B',
        username: 'tpenniell7',
        email: 'kperigo7@china.com.cn',
        password: 'password123'
    },
    {
        id: 'T-tester9-B',
        username: 'msabbins8',
        email: 'lmongain8@google.ru',
        password: 'password123'
    },
    {
        id: 'T-tester10-B',
        username: 'jmacarthur9',
        email: 'bsteen9@epa.gov',
        password: 'password123'
    }
];

// create function to take bloggerData and bulkCreate through the Blogger model
const seedBloggers = () => Blogger.bulkCreate(bloggerData, {individualHooks: true});

//export seeding function 
module.exports = seedBloggers;