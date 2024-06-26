const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_rule_category', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    scope: {
      type: DataTypes.ENUM('APPLICATION_FLOW','PARTNER_FLOW'),
      allowNull: false
    },
    category_type: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    rule_type: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    loan_type_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_loan_type',
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
    lender_loan_type_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_lender_loan_type',
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
    employment_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    rule_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_rule',
        key: 'id'
      }
    },
    applicable_to: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    fail_message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_rule_category',
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
        name: "fk_core_rule_category_core_lender1_idx",
        using: "BTREE",
        fields: [
          { name: "lender_id" },
        ]
      },
      {
        name: "fk_core_rule_category_core_lender_loan_type1_idx",
        using: "BTREE",
        fields: [
          { name: "lender_loan_type_id" },
        ]
      },
      {
        name: "fk_core_rule_category_core_lender_scheme1_idx",
        using: "BTREE",
        fields: [
          { name: "lender_scheme_id" },
        ]
      },
      {
        name: "fk_core_rule_category_core_rule1_idx",
        using: "BTREE",
        fields: [
          { name: "rule_id" },
        ]
      },
      {
        name: "fk_core_rule_category_loan_type_id",
        using: "BTREE",
        fields: [
          { name: "loan_type_id" },
        ]
      },
    ]
  });
};
