// require dependencies
const { Blog } = require('../models');

// array of blog data objects for seeding
const blogData = [
    {
        id: 'Bl-tester1-og',
        title: 'Donec posuere metus vitae ipsum.',
        context: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque ullam ut quaerat! Atque sunt excepturi nobis veniam cumque adipisci ullam ut voluptatibus aspernatur? Odit facilis cum, laboriosam voluptate consectetur a!',
        blogger_id: 'T-tester10-B'
    },
    {
        id: 'Bl-tester2-og',
        title: 'Morbi non quam nec dui luctus rutrum.',
        context: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, nulla numquam velit in nam ab nesciunt illo quas ut totam hic dolor est accusamus, saepe, et reprehenderit quo incidunt cum.',
        blogger_id: 'T-tester8-B'
    },
    {
        id: 'Bl-tester3-og',
        title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
        context: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam illo consequuntur fugiat sunt aliquid enim? Atque beatae cupiditate labore enim unde consequatur qui nostrum ratione a minus. Modi, adipisci quam?',
        blogger_id: 'T-tester1-B'
    },
    {
        id: 'Bl-tester4-og',
        title: 'Nunc purus.',
        context: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum ratione ea soluta earum tenetur labore nobis ipsam cupiditate quidem nemo vel vitae libero, amet nisi animi perferendis iusto adipisci veniam!',
        blogger_id: 'T-tester4-B'
    },
    {
        id: 'Bl-tester5-og',
        title: 'Pellentesque eget nunc.',
        context: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti facere ab totam voluptatibus amet cupiditate assumenda? Eius sint sunt illo voluptate non temporibus officia labore hic vero praesentium, deleniti provident?',
        blogger_id: 'T-tester7-B'
    },
    {
        id: 'Bl-tester6-og',
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        context: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laboriosam natus delectus deserunt quibusdam fugit, unde laborum. Cumque placeat dignissimos harum et eligendi vitae voluptate, doloribus tempora iusto nulla facere.',
        blogger_id: 'T-tester4-B'
    },
    {
        id: 'Bl-tester7-og',
        title: 'In hac habitasse platea dictumst.',
        context: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut perferendis voluptate iure quis beatae ea odit molestiae, impedit autem officiis, numquam dignissimos dolore cumque quod ipsa ex natus adipisci? Laborum!',
        blogger_id: 'T-tester1-B'
    },
    {
        id: 'Bl-tester8-og',
        title: 'Morbi non quam nec dui luctus rutrum.',
        context: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis tempore error unde itaque soluta nam beatae ab iure neque illum dolore nobis, in aliquam explicabo aperiam ullam! Ipsum, corrupti? Optio!',
        blogger_id: 'T-tester1-B'
    },
    {
        id: 'Bl-tester9-og',
        title: 'Duis ac nibh.',
        context: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptas veniam dignissimos non doloremque nisi voluptatibus quibusdam recusandae vel nobis, officia quasi quaerat sunt et dolor fugiat culpa corrupti molestiae?',
        blogger_id: 'T-tester9-B'
    },
    {
        id: 'Bl-tester10-og',
        title: 'Curabitur at ipsum ac tellus semper interdum.',
        context: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt magni quidem impedit, nihil quo veniam beatae maxime. Voluptas nulla, dolorum explicabo, incidunt dignissimos dicta hic veniam earum facere tempora itaque?',
        blogger_id: 'T-tester5-B'
    },
    {
        id: 'Bl-tester11-og',
        title: 'In hac habitasse platea dictumst.',
        context: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, amet reprehenderit! Officia assumenda inventore quae qui, quos, expedita ratione aliquam eligendi, hic commodi dolorem magnam porro modi dignissimos repellat velit.',
        blogger_id: 'T-tester3-B'
    },
    {
        id: 'Bl-tester12-og',
        title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
        context: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, veniam cumque similique praesentium suscipit alias delectus dolore officiis asperiores sapiente magnam natus consectetur ea voluptatem, eum ipsam iste tempora quod?',
        blogger_id: 'T-tester10-B'
    },
    {
        id: 'Bl-tester13-og',
        title: 'Donec dapibus.',
        context: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ducimus praesentium dolores dolorum at voluptate omnis hic consectetur delectus nemo sunt laudantium, pariatur provident dignissimos et dolore, molestias numquam iusto.',
        blogger_id: 'T-tester8-B'
    },
    {
        id: 'Bl-tester14-og',
        title: 'Nulla tellus.',
        context: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati cum, magni odio expedita accusamus maiores ex molestiae, voluptates incidunt laudantium quia similique vero voluptas possimus. Odit ut sequi dignissimos hic.',
        blogger_id: 'T-tester3-B'
    },
    {
        id: 'Bl-tester15-og',
        title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
        context: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dignissimos blanditiis harum eum molestiae enim, vitae laboriosam vero consectetur quos nesciunt itaque minima omnis doloribus aspernatur iste suscipit voluptas dolor.',
        blogger_id: 'T-tester3-B'
    },
    {
        id: 'Bl-tester16-og',
        title: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
        context: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias sed asperiores reprehenderit minus vero itaque commodi facilis maxime esse soluta cumque error deserunt fuga eveniet, fugit quas inventore, porro maiores!',
        blogger_id: 'T-tester7-B'
    },
    {
        id: 'Bl-tester17-og',
        title: 'In hac habitasse platea dictumst.',
        context: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus odio at iusto sint et perferendis atque voluptatum ab voluptas pariatur magni reprehenderit, laudantium commodi vero modi consectetur? Molestiae, id placeat.',
        blogger_id: 'T-tester6-B'
    },
    {
        id: 'Bl-tester18-og',
        title: 'Etiam justo.',
        context: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, velit harum? Repudiandae soluta fugit, nulla consequuntur non perferendis at nobis repellat, esse ut accusamus molestias excepturi dicta hic inventore. Pariatur.',
        blogger_id: 'T-tester4-B'
    },
    {
        id: 'Bl-tester19-og',
        title: 'Nulla ut erat id mauris vulputate elementum.',
        context: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi modi nesciunt hic iste architecto suscipit blanditiis rem doloremque nostrum aliquam commodi similique animi sequi neque numquam consectetur, ratione soluta? Vero.',
        blogger_id: 'T-tester6-B'
    },
    {
        id: 'Bl-tester20-og',
        title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
        context: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut dignissimos placeat similique totam ab, quaerat sequi, enim ullam voluptate sapiente saepe assumenda esse nemo temporibus. Fugit ab aliquam officiis.',
        blogger_id: 'T-tester7-B'
    }
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;