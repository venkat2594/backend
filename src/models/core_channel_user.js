const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_channel_user', {
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
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_user',
        key: 'id'
      }
    },
    rm_employee_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_employee',
        key: 'id'
      }
    },
    pincode_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_pincode',
        key: 'id'
      }
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_channel_user',
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
        name: "fk_core_channel_user_core_channel1_idx",
        using: "BTREE",
        fields: [
          { name: "channel_id" },
        ]
      },
      {
        name: "fk_core_channel_user_core_user1_idx",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "fk_core_pincode_id",
        using: "BTREE",
        fields: [
          { name: "pincode_id" },
        ]
      },
      {
        name: "fk_core_channel_user_core_employee_id",
        using: "BTREE",
        fields: [
          { name: "rm_employee_id" },
        ]
      },
    ]
  });
};
