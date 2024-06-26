const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('los_offer_rule', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    offer_rule_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_lender_offer_rule',
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
    rule_execution_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_rule_execution',
        key: 'id'
      }
    },
    offer_rule_type: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    workflow_step_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_workflow_step',
        key: 'id'
      }
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
    assign_value: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'los_offer_rule',
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
        name: "fk_mkt_offer_rule_result_mkt_offer_rule1_idx",
        using: "BTREE",
        fields: [
          { name: "offer_rule_id" },
        ]
      },
      {
        name: "fk_mkt_offer_rule_result_los_application1_idx",
        using: "BTREE",
        fields: [
          { name: "application_id" },
        ]
      },
      {
        name: "fk_mkt_offer_rule_result_core_rule_execution1_idx",
        using: "BTREE",
        fields: [
          { name: "rule_execution_id" },
        ]
      },
      {
        name: "fk_mkt_offer_rule_result_core_workflow_step1_idx",
        using: "BTREE",
        fields: [
          { name: "workflow_step_id" },
        ]
      },
    ]
  });
};
