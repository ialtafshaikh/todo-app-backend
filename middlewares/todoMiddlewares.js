const AppError = require("../helpers/appErrorClass");
const sendErrorMessage = require("../helpers/sendError");

//middleware
const verifyPostRequest = (req, res, next) => {
  let requiredProps = ["description"];
  let result = requiredProps.every((prop) => {
    return req.body[prop] && req.body[prop].trim().length;
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

const verifyQueryParams = (req, res, next) => {
  if (req.query != null) {
    let validationArray = [
      "taskID",
      "description",
      "completed",
      "author",
      "startedAt",
      "completedAt",
    ];
    let extractedValidKeys = {};
    validationArray.forEach((key) => {
      if (req.query[key] == "") {
        extractedValidKeys[key] = 1;
      }
    });
    if (extractedValidKeys == null) {
      return sendErrorMessage(
        new AppError(400, "unsuccessful", "invalid query param"),
        req,
        res
      );
    } else {
      req.query = extractedValidKeys;
      next();
    }
  } else {
    next();
  }
};

const verifyUpdateObject = (req, res, next) => {
  if (req.body != null) {
    let validationArray = ["description", "completed"];
    let extractedValidKeys = {};
    validationArray.forEach((key) => {
      if (typeof req.body[key] !== "undefined") {
        extractedValidKeys[key] = req.body[key];
      }
    });

    if (Object.keys(extractedValidKeys).length == 0) {
      return sendErrorMessage(
        new AppError(400, "unsuccessful", "invalid query object can't update"),
        req,
        res
      );
    } else {
      req.body = extractedValidKeys;
      next();
    }
  } else {
    return sendErrorMessage(
      new AppError(400, "unsuccessful", "empty object can't update"),
      req,
      res
    );
  }
};

module.exports = {
  verifyPostRequest,
  verifyQueryParams,
  verifyUpdateObject,
};
