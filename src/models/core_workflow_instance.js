const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_workflow_instance', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    workflow_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_workflow',
        key: 'id'
      }
    },
    reference_type: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    reference_id: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    source_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    source_type: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    workflow_definition: {
      type: DataTypes.JSON,
      allowNull: true
    },
    previous_instance_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_workflow_instance',
        key: 'id'
      }
    },
    parent_workflow_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    active_step_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    completed_step_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    parent_instance_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_workflow_instance',
        key: 'id'
      }
    },
    active_task_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_task',
        key: 'id'
      }
    },
    completed_task_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_task',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'core_workflow_instance',
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
        name: "fk_lsk_workflow_instance_lsk_workflow1_idx",
        using: "BTREE",
        fields: [
          { name: "workflow_id" },
        ]
      },
      {
        name: "fk_core_workflow_previous_instance_id",
        using: "BTREE",
        fields: [
          { name: "previous_instance_id" },
        ]
      },
      {
        name: "fk_workflow_instance_parent_instance_id",
        using: "BTREE",
        fields: [
          { name: "parent_instance_id" },
        ]
      },
      {
        name: "fk_workflow_instance_active_task_id",
        using: "BTREE",
        fields: [
          { name: "active_task_id" },
        ]
      },
      {
        name: "fk_workflow_instance_completed_task_id",
        using: "BTREE",
        fields: [
          { name: "completed_task_id" },
        ]
      },
      {
        name: "idx_source_id_source_type",
        using: "BTREE",
        fields: [
          { name: "source_id" },
          { name: "source_type" },
        ]
      },
    ]
  });
};
