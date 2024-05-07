const getCurrent = async (req, res) => {
  const { role, email, username } = req.user;
  res.json({
    username,
    email,
    role,
  });
};

module.exports = getCurrent;
