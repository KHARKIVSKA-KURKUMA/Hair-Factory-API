const express = require("express");
const { basedir } = global;
const ctrl = require(`${basedir}/controllers/enrollments`);
const { controllersWrap } = require(`${basedir}/helpers`);

const router = express.Router();
const { auth } = require(`${basedir}/middleware`);

/* ---------------------------------- Path ---------------------------------- */
router.get("/", controllersWrap(ctrl.getEnrolmentList));
router.post("/", auth, controllersWrap(ctrl.addEnrolment));

module.exports = router;
