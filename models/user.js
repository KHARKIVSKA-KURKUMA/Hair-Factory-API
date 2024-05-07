const { Schema, model } = require("mongoose");
const Joi = require("joi");

const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = Schema(
  {
    email: {
      type: String,
      match: emailRegExp,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: true,
    },
    username: {
      type: String,
      minlength: 3,
    },
    role: {
      type: String,
      enum: ["master", "client", "admin"],
      default: "client",
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

const registerSchema = Joi.object({
  username: Joi.string().min(3).required(),
  email: Joi.string().pattern(emailRegExp).required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valueOf("master", "client", "admin"),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegExp).required(),
  password: Joi.string().min(6).required(),
});

const roleSchema = Joi.object({
  role: Joi.string().valid("master", "client", "admin").required(),
});

const emailSchema = Joi.object({
  email: Joi.string().pattern(emailRegExp).required(),
});

const schemas = {
  register: registerSchema,
  login: loginSchema,
  role: roleSchema,
  email: emailSchema,
};

const User = model("users", userSchema);

module.exports = {
  User,
  schemas,
};
