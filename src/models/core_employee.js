const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_employee', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(256),
      allowNull: true,
      unique: "employee_code_unique"
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_user',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    mobile: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    office_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_office',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_employee',
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
        name: "employee_code_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "fk_core_employee_core_user1_idx",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "fk_core_employee_core_office1_idx",
        using: "BTREE",
        fields: [
          { name: "office_id" },
        ]
      },
    ]
  });
};
