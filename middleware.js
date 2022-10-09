module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    // storing the url trying to reach
    req.session.returnTo = req.originalUrl
    req.flash("error", "You must be signed in");
    return res.redirect("/login");
  }
  next();
};

