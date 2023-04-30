exports.getAllUsers = (req, res) => {
  res.status(200).send('List of users');
};

exports.createUser = (req, res) => {
  res.status(200).send('Created user');
};

exports.getUser = (req, res) => {
  res.status(200).send('User here');
};

exports.updateUser = (req, res) => {
  res.status(200).send('Updated user');
};

exports.deleteUser = (req, res) => {
  res.status(204).send('Deleted user');
};
