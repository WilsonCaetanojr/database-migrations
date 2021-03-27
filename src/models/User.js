const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        age: DataTypes.DATE,
      },
      { sequelize: connection }
    );
  }
}

module.exports = User;
