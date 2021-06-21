// require dependencies
const { Feel } = require('../models');

const feelData = [
    {
      blogger_id: 9,
      blog_id: 19
    },
    {
      blogger_id: 1,
      blog_id: 8
    },
    {
      blogger_id: 8,
      blog_id: 12
    },
    {
      blogger_id: 8,
      blog_id: 19
    },
    {
      blogger_id: 9,
      blog_id: 3
    },
    {
      blogger_id: 3,
      blog_id: 16
    },
    {
      blogger_id: 4,
      blog_id: 7
    },
    {
      blogger_id: 10,
      blog_id: 7
    },
    {
      blogger_id: 3,
      blog_id: 18
    },
    {
      blogger_id: 9,
      blog_id: 16
    },
    {
      blogger_id: 3,
      blog_id: 17
    },
    {
      blogger_id: 10,
      blog_id: 2
    },
    {
      blogger_id: 6,
      blog_id: 10
    },
    {
      blogger_id: 5,
      blog_id: 11
    },
    {
      blogger_id: 6,
      blog_id: 1
    },
    {
      blogger_id: 9,
      blog_id: 18
    },
    {
      blogger_id: 6,
      blog_id: 15
    },
    {
      blogger_id: 6,
      blog_id: 7
    },
    {
      blogger_id: 6,
      blog_id: 4
    },
    {
      blogger_id: 1,
      blog_id: 16
    },
    {
      blogger_id: 10,
      blog_id: 18
    },
    {
      blogger_id: 4,
      blog_id: 10
    },
    {
      blogger_id: 10,
      blog_id: 5
    },
    {
      blogger_id: 5,
      blog_id: 16
    },
    {
      blogger_id: 6,
      blog_id: 17
    },
    {
      blogger_id: 1,
      blog_id: 15
    },
    {
      blogger_id: 7,
      blog_id: 13
    },
    {
      blogger_id: 6,
      blog_id: 3
    },
    {
      blogger_id: 6,
      blog_id: 13
    },
    {
      blogger_id: 7,
      blog_id: 1
    },
    {
      blogger_id: 4,
      blog_id: 15
    },
    {
      blogger_id: 2,
      blog_id: 18
    },
    {
      blogger_id: 9,
      blog_id: 10
    },
    {
      blogger_id: 10,
      blog_id: 15
    },
    {
      blogger_id: 8,
      blog_id: 1
    },
    {
      blogger_id: 10,
      blog_id: 8
    },
    {
      blogger_id: 2,
      blog_id: 13
    },
    {
      blogger_id: 9,
      blog_id: 20
    },
    {
      blogger_id: 1,
      blog_id: 17
    },
    {
      blogger_id: 10,
      blog_id: 9
    },
    {
      blogger_id: 10,
      blog_id: 3
    },
    {
      blogger_id: 5,
      blog_id: 6
    },
    {
      blogger_id: 6,
      blog_id: 12
    },
    {
      blogger_id: 5,
      blog_id: 2
    },
    {
      blogger_id: 6,
      blog_id: 14
    },
    {
      blogger_id: 8,
      blog_id: 18
    },
    {
      blogger_id: 3,
      blog_id: 4
    }
  ];
  
  const seedFeels = () => Feel.bulkCreate(feelData);
  
  module.exports = seedFeels;  