const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lms_loan_account', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    loan_account_no: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    loan_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    product_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    emi_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tenure: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    interest: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    loan_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    loan_sanction_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    loan_end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    backed_by_surety: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    security_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    lender_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_lender',
        key: 'id'
      }
    },
    customer_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_customer',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'lms_loan_account',
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
        name: "fk_crm_loan_lsk_lender1_idx",
        using: "BTREE",
        fields: [
          { name: "lender_id" },
        ]
      },
      {
        name: "fk_crm_loan_lsk_customer1_idx",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
    ]
  });
};
