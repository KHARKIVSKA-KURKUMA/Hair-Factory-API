const { basedir } = global;
const { Enrolment } = require(`${basedir}/models/enrollments`);
const { errorMessage } = require(`${basedir}/helpers`);

const getEnrolment = async (req, res) => {
  const { enrolmentId } = req.params;
  const result = await Enrolment.findById(enrolmentId);
  if (!result) {
    throw errorMessage({ status: 404 });
  }
  res.json(result);
};

module.exports = getEnrolment;
