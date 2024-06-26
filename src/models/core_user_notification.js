const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_user_notification', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    notification_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_notification',
        key: 'id'
      }
    },
    template_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_template',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_user',
        key: 'id'
      }
    },
    mobile: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    fcm_token: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    medium: {
      type: DataTypes.JSON,
      allowNull: false
    },
    errors: {
      type: DataTypes.JSON,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    viewed: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_user_notification',
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
        name: "fk_core_notification_event_core_notification1_idx",
        using: "BTREE",
        fields: [
          { name: "notification_id" },
        ]
      },
      {
        name: "fk_core_notification_event_core_user1_idx",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "fk_core_user_notification_core_template1_idx",
        using: "BTREE",
        fields: [
          { name: "template_id" },
        ]
      },
    ]
  });
};
