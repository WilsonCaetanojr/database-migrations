const Addresses = require("../models/Addresses");
const Users = require("../models/Users");

module.exports = {
  async store(req, res) {
    try {
      const { idUser } = req.params;
      const { zipcode, street, number } = req.body;

      const user = await Users.findByPk(idUser);
      if (!user) return res.status(400).send("User not found.");

      const address = await Addresses.create({
        idUser,
        zipcode,
        street,
        number,
      });

      return res.json(address);
    } catch (err) {
      console.log(err);
      res.status(400).send("Error");
    }
  },
};
