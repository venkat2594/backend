const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('los_elimination_rule', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    rule_category_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_rule_category',
        key: 'id'
      }
    },
    rule_execution_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_rule_execution',
        key: 'id'
      }
    },
    application_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'los_application',
        key: 'id'
      }
    },
    workflow_step_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_workflow_step',
        key: 'id'
      }
    },
    applicable_to: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    rule_expression: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rule_data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rule_status: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'los_elimination_rule',
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
        name: "fk_mkt_lender_rule_result_core_rule_execution1_idx",
        using: "BTREE",
        fields: [
          { name: "rule_execution_id" },
        ]
      },
      {
        name: "fk_mkt_lender_rule_result_los_application1_idx",
        using: "BTREE",
        fields: [
          { name: "application_id" },
        ]
      },
      {
        name: "fk_los_lender_rule_result_core_workflow_step1_idx",
        using: "BTREE",
        fields: [
          { name: "workflow_step_id" },
        ]
      },
      {
        name: "fk_los_elimination_rule_core_rule_category1_idx",
        using: "BTREE",
        fields: [
          { name: "rule_category_id" },
        ]
      },
    ]
  });
};
