const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_channel_employee_map', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    channel_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_channel',
        key: 'id'
      }
    },
    employee_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
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
    tableName: 'core_channel_employee_map',
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
        name: "fk_core_channel_employee_map_core_channel1_idx",
        using: "BTREE",
        fields: [
          { name: "channel_id" },
        ]
      },
      {
        name: "fk_core_channel_employee_map_core_employee1_idx",
        using: "BTREE",
        fields: [
          { name: "employee_id" },
        ]
      },
    ]
  });
};
