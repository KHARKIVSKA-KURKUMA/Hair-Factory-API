const { Enrolment } = require(`../../models/enrollments`);

const getEnrolmentList = async (_, res) => {
  const result = await Enrolment.find({});
  res.json(result);
};

module.exports = getEnrolmentList;
