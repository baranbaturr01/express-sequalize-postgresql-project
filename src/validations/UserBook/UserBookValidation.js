import Joi from "joi";

const borrowBookValidation = () => {
  return Joi.object({
    user_id: Joi.string().required().messages({
      "any.required": "user_id is required",
    }),
    book_id: Joi.string().required().messages({
      "any.required": "book_id is required",
    }),
  })
}

const returnBookValidation = () => {
  return Joi.object({
    user_id: Joi.string().required().messages({
      "any.required": "user_id is required",
    }),
    book_id: Joi.string().required().messages({
      "any.required": "book_id is required",
    }),
    score: Joi.number().required().messages({
      "any.required": "score is required",
    })
  })
}

export default {
  borrowBookValidation,
  returnBookValidation,
}