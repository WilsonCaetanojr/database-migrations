const Users = require("../models/Users");

module.exports = {
  async store(req, res) {
    try {
      const { email, name, age } = req.body;

      const user = await Users.create({ email, name, age });

      return res.json(user);
    } catch (err) {
      console.log(err);
      res.status(400).send("Error");
    }
  },
};
