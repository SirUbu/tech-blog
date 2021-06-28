// require dependencies
const { Comment } = require('../models');

const commentData = [
    {
      id: 'C-tester1-T',
      comment_text: 'Nunc rhoncus dui vel sem.',
      blogger_id: 'T-tester6-B',
      blog_id: 'Bl-tester1-og'
    },
    {
      id: 'C-tester2-T',
      comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
      blogger_id: 'T-tester6-B',
      blog_id: 'Bl-tester8-og'
    },
    {
      id: 'C-tester3-T',
      comment_text: 'Aliquam erat volutpat. In congue.',
      blogger_id: 'T-tester3-B',
      blog_id: 'Bl-tester10-og'
    },
    {
      id: 'C-tester4-T',
      comment_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
      blogger_id: 'T-tester3-B',
      blog_id: 'Bl-tester18-og'
    },
    {
      id: 'C-tester5-T',
      comment_text: 'In hac habitasse platea dictumst.',
      blogger_id: 'T-tester7-B',
      blog_id: 'Bl-tester5-og'
    },
    {
      id: 'C-tester6-T',
      comment_text: 'Vivamus vestibulum sagittis sapien.',
      blogger_id: 'T-tester1-B',
      blog_id: 'Bl-tester20-og'
    },
    {
      id: 'C-tester7-T',
      comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
      blogger_id: 'T-tester6-B',
      blog_id: 'Bl-tester7-og'
    },
    {
      id: 'C-tester8-T',
      comment_text: 'Sed vel enim sit amet nunc viverra dapibus.',
      blogger_id: 'T-tester7-B',
      blog_id: 'Bl-tester4-og'
    },
    {
      id: 'C-tester9-T',
      comment_text: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
      blogger_id: 'T-tester6-B',
      blog_id: 'Bl-tester12-og'
    },
    {
      id: 'C-tester10-T',
      comment_text: 'Morbi a ipsum.',
      blogger_id: 'T-tester6-B',
      blog_id: 'Bl-tester20-og'
    },
    {
      id: 'C-tester11-T',
      comment_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
      blogger_id: 'T-tester3-B',
      blog_id: 'Bl-tester14-og'
    },
    {
      id: 'C-tester12-T',
      comment_text: 'Donec ut mauris eget massa tempor convallis.',
      blogger_id: 'T-tester5-B',
      blog_id: 'Bl-tester4-og'
    },
    {
      id: 'C-tester13-T',
      comment_text: 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
      blogger_id: 'T-tester4-B',
      blog_id: 'Bl-tester9-og'
    },
    {
      id: 'C-tester14-T',
      comment_text: 'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
      blogger_id: 'T-tester5-B',
      blog_id: 'Bl-tester14-og'
    },
    {
      id: 'C-tester15-T',
      comment_text: 'Quisque porta volutpat erat.',
      blogger_id: 'T-tester6-B',
      blog_id: 'Bl-tester2-og'
    },
    {
      id: 'C-tester16-T',
      comment_text: 'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
      blogger_id: 'T-tester8-B',
      blog_id: 'Bl-tester2-og'
    },
    {
      id: 'C-tester17-T',
      comment_text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
      blogger_id: 'T-tester2-B',
      blog_id: 'Bl-tester20-og'
    },
    {
      id: 'C-tester18-T',
      comment_text: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
      blogger_id: 'T-tester4-B',
      blog_id: 'Bl-tester11-og'
    },
    {
      id: 'C-tester19-T',
      comment_text: 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
      blogger_id: 'T-tester5-B',
      blog_id: 'Bl-tester13-og'
    },
    {
      id: 'C-tester20-T',
      comment_text: 'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
      blogger_id: 'T-tester9-B',
      blog_id: 'Bl-tester16-og'
    },
    {
      id: 'C-tester21-T',
      comment_text: 'Curabitur convallis.',
      blogger_id: 'T-tester6-B',
      blog_id: 'Bl-tester4-og'
    },
    {
      id: 'C-tester22-T',
      comment_text: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      blogger_id: 'T-tester4-B',
      blog_id: 'Bl-tester10-og'
    },
    {
      id: 'C-tester23-T',
      comment_text: 'Morbi non quam nec dui luctus rutrum.',
      blogger_id: 'T-tester3-B',
      blog_id: 'Bl-tester8-og'
    },
    {
      id: 'C-tester24-T',
      comment_text: 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
      blogger_id: 'T-tester8-B',
      blog_id: 'Bl-tester10-og'
    },
    {
      id: 'C-tester25-T',
      comment_text: 'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
      blogger_id: 'T-tester1-B',
      blog_id: 'Bl-tester15-og'
    },
    {
      id: 'C-tester26-T',
      comment_text: 'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
      blogger_id: 'T-tester5-B',
      blog_id: 'Bl-tester3-og'
    },
    {
      id: 'C-tester27-T',
      comment_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      blogger_id: 'T-tester1-B',
      blog_id: 'Bl-tester15-og'
    },
    {
      id: 'C-tester28-T',
      comment_text: 'Nam tristique tortor eu pede.',
      blogger_id: 'T-tester4-B',
      blog_id: 'Bl-tester16-og'
    },
    {
      id: 'C-tester29-T',
      comment_text: 'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
      blogger_id: 'T-tester4-B',
      blog_id: 'Bl-tester18-og'
    },
    {
      id: 'C-tester30-T',
      comment_text: 'Proin eu mi. Nulla ac enim.',
      blogger_id: 'T-tester4-B',
      blog_id: 'Bl-tester10-og'
    },
    {
      id: 'C-tester31-T',
      comment_text: 'Sed ante. Vivamus tortor.',
      blogger_id: 'T-tester7-B',
      blog_id: 'Bl-tester5-og'
    },
    {
      id: 'C-tester32-T',
      comment_text: 'Aliquam quis turpis eget elit sodales scelerisque.',
      blogger_id: 'T-tester10-B',
      blog_id: 'Bl-tester1-og'
    },
    {
      id: 'C-tester33-T',
      comment_text: 'Donec quis orci eget orci vehicula condimentum.',
      blogger_id: 'T-tester3-B',
      blog_id: 'Bl-tester19-og'
    },
    {
      id: 'C-tester34-T',
      comment_text: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
      blogger_id: 'T-tester5-B',
      blog_id: 'Bl-tester3-og'
    },
    {
      id: 'C-tester35-T',
      comment_text: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
      blogger_id: 'T-tester10-B',
      blog_id: 'Bl-tester14-og'
    },
    {
      id: 'C-tester36-T',
      comment_text: 'Maecenas ut massa quis augue luctus tincidunt.',
      blogger_id: 'T-tester10-B',
      blog_id: 'Bl-tester8-og'
    },
    {
      id: 'C-tester37-T',
      comment_text: 'Cras in purus eu magna vulputate luctus.',
      blogger_id: 'T-tester10-B',
      blog_id: 'Bl-tester11-og'
    },
    {
      id: 'C-tester38-T',
      comment_text: 'Etiam vel augue. Vestibulum rutrum rutrum neque.',
      blogger_id: 'T-tester8-B',
      blog_id: 'Bl-tester5-og'
    },
    {
      id: 'C-tester39-T',
      comment_text: 'Proin at turpis a pede posuere nonummy.',
      blogger_id: 'T-tester8-B',
      blog_id: 'Bl-tester19-og'
    },
    {
      id: 'C-tester40-T',
      comment_text: 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
      blogger_id: 'T-tester9-B',
      blog_id: 'Bl-tester19-og'
    },
    {
      id: 'C-tester41-T',
      comment_text: 'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
      blogger_id: 'T-tester5-B',
      blog_id: 'Bl-tester4-og'
    },
    {
      id: 'C-tester42-T',
      comment_text: 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
      blogger_id: 'T-tester2-B',
      blog_id: 'Bl-tester11-og'
    },
    {
      id: 'C-tester43-T',
      comment_text: 'Vestibulum ac est lacinia nisi venenatis tristique.',
      blogger_id: 'T-tester4-B',
      blog_id: 'Bl-tester6-og'
    },
    {
      id: 'C-tester44-T',
      comment_text: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
      blogger_id: 'T-tester9-B',
      blog_id: 'Bl-tester6-og'
    },
    {
      id: 'C-tester45-T',
      comment_text: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
      blogger_id: 'T-tester7-B',
      blog_id: 'Bl-tester9-og'
    },
    {
      id: 'C-tester46-T',
      comment_text: 'Integer ac leo. Pellentesque ultrices mattis odio.',
      blogger_id: 'T-tester4-B',
      blog_id: 'Bl-tester19-og'
    },
    {
      id: 'C-tester47-T',
      comment_text: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
      blogger_id: 'T-tester10-B',
      blog_id: 'Bl-tester1-og'
    },
    {
      id: 'C-tester48-T',
      comment_text: 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
      blogger_id: 'T-tester2-B',
      blog_id: 'Bl-tester19-og'
    },
    {
      id: 'C-tester49-T',
      comment_text: 'Proin risus. Praesent lectus.',
      blogger_id: 'T-tester10-B',
      blog_id: 'Bl-tester1-og'
    },
    {
      id: 'C-tester50-T',
      comment_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.',
      blogger_id: 'T-tester10-B',
      blog_id: 'Bl-tester12-og'
    }
  ];
  
  const seedComments = () => Comment.bulkCreate(commentData);
  
  module.exports = seedComments;  