//middleware
const verifyPostRequest = (req, res, next) => {
  let requiredProps = ["description"];
  let result = requiredProps.every((prop) => {
    return req.body[prop];
  });
  if (!result) {
    return sendErrorMessage(
      new AppError(400, "unsuccessful", "Invalid body"),
      req,
      res
    );
  } else {
    next();
  }
};

module.exports = {
  verifyPostRequest,
};
