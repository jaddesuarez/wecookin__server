import Joi from "joi";
const STRING_VALIDATION = Joi.string().required();
const NUMBER_VALIDATION = Joi.number().required();
const BOOLEAN_VALIDATION = Joi.boolean().required();

export const restaurantIdValidation = Joi.object().keys({
  restaurant_id: STRING_VALIDATION,
});

export const hoursValidation = Joi.object().keys({
  hours: Joi.string().allow(""),
  isOpen: BOOLEAN_VALIDATION,
});

export const operatingHoursValidation = Joi.object({
  Monday: hoursValidation,
  Tuesday: hoursValidation,
  Wednesday: hoursValidation,
  Thursday: hoursValidation,
  Friday: hoursValidation,
  Saturday: hoursValidation,
  Sunday: hoursValidation,
});

export const restaurantValidation = Joi.object({
  name: STRING_VALIDATION,
  neighborhood: STRING_VALIDATION,
  address: STRING_VALIDATION,
  location: Joi.object({
    coordinates: Joi.object({
      lat: NUMBER_VALIDATION,
      lng: NUMBER_VALIDATION,
    }).required(),
  }).required(),
  image: Joi.string().allow(""),
  cuisineType: STRING_VALIDATION,
  operatingHours: operatingHoursValidation,
  owner: STRING_VALIDATION,
});
