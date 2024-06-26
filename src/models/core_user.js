const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_user', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    mobile: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_password_change: {
      type: DataTypes.DATE,
      allowNull: true
    },
    user_type: {
      type: DataTypes.ENUM('CUSTOMER','EMPLOYEE','CHANNEL'),
      allowNull: false
    },
    associate_user_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_user',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "core_user_unique_constrain_on_type_mobile",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_type" },
          { name: "mobile" },
        ]
      },
      {
        name: "core_user_unique_constrain_on_type_email",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_type" },
          { name: "email" },
        ]
      },
    ]
  });
};
