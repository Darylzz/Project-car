module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: false
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: false
        }
      },
      confirmPassword: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: false
        }
      }
    },
    {
      underscored: true
    }
  );
  User.associate = db => {
    User.hasMany(db.Car, {
      foreignKey: {
        name: "userId"
      }
    });
  };
  return User;
};
