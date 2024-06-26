const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_activity', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    workflow_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_workflow',
        key: 'id'
      }
    },
    workflow_instance_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_workflow_instance',
        key: 'id'
      }
    },
    task_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_task',
        key: 'id'
      }
    },
    step_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_workflow_step',
        key: 'id'
      }
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    decision: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    activity_type_lookup_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    data: {
      type: DataTypes.JSON,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_activity',
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
        name: "fk_lsk_activity_lsk_workflow_instance1_idx",
        using: "BTREE",
        fields: [
          { name: "workflow_instance_id" },
        ]
      },
      {
        name: "fk_lsk_activity_lsk_task1_idx",
        using: "BTREE",
        fields: [
          { name: "task_id" },
        ]
      },
      {
        name: "fk_lsk_activity_lsk_step1_idx",
        using: "BTREE",
        fields: [
          { name: "step_id" },
        ]
      },
      {
        name: "fk_lsk_activity_lsk_workflow1_idx",
        using: "BTREE",
        fields: [
          { name: "workflow_id" },
        ]
      },
    ]
  });
};
