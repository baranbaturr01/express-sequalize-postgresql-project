import httpStatus from "http-status";
//joi check params
const validateParams = (schema) => (req, res, next) => {
  const {value, error} = schema().validate(req.params);
  if (error) {
    // error.details = [{message: ""}, {message: ""}]

    const errorMessage = error.details
      ?.map((detail) => detail.message)
      .join(", ");

    //["","","",]=>""aaa,bbb,ccc
    res.status(httpStatus.BAD_REQUEST)
      .json({code: httpStatus.BAD_REQUEST, message: errorMessage});
    return;
  }
  Object.assign(req, value);
  return next();
}
const validate = (schema) => (req, res, next) => {
  const {value, error} = schema().validate(req.body);
  if (error) {
    // error.details = [{message: ""}, {message: ""}]

    const errorMessage = error.details
      ?.map((detail) => detail.message)
      .join(", ");

    //["","","",]=>""aaa,bbb,ccc
    res.status(httpStatus.BAD_REQUEST)
      .json({code: httpStatus.BAD_REQUEST, message: errorMessage});
    return;
  }
  Object.assign(req, value);
  return next();
};
export {validate,validateParams};
