const { basedir } = global;
const { Enrolment } = require(`${basedir}/models/enrollments`);
const { errorMessage } = require(`${basedir}/helpers`);

const deleteEnrolment = async (req, res) => {
  const { enrolmentId } = req.params;
  const result = await Enrolment.findByIdAndRemove(enrolmentId);
  if (!result) throw errorMessage({ status: 404 });
  res.json({ message: "Enrolment deleted" });
};

module.exports = deleteEnrolment;
