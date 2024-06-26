const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_channel_territory', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    territory_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_territory',
        key: 'id'
      }
    },
    channel_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_channel',
        key: 'id'
      }
    },
    all_lender_enabled: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'core_channel_territory',
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
        name: "fk_core_channel_territory_core_territory1_idx",
        using: "BTREE",
        fields: [
          { name: "territory_id" },
        ]
      },
      {
        name: "fk_core_channel_territory_core_channel1_idx",
        using: "BTREE",
        fields: [
          { name: "channel_id" },
        ]
      },
    ]
  });
};
