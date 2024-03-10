import Joi from "joi";
const STRING_VALIDATION = Joi.string().required();
const EMAIL_VALIDATION = Joi.string().email().required();

export const signupValidation = Joi.object().keys({
  username: STRING_VALIDATION,
  email: EMAIL_VALIDATION,
  password: STRING_VALIDATION,
});

export const loginValidation = Joi.object().keys({
  email: EMAIL_VALIDATION,
  password: STRING_VALIDATION,
});
