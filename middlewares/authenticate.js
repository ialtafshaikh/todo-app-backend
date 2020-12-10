const axios = require("axios");

const AppError = require("../helpers/appErrorClass");
const sendErrorMessage = require("../helpers/sendError");

const BASE_URL = "http://localhost:3001";
const endpointSignUp = "/users/signup";
const endpointLogin = "/users/login";
const endpointAuth = "/auth";

const signUpUser = async (req, res, next) => {
  let response;
  try {
    response = await axios.post(BASE_URL + endpointSignUp, req.body);
    res.status(200).json(response.data);
  } catch (error) {
    return sendErrorMessage(
      new AppError(500, "Unable to post", error),
      req,
      res
    );
  }
};

const loginUser = async (req, res, next) => {
  let response;
  try {
    response = await axios.post(BASE_URL + endpointLogin, req.body);
    res.status(200).json(response.data);
  } catch (error) {
    return sendErrorMessage(
      new AppError(500, "Unable to Login", error),
      req,
      res
    );
  }
};

const authorize = async (req, res, next) => {
  let response;
  try {
    response = await axios.post(BASE_URL + endpointAuth, {
      authorization: req.headers.authorization,
    });
    if (!response.data.authorize) {
      return sendErrorMessage(
        new AppError(500, "Not Authorize", error),
        req,
        res
      );
    }
    next();
  } catch (error) {
    return sendErrorMessage(
      new AppError(500, "Unable to Authorize", error),
      req,
      res
    );
  }
};

module.exports = {
  signUpUser,
  loginUser,
  authorize,
};
