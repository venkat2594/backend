const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('los_application_participant', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    application_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'los_application',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    channel_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_channel',
        key: 'id'
      }
    },
    participant_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    territory_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_territory',
        key: 'id'
      }
    },
    task_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_task',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'los_application_participant',
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
        name: "fk_los_application_participant_los_application1_idx",
        using: "BTREE",
        fields: [
          { name: "application_id" },
        ]
      },
      {
        name: "fk_los_application_participant_core_user1_idx",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "fk_los_application_participant_core_task1_idx",
        using: "BTREE",
        fields: [
          { name: "task_id" },
        ]
      },
      {
        name: "channel_id",
        using: "BTREE",
        fields: [
          { name: "channel_id" },
        ]
      },
      {
        name: "fk_application_participant_territory",
        using: "BTREE",
        fields: [
          { name: "territory_id" },
        ]
      },
    ]
  });
};
