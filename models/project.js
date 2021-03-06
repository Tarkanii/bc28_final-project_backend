const { Schema, model, SchemaTypes } = require("mongoose");
const Joi = require("joi");

const projectSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    participants: [{
      type:SchemaTypes.ObjectId,
      ref: "user"
      
    }],
    sprints:[{
      type:SchemaTypes.ObjectId,
      ref: "sprint"
    }],
  },
  { versionKey: false, timestamps: true }
);

projectSchema.methods.setName = function (newName) {
  this.name = newName;
};
const joiSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  participants:Joi.array(),
  sprints: Joi.array()
});

const Project = model("project", projectSchema);

module.exports = {
  Project,
  joiSchema,
};
