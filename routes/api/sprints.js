const express = require("express");
const { Sprint: ctrl } = require("../../controllers");
const { joiSchema } = require("../../models/sprint");
const {
  controllWrapper,
  validation,
  authorized,
} = require("../../middlewares");
const { sprints: ctrl } = require("../../controllers");
const { projects: operations } = require("../../controllers");

const router = express.Router();

router.get("/:id", validation(joiSchema), controllWrapper(ctrl.getSprint));

router.post("/", validation(joiSchema), controllWrapper(ctrl.createSprint));

router.patch("/:id", validation(joiSchema), controllWrapper(ctrl.updateSprint));

router.delete("/:id", validation(joiSchema), controllWrapper(ctrl.deleteSprint));

module.exports = router;
