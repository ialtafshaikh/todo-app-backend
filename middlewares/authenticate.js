const axios = require("axios");

const AppError = require("../helpers/appErrorClass");
const sendErrorMessage = require("../helpers/sendError");
const sendResponse = require("../helpers/sendResponse");

const BASE_URL = "http://localhost:3001";
const endpointSignUp = "/users/signup";

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

module.exports = {
  signUpUser,
};
