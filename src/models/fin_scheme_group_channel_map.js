const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fin_scheme_group_channel_map', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    scheme_group_map_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'fin_scheme_group_map',
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
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'fin_scheme_group_channel_map',
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
        name: "scheme_group_map_id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "scheme_group_map_id" },
          { name: "channel_id" },
        ]
      },
      {
        name: "fk_fin_scheme_group_channel_map_fin_scheme_group_map1_idx",
        using: "BTREE",
        fields: [
          { name: "scheme_group_map_id" },
        ]
      },
      {
        name: "fk_fin_scheme_group_channel_map_core_channel1_idx",
        using: "BTREE",
        fields: [
          { name: "channel_id" },
        ]
      },
    ]
  });
};
