// Insert seed models below

var User = require('./models/user.model');
var Post = require('./models/post.model');

var Users = require('./users');

User.remove({}).exec();
User.countDocuments({}).exec((err, count) => {
    if (err) {
         console.error(err);
         return;
    }
    if (count == 0) {
        User.insertMany(Users, (err, seeUsers) => {
            if (err) {
                console.error(err);
                return;
            }
           console.log("Users created");
       })
    }
})

Post.remove({}).exec();
