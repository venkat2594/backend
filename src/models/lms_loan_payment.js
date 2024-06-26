const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lms_loan_payment', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    link: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    source: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    payment_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    loan_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'lms_loan_account',
        key: 'id'
      }
    },
    repayment_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'lms_loan_repayment',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'lms_loan_payment',
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
        name: "fk_lsk_payment_lsk_repayment1_idx",
        using: "BTREE",
        fields: [
          { name: "repayment_id" },
        ]
      },
      {
        name: "fk_lsk_payment_crm_loan2_idx",
        using: "BTREE",
        fields: [
          { name: "loan_id" },
        ]
      },
    ]
  });
};
