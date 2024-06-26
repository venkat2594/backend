const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_employee_hierarchy', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    employee_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_employee',
        key: 'id'
      }
    },
    supervisor_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_employee',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_employee_hierarchy',
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
        name: "fk_core_advisor_hierarchy_core_advisor1_idx",
        using: "BTREE",
        fields: [
          { name: "employee_id" },
        ]
      },
      {
        name: "fk_core_advisor_hierarchy_core_advisor2_idx",
        using: "BTREE",
        fields: [
          { name: "supervisor_id" },
        ]
      },
    ]
  });
};
