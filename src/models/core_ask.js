const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_ask', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    application_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'los_application',
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
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_user',
        key: 'id'
      }
    },
    event_type: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    ask_type: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(1024),
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    external_ask_status: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    external_ask_id: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    data: {
      type: DataTypes.JSON,
      allowNull: true
    },
    ask_summary_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_ask_summary',
        key: 'id'
      }
    },
    document_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_document',
        key: 'id'
      }
    },
    all_document_ids: {
      type: DataTypes.JSON,
      allowNull: true
    },
    task_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_task',
        key: 'id'
      }
    },
    closed_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    parent_ask_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_ask',
        key: 'id'
      }
    },
    created_by_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_user',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_ask',
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
        name: "fk_los_communication_los_application1_idx",
        using: "BTREE",
        fields: [
          { name: "application_id" },
        ]
      },
      {
        name: "fk_los_communication_core_task1_idx",
        using: "BTREE",
        fields: [
          { name: "task_id" },
        ]
      },
      {
        name: "fk_core_ask_core_channel1_idx",
        using: "BTREE",
        fields: [
          { name: "channel_id" },
        ]
      },
      {
        name: "fk_core_ask_core_ask1_idx",
        using: "BTREE",
        fields: [
          { name: "parent_ask_id" },
        ]
      },
      {
        name: "fk_core_ask_core_user1_idx",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "fk_core_ask_core_user2_idx",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "fk_core_ask_core_document",
        using: "BTREE",
        fields: [
          { name: "document_id" },
        ]
      },
      {
        name: "fk_core_ask_summary_core_ask",
        using: "BTREE",
        fields: [
          { name: "ask_summary_id" },
        ]
      },
    ]
  });
};
