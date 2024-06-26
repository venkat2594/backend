const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_workflow_step', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    stage_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_workflow_stage',
        key: 'id'
      }
    },
    workflow_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_workflow',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    step_type_lookup_key: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    configuration: {
      type: DataTypes.JSON,
      allowNull: true
    },
    ui_component: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    conditional_component: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    automatic_component: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    display_mode: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    sequence: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    allocation_rule_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_rule',
        key: 'id'
      }
    },
    validation_rule_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    completion_rule_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_rule',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'core_workflow_step',
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
        name: "fk_lsk_step_lsk_stage1_idx",
        using: "BTREE",
        fields: [
          { name: "stage_id" },
        ]
      },
      {
        name: "fk_lsk_step_lsk_workflow1_idx",
        using: "BTREE",
        fields: [
          { name: "workflow_id" },
        ]
      },
      {
        name: "fk_core_step_core_rule1_idx",
        using: "BTREE",
        fields: [
          { name: "allocation_rule_id" },
        ]
      },
      {
        name: "fk_core_workflow_step_completion_rule_id",
        using: "BTREE",
        fields: [
          { name: "completion_rule_id" },
        ]
      },
    ]
  });
};
