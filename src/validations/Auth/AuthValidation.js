import Joi from "joi";

const create = () => {

  return Joi.object({
    name: Joi.string().required().messages({
      "any.required": "Name is required",
    }),
  })
}

const get_user_by_id = () => {
  //check params
  return Joi.object({
    id: Joi.string().required().messages({
      "any.required": "User id is required",

    })
  })
}

export default {
  create,
  get_user_by_id,
}