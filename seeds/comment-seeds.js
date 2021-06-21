// require dependencies
const { Comment } = require('../models');

const commentData = [
    {
      comment_text: 'Nunc rhoncus dui vel sem.',
      blogger_id: 6,
      blog_id: 1
    },
    {
      comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
      blogger_id: 6,
      blog_id: 8
    },
    {
      comment_text: 'Aliquam erat volutpat. In congue.',
      blogger_id: 3,
      blog_id: 10
    },
    {
      comment_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
      blogger_id: 3,
      blog_id: 18
    },
    {
      comment_text: 'In hac habitasse platea dictumst.',
      blogger_id: 7,
      blog_id: 5
    },
    {
      comment_text: 'Vivamus vestibulum sagittis sapien.',
      blogger_id: 1,
      blog_id: 20
    },
    {
      comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
      blogger_id: 6,
      blog_id: 7
    },
    {
      comment_text: 'Sed vel enim sit amet nunc viverra dapibus.',
      blogger_id: 7,
      blog_id: 4
    },
    {
      comment_text: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
      blogger_id: 6,
      blog_id: 12
    },
    {
      comment_text: 'Morbi a ipsum.',
      blogger_id: 6,
      blog_id: 20
    },
    {
      comment_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
      blogger_id: 3,
      blog_id: 14
    },
    {
      comment_text: 'Donec ut mauris eget massa tempor convallis.',
      blogger_id: 5,
      blog_id: 4
    },
    {
      comment_text:
        'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
      blogger_id: 4,
      blog_id: 9
    },
    {
      comment_text:
        'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
      blogger_id: 5,
      blog_id: 14
    },
    {
      comment_text: 'Quisque porta volutpat erat.',
      blogger_id: 6,
      blog_id: 2
    },
    {
      comment_text: 'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
      blogger_id: 8,
      blog_id: 2
    },
    {
      comment_text:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
      blogger_id: 2,
      blog_id: 20
    },
    {
      comment_text: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
      blogger_id: 4,
      blog_id: 11
    },
    {
      comment_text:
        'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
      blogger_id: 5,
      blog_id: 13
    },
    {
      comment_text:
        'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
      blogger_id: 9,
      blog_id: 16
    },
    {
      comment_text: 'Curabitur convallis.',
      blogger_id: 6,
      blog_id: 4
    },
    {
      comment_text: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      blogger_id: 4,
      blog_id: 10
    },
    {
      comment_text: 'Morbi non quam nec dui luctus rutrum.',
      blogger_id: 3,
      blog_id: 8
    },
    {
      comment_text:
        'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
      blogger_id: 8,
      blog_id: 10
    },
    {
      comment_text:
        'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
      blogger_id: 1,
      blog_id: 15
    },
    {
      comment_text: 'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
      blogger_id: 5,
      blog_id: 3
    },
    {
      comment_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      blogger_id: 1,
      blog_id: 15
    },
    {
      comment_text: 'Nam tristique tortor eu pede.',
      blogger_id: 4,
      blog_id: 16
    },
    {
      comment_text: 'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
      blogger_id: 4,
      blog_id: 18
    },
    {
      comment_text: 'Proin eu mi. Nulla ac enim.',
      blogger_id: 4,
      blog_id: 10
    },
    {
      comment_text: 'Sed ante. Vivamus tortor.',
      blogger_id: 7,
      blog_id: 5
    },
    {
      comment_text: 'Aliquam quis turpis eget elit sodales scelerisque.',
      blogger_id: 10,
      blog_id: 1
    },
    {
      comment_text: 'Donec quis orci eget orci vehicula condimentum.',
      blogger_id: 3,
      blog_id: 19
    },
    {
      comment_text: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
      blogger_id: 5,
      blog_id: 3
    },
    {
      comment_text: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
      blogger_id: 10,
      blog_id: 14
    },
    {
      comment_text: 'Maecenas ut massa quis augue luctus tincidunt.',
      blogger_id: 10,
      blog_id: 8
    },
    {
      comment_text: 'Cras in purus eu magna vulputate luctus.',
      blogger_id: 10,
      blog_id: 11
    },
    {
      comment_text: 'Etiam vel augue. Vestibulum rutrum rutrum neque.',
      blogger_id: 8,
      blog_id: 5
    },
    {
      comment_text: 'Proin at turpis a pede posuere nonummy.',
      blogger_id: 8,
      blog_id: 19
    },
    {
      comment_text: 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
      blogger_id: 9,
      blog_id: 19
    },
    {
      comment_text:
        'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
      blogger_id: 5,
      blog_id: 4
    },
    {
      comment_text:
        'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
      blogger_id: 2,
      blog_id: 11
    },
    {
      comment_text: 'Vestibulum ac est lacinia nisi venenatis tristique.',
      blogger_id: 4,
      blog_id: 6
    },
    {
      comment_text: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
      blogger_id: 9,
      blog_id: 6
    },
    {
      comment_text:
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
      blogger_id: 7,
      blog_id: 9
    },
    {
      comment_text: 'Integer ac leo. Pellentesque ultrices mattis odio.',
      blogger_id: 4,
      blog_id: 19
    },
    {
      comment_text: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
      blogger_id: 10,
      blog_id: 1
    },
    {
      comment_text:
        'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
      blogger_id: 2,
      blog_id: 19
    },
    {
      comment_text: 'Proin risus. Praesent lectus.',
      blogger_id: 10,
      blog_id: 1
    },
    {
      comment_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.',
      blogger_id: 10,
      blog_id: 12
    }
  ];
  
  const seedComments = () => Comment.bulkCreate(commentData);
  
  module.exports = seedComments;  