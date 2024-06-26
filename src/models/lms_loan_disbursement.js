const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lms_loan_disbursement', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    loan_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'lms_loan_account',
        key: 'id'
      }
    },
    interest_rate: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    offer_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    term_length: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    processing_fee: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    disbursement_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    disbursement_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    credit_account_number: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    credit_account_holder_name: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    credit_account_holder_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    credit_bank_name: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    credit_bank_ifsc_code: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'lms_loan_disbursement',
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
        name: "fk_lsk_disbursement_crm_loan1_idx",
        using: "BTREE",
        fields: [
          { name: "loan_id" },
        ]
      },
    ]
  });
};
