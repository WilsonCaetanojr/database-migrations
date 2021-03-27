const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(connection) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        age: DataTypes.DATE,
      },
      { sequelize: connection }
    );
  }
}

module.exports = User;
