const User  = require('../models/users');

// Create that mutafucka
const newUser = User({
  name: 'starlord55',
  password: 'password'
});

// save the user
newUser.save(function(err) {
  if (err) throw err;

  console.log('User created!');
});

// Find all of them
exports.findAllUsers = function(ctx) {
  User.find({}, function(err, users) {
    if(err) ctx.res.send(500, err.message);

    console.log('GET /users');
    console.log(JSON.stringify(users));
    return users;
  });
};