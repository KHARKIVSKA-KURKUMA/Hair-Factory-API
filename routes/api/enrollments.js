const express = require("express");
const { basedir } = global;
const ctrl = require(`${basedir}/controllers/enrollments`);
const { controllersWrap } = require(`${basedir}/helpers`);

const router = express.Router();
const { auth } = require(`${basedir}/middleware`);

/* ---------------------------------- Path ---------------------------------- */
router.get("/", auth, controllersWrap(ctrl.getEnrolmentList));
router.post("/", auth, controllersWrap(ctrl.addEnrolment));
router.get("/:enrolmentId", auth, controllersWrap(ctrl.getEnrolment));
router.get("/master/:masterId", auth, controllersWrap(ctrl.getMasterEnrolment));
router.delete("/:enrolmentId", auth, controllersWrap(ctrl.deleteEnrolment));
router.put("/:enrolmentId", auth, controllersWrap(ctrl.editEnrolment));

module.exports = router;
