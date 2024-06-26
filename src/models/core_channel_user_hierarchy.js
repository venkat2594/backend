const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_channel_user_hierarchy', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    channel_user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_channel_user',
        key: 'id'
      }
    },
    supervisor_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_channel_user',
        key: 'id'
      }
    },
    channel_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
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
    tableName: 'core_channel_user_hierarchy',
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
        name: "fk_core_channel_user_hierarchy_core_channel_user1_idx",
        using: "BTREE",
        fields: [
          { name: "channel_user_id" },
        ]
      },
      {
        name: "fk_core_channel_user_hierarchy_core_channel_user2_idx",
        using: "BTREE",
        fields: [
          { name: "supervisor_id" },
        ]
      },
      {
        name: "channel_id",
        using: "BTREE",
        fields: [
          { name: "channel_id" },
        ]
      },
    ]
  });
};
