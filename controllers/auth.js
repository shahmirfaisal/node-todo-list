exports.getLogin = (req, res, next) => {
  res.render("./login");
};

exports.getSignup = (req, res, next) => {
  res.render("./signup");
};
