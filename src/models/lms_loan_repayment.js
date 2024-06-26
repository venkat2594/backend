const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lms_loan_repayment', {
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
    emi_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    interest_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    principal_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    due_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    payment_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    late_payment_penalty: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    total_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    paid_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    payment_status: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'lms_loan_repayment',
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
        name: "fk_lsk_payment_crm_loan1_idx",
        using: "BTREE",
        fields: [
          { name: "loan_id" },
        ]
      },
    ]
  });
};
