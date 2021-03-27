const { Model, DataTypes } = require("sequelize");

class Addresses extends Model {
  static init(connection) {
    super.init(
      {
        zipCode: DataTypes.STRING,
        street: DataTypes.STRING,
        number: DataTypes.INTEGER,
      },
      { sequelize: connection }
    );
  }
}

module.exports = Addresses;
