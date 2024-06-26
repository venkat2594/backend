const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crm_lead_participant', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    lead_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'crm_lead',
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
    task_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_task',
        key: 'id'
      }
    },
    role: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'crm_lead_participant',
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
        name: "fk_crm_lead_participant_crm_lead1_idx",
        using: "BTREE",
        fields: [
          { name: "lead_id" },
        ]
      },
      {
        name: "fk_crm_lead_participant_core_user1_idx",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "fk_crm_lead_participant_core_task1_idx",
        using: "BTREE",
        fields: [
          { name: "task_id" },
        ]
      },
    ]
  });
};
