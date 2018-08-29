function loadUsers(userIds, load, done) {
  let users = [];
  userIds.forEach((id, index) => {
    load(id, (user) => {
      users[index] = user;
      let userCount = 0;
      users.forEach((user) => {
        if (user !== null || user !== undefined) userCount++;
      });
      if (userIds.length === userCount) return done(users);
    });
  });
}

module.exports = loadUsers;
