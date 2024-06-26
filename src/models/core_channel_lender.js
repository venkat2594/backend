const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_channel_lender', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    lender_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_lender',
        key: 'id'
      },
      unique: "fk_core_employee_territory_lender_core_lender10"
    },
    channel_territory_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_channel_territory',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_channel_lender',
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
        name: "employee_territory_id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "lender_id" },
        ]
      },
      {
        name: "fk_core_employee_territory_lender_core_lender1_idx",
        using: "BTREE",
        fields: [
          { name: "lender_id" },
        ]
      },
      {
        name: "fk_channel_lender_channel_territory",
        using: "BTREE",
        fields: [
          { name: "channel_territory_id" },
        ]
      },
    ]
  });
};
