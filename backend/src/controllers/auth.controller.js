export async function checkAuth(req, res, next) {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  res.status(200).json({
    _id: req.user._id,
    email: req.user.email,
    fullName: req.user.fullName,
    profilePic: req.user.profilePic,
  });
}
