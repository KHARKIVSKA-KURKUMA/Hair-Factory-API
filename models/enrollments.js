const { Schema, model } = require("mongoose");
const Joi = require("joi");

const enrolmentSchema = Schema(
  {
    master: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    enrolmentDate: {
      type: Date,
      required: true,
    },
    enrolmentTime: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    ownerInfo: {
      type: Object,
    },
  },
  { versionKey: false, timestamps: true }
);

const Enrolment = model("enrollments", enrolmentSchema);

const enrolmentAddSchema = Joi.object({
  master: Joi.string().required(),
  phone: Joi.string().required(),
  enrolmentDate: Joi.date().required(),
  enrolmentTime: Joi.string().required(),
});

const schemas = {
  enrolmentAdd: enrolmentAddSchema,
};

module.exports = {
  Enrolment,
  schemas,
};
