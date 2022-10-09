import Joi from "joi";

const create = () => {

  return Joi.object({
    name: Joi.string().required().messages({
      "any.required": "Name is required",
    }),
  })
}

const getBookByBookId = () => {
  //check params
  return Joi.object({
    book_id: Joi.string().required().messages({
      "any.required": "Book id is required",
    })
  })
}

export default {
  create,
  getBookByBookId,
}