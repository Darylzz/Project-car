module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define(
    "Type",
    {
      name: {
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
  Type.associate = db => {
    Type.hasMany(db.Car, {
      foreignKey: {
        name: "typeId"
      }
    });
  };
  return Type;
};
