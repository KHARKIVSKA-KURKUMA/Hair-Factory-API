const { basedir } = global;
const { Enrolment } = require(`${basedir}/models/enrollments`);
const { errorMessage } = require(`${basedir}/helpers`);

const getMasterEnrolment = async (req, res) => {
  const { masterId } = req.params;
  const result = await Enrolment.find({ master: masterId });
  if (!result) {
    throw errorMessage({ status: 404 });
  }
  res.json(result);
};

module.exports = getMasterEnrolment;
