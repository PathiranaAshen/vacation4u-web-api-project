module.exports = function (req, res, next) {
  if (!req.user.isAgent) return res.status(403).send("Access Denied.");
  next();
};
