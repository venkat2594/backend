const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('los_applied_rule', {
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
    category_type: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    rule_type: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    rule_execution_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
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
    lender_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_lender',
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
    lender_scheme_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_lender_scheme',
        key: 'id'
      }
    },
    loan_type_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_loan_type',
        key: 'id'
      }
    },
    onboarding_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'onb_application',
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
      allowNull: true
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'los_applied_rule',
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
        name: "fk_los_lender_applied_rule_core_rule_category1_idx",
        using: "BTREE",
        fields: [
          { name: "rule_category_id" },
        ]
      },
      {
        name: "fk_los_lender_applied_rule_core_rule_execution1_idx",
        using: "BTREE",
        fields: [
          { name: "rule_execution_id" },
        ]
      },
      {
        name: "fk_los_lender_applied_rule_los_application1_idx",
        using: "BTREE",
        fields: [
          { name: "application_id" },
        ]
      },
      {
        name: "fk_los_lender_applied_rule_core_lender1_idx",
        using: "BTREE",
        fields: [
          { name: "lender_id" },
        ]
      },
      {
        name: "fk_los_lender_applied_rule_core_task1_idx",
        using: "BTREE",
        fields: [
          { name: "task_id" },
        ]
      },
      {
        name: "fk_los_applied_rule_core_lender_scheme1_idx",
        using: "BTREE",
        fields: [
          { name: "lender_scheme_id" },
        ]
      },
      {
        name: "fk_los_applied_rule_core_loan_type1_idx",
        using: "BTREE",
        fields: [
          { name: "loan_type_id" },
        ]
      },
      {
        name: "fk_los_applied_rule_onb_application1_idx",
        using: "BTREE",
        fields: [
          { name: "onboarding_id" },
        ]
      },
    ]
  });
};
