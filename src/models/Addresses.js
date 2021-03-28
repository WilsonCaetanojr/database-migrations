const { Model, DataTypes } = require("sequelize");

class Addresses extends Model {
  static init(connection) {
    super.init(
      {
        zipcode: DataTypes.STRING,
        street: DataTypes.STRING,
        number: DataTypes.INTEGER,
      },
      { sequelize: connection }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "idUser", as: "user" });
  }
}

module.exports = Addresses;
