const signUpUser = async (req, res, next) => {
  res.status(200);
  res.json({ message: "user signup" });
};

module.exports = {
  signUpUser,
};
