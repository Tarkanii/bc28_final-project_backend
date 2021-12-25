const { Task } = require("../../models");

const add = async (req, res) => {
  const result = await Task.create({ ...req.body});
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = add;