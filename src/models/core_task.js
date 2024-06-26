const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_task', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    workflow_instance_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_workflow_instance',
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
    task_type: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    associate_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    user_type: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    assigned_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    closed_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    remainder_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    next_task_id: {
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
    tableName: 'core_task',
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
        name: "fk_lsk_task_lsk_workflow_instance1_idx",
        using: "BTREE",
        fields: [
          { name: "workflow_instance_id" },
        ]
      },
      {
        name: "fk_lsk_task_lsk_step1_idx",
        using: "BTREE",
        fields: [
          { name: "step_id" },
        ]
      },
      {
        name: "fk_core_task_core_task1_idx",
        using: "BTREE",
        fields: [
          { name: "next_task_id" },
        ]
      },
    ]
  });
};
