// require dependencies
const { Feel } = require('../models');

const feelData = [
    {
      id: 'F-tester1-l',
      blogger_id: 'T-tester9-B',
      blog_id: 'Bl-tester19-og'
    },
    {
      id: 'F-tester2-l',
      blogger_id: 'T-tester1-B',
      blog_id: 'Bl-tester8-og'
    },
    {
      id: 'F-tester3-l',
      blogger_id: 'T-tester8-B',
      blog_id: 'Bl-tester12-og'
    },
    {
      id: 'F-tester4-l',
      blogger_id: 'T-tester8-B',
      blog_id: 'Bl-tester19-og'
    },
    {
      id: 'F-tester5-l',
      blogger_id: 'T-tester9-B',
      blog_id: 'Bl-tester3-og'
    },
    {
      id: 'F-tester6-l',
      blogger_id: 'T-tester3-B',
      blog_id: 'Bl-tester16-og'
    },
    {
      id: 'F-tester7-l',
      blogger_id: 'T-tester4-B',
      blog_id: 'Bl-tester7-og'
    },
    {
      id: 'F-tester8-l',
      blogger_id: 'T-tester10-B',
      blog_id: 'Bl-tester7-og'
    },
    {
      id: 'F-tester9-l',
      blogger_id: 'T-tester3-B',
      blog_id: 'Bl-tester18-og'
    },
    {
      id: 'F-tester10-l',
      blogger_id: 'T-tester9-B',
      blog_id: 'Bl-tester16-og'
    },
    {
      id: 'F-tester11-l',
      blogger_id: 'T-tester3-B',
      blog_id: 'Bl-tester17-og'
    },
    {
      id: 'F-tester12-l',
      blogger_id: 'T-tester10-B',
      blog_id: 'Bl-tester2-og'
    },
    {
      id: 'F-tester13-l',
      blogger_id: 'T-tester6-B',
      blog_id: 'Bl-tester10-og'
    },
    {
      id: 'F-tester14-l',
      blogger_id: 'T-tester5-B',
      blog_id: 'Bl-tester11-og'
    },
    {
      id: 'F-tester15-l',
      blogger_id: 'T-tester6-B',
      blog_id: 'Bl-tester1-og'
    },
    {
      id: 'F-tester16-l',
      blogger_id: 'T-tester9-B',
      blog_id: 'Bl-tester18-og'
    },
    {
      id: 'F-tester17-l',
      blogger_id: 'T-tester6-B',
      blog_id: 'Bl-tester15-og'
    },
    {
      id: 'F-tester18-l',
      blogger_id: 'T-tester6-B',
      blog_id: 'Bl-tester7-og'
    },
    {
      id: 'F-tester19-l',
      blogger_id: 'T-tester6-B',
      blog_id: 'Bl-tester4-og'
    },
    {
      id: 'F-tester20-l',
      blogger_id: 'T-tester1-B',
      blog_id: 'Bl-tester16-og'
    },
    {
      id: 'F-tester21-l',
      blogger_id: 'T-tester10-B',
      blog_id: 'Bl-tester18-og'
    },
    {
      id: 'F-tester22-l',
      blogger_id: 'T-tester4-B',
      blog_id: 'Bl-tester10-og'
    },
    {
      id: 'F-tester23-l',
      blogger_id: 'T-tester10-B',
      blog_id: 'Bl-tester5-og'
    },
    {
      id: 'F-tester24-l',
      blogger_id: 'T-tester5-B',
      blog_id: 'Bl-tester16-og'
    },
    {
      id: 'F-tester25-l',
      blogger_id: 'T-tester6-B',
      blog_id: 'Bl-tester17-og'
    },
    {
      id: 'F-tester26-l',
      blogger_id: 'T-tester1-B',
      blog_id: 'Bl-tester15-og'
    },
    {
      id: 'F-tester27-l',
      blogger_id: 'T-tester7-B',
      blog_id: 'Bl-tester13-og'
    },
    {
      id: 'F-tester28-l',
      blogger_id: 'T-tester6-B',
      blog_id: 'Bl-tester3-og'
    },
    {
      id: 'F-tester29-l',
      blogger_id: 'T-tester6-B',
      blog_id: 'Bl-tester13-og'
    },
    {
      id: 'F-tester30-l',
      blogger_id: 'T-tester7-B',
      blog_id: 'Bl-tester1-og'
    },
    {
      id: 'F-tester31-l',
      blogger_id: 'T-tester4-B',
      blog_id: 'Bl-tester15-og'
    },
    {
      id: 'F-tester32-l',
      blogger_id: 'T-tester2-B',
      blog_id: 'Bl-tester18-og'
    },
    {
      id: 'F-tester33-l',
      blogger_id: 'T-tester9-B',
      blog_id: 'Bl-tester10-og'
    },
    {
      id: 'F-tester34-l',
      blogger_id: 'T-tester10-B',
      blog_id: 'Bl-tester15-og'
    },
    {
      id: 'F-tester35-l',
      blogger_id: 'T-tester8-B',
      blog_id: 'Bl-tester1-og'
    },
    {
      id: 'F-tester36-l',
      blogger_id: 'T-tester10-B',
      blog_id: 'Bl-tester8-og'
    },
    {
      id: 'F-tester37-l',
      blogger_id: 'T-tester2-B',
      blog_id: 'Bl-tester13-og'
    },
    {
      id: 'F-tester38-l',
      blogger_id: 'T-tester9-B',
      blog_id: 'Bl-tester20-og'
    },
    {
      id: 'F-tester39-l',
      blogger_id: 'T-tester1-B',
      blog_id: 'Bl-tester17-og'
    },
    {
      id: 'F-tester40-l',
      blogger_id: 'T-tester10-B',
      blog_id: 'Bl-tester9-og'
    },
    {
      id: 'F-tester41-l',
      blogger_id: 'T-tester10-B',
      blog_id: 'Bl-tester3-og'
    },
    {
      id: 'F-tester42-l',
      blogger_id: 'T-tester5-B',
      blog_id: 'Bl-tester6-og'
    },
    {
      id: 'F-tester43-l',
      blogger_id: 'T-tester6-B',
      blog_id: 'Bl-tester12-og'
    },
    {
      id: 'F-tester44-l',
      blogger_id: 'T-tester5-B',
      blog_id: 'Bl-tester2-og'
    },
    {
      id: 'F-tester45-l',
      blogger_id: 'T-tester6-B',
      blog_id: 'Bl-tester14-og'
    },
    {
      id: 'F-tester46-l',
      blogger_id: 'T-tester8-B',
      blog_id: 'Bl-tester18-og'
    },
    {
      id: 'F-tester47-l',
      blogger_id: 'T-tester3-B',
      blog_id: 'Bl-tester4-og'
    }
  ];
  
  const seedFeels = () => Feel.bulkCreate(feelData);
  
  module.exports = seedFeels;  