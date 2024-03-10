import Joi from "joi";
const STRING_VALIDATION = Joi.string().required();
const NUMBER_VALIDATION = Joi.number().required();

export const reviewIdValidation = Joi.object().keys({
  review_id: STRING_VALIDATION,
});

export const createReviewValidation = Joi.object().keys({
  owner: STRING_VALIDATION,
  comment: STRING_VALIDATION,
  rating: NUMBER_VALIDATION,
});
