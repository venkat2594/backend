const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_lender_offer_rule', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    lender_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
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
      allowNull: false,
      references: {
        model: 'core_rule',
        key: 'id'
      }
    },
    offer_rule_type: {
      type: DataTypes.STRING(256),
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
    tableName: 'core_lender_offer_rule',
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
        name: "fk_mkt_offer_rule_core_lender1_idx",
        using: "BTREE",
        fields: [
          { name: "lender_id" },
        ]
      },
      {
        name: "fk_mkt_offer_rule_core_lender_loan_type1_idx",
        using: "BTREE",
        fields: [
          { name: "lender_loan_type_id" },
        ]
      },
      {
        name: "fk_mkt_offer_rule_core_lender_scheme1_idx",
        using: "BTREE",
        fields: [
          { name: "lender_scheme_id" },
        ]
      },
      {
        name: "fk_mkt_offer_rule_core_rule1_idx",
        using: "BTREE",
        fields: [
          { name: "rule_id" },
        ]
      },
    ]
  });
};
