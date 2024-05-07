const { Enrolment, schemas } = require(`../../models/enrollments`);
const { errorMessage } = require(`../../helpers`);

const addEnrolment = async (req, res) => {
  const { error } = schemas.enrolmentAdd.validate(req.body);
  if (error) {
    const label = error.details[0].context.label;
    if (error.details[0].type === "any.required") {
      throw errorMessage({
        status: 400,
        message: `missing required ${label} field`,
      });
    } else {
      throw errorMessage({
        status: 400,
        message: `${error.details[0].message}`,
      });
    }
  } else {
    const { _id: owner } = req;
    const result = await Enrolment.create({ ...req.body, owner });
    res.status(201).json(result);
  }
};

module.exports = addEnrolment;
