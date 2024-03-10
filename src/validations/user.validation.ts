import Joi from "joi";
const STRING_VALIDATION = Joi.string().required();

export const userIdValidation = Joi.object().keys({
  user_id: STRING_VALIDATION,
});

export const editUserValidation = Joi.object().keys({
  username: STRING_VALIDATION,
  email: STRING_VALIDATION,
  avatar: STRING_VALIDATION,
});
