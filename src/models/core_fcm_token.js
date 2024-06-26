const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_fcm_token', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_user',
        key: 'id'
      }
    },
    device_id: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    platform: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    service_provider_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_service_provider',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_fcm_token',
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
        name: "fk_core_fcm_token_core_user1_idx",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "fk_core_fcm_token_core_service_provider1_idx",
        using: "BTREE",
        fields: [
          { name: "service_provider_id" },
        ]
      },
    ]
  });
};
