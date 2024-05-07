const express = require("express");
const { basedir } = global;
const ctrl = require(`${basedir}/controllers/enrollments`);
const { controllersWrap } = require(`${basedir}/helpers`);

const router = express.Router();
const { auth } = require(`${basedir}/middleware`);

/* ---------------------------------- Path ---------------------------------- */
router.get("/", controllersWrap(ctrl.getEnrolmentList));
router.post("/", auth, controllersWrap(ctrl.addEnrolment));
router.get("/:enrolmentId", controllersWrap(ctrl.getEnrolment));
router.get("/master/:masterId", controllersWrap(ctrl.getMasterEnrolment));
router.delete("/:enrolmentId", controllersWrap(ctrl.deleteEnrolment));
router.put("/:enrolmentId", controllersWrap(ctrl.editEnrolment));

module.exports = router;
