const { basedir } = global;
const { Enrolment, schemas } = require(`${basedir}/models/enrollments`);
const { errorMessage } = require(`${basedir}/helpers`);

const editEnrolment = async (req, res) => {
  const { error } = schemas.enrolmentAdd.validate(req.body);
  if (error) {
    const length = Object.keys(error._original).length;
    const label = error.details[0].context.label;
    if (length === 0) {
      throw errorMessage({ status: 400, message: "missing fields" });
    }
    if (error.details[0].type === "any.required") {
      throw errorMessage({
        status: 400,
        message: `missing required ${label} field`,
      });
    } else if (error.details[0].type === "string.pattern.base") {
      throw errorMessage({
        status: 400,
        message: `The name must be at least 3 letters long `,
      });
    } else {
      throw errorMessage({
        status: 400,
        message: `${error.details[0].message}`,
      });
    }
  }
  const { enrolmentId } = req.params;
  const result = await Enrolment.findByIdAndUpdate(enrolmentId, req.body, {
    new: true,
  });
  if (!result) throw errorMessage({ status: 404 });
  res.json(result);
};

module.exports = editEnrolment;
