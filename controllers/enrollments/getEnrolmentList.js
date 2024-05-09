const { Enrolment } = require(`../../models/enrollments`);

const getEnrolmentList = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Enrolment.find({ owner });
  res.json(result);
};

module.exports = getEnrolmentList;
