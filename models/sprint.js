const { Schema, model } = require("mongoose");
const Joi = require("joi");

const sprintSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    startDate: {
      type: String,
      required: [true, "startDate is required"],
    },
    endDate: {
      type: String,
      required: [true, "endDate is required"],
    },
    tasks: [
      {
        type: Schema.Types.ObjectId,
        ref: "tasks",
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

sprintSchema.methods.setName = function (newName) {
  this.name = newName;
};
const joiSchema = Joi.object({
  name: Joi.string().required(),
  startDate: Joi.string().required(),
  endDate: Joi.string().required(),
  tasks: Joi.array().default([]),
});

const Sprint = model("sprint", sprintSchema);

module.exports = {
  Sprint,
  joiSchema,
};
