const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_lender_scheme', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    loan_type_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_loan_type',
        key: 'id'
      }
    },
    sub_loan_type_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_sub_loan_type',
        key: 'id'
      }
    },
    lender_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_lender',
        key: 'id'
      }
    },
    emi_date: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cutoff_date: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    min_loan_amount: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    max_loan_amount: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    min_tenure: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    max_tenure: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    min_rate_of_interest: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    max_rate_of_interest: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    interest_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'core_lender_scheme',
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
        name: "fk_scheme_lsk_loan_type1_idx",
        using: "BTREE",
        fields: [
          { name: "loan_type_id" },
        ]
      },
      {
        name: "fk_scheme_lsk_lender1_idx",
        using: "BTREE",
        fields: [
          { name: "lender_id" },
        ]
      },
      {
        name: "fk_lender_scheme_sub_loan_type",
        using: "BTREE",
        fields: [
          { name: "sub_loan_type_id" },
        ]
      },
    ]
  });
};
