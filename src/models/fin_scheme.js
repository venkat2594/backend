const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fin_scheme', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    lender_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_lender',
        key: 'id'
      }
    },
    loan_type_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_loan_type',
        key: 'id'
      }
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    mode: {
      type: DataTypes.ENUM('PAYABLE','RECEIVABALE'),
      allowNull: false
    },
    payout_rate: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    computation_type: {
      type: DataTypes.ENUM('FLAT','PERCENTAGE'),
      allowNull: false
    },
    computation_range: {
      type: DataTypes.ENUM('SLAB','SINGLE'),
      allowNull: false
    },
    is_recurring: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_addon: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    payout_applies_on: {
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
    is_published: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'fin_scheme',
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
        name: "fk_fin_scheme_core_lender1_idx",
        using: "BTREE",
        fields: [
          { name: "lender_id" },
        ]
      },
      {
        name: "fk_fin_scheme_core_loan_type1_idx",
        using: "BTREE",
        fields: [
          { name: "loan_type_id" },
        ]
      },
      {
        name: "fk_fin_scheme_core_rule1_idx",
        using: "BTREE",
        fields: [
          { name: "rule_id" },
        ]
      },
    ]
  });
};
