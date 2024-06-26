const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fin_invoice_item', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    invoice_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'fin_invoice',
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
    loan_type_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_loan_type',
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
    loan_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    disbursement_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    disbursement_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    payout_rate: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    payout_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tax_details: {
      type: DataTypes.JSON,
      allowNull: true
    },
    tax_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    net_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    is_addon: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    is_recurring: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'fin_invoice_item',
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
        name: "fk_fin_invoice_item_fin_invoice1_idx",
        using: "BTREE",
        fields: [
          { name: "invoice_id" },
        ]
      },
      {
        name: "fk_fin_invoice_item_core_lender1_idx",
        using: "BTREE",
        fields: [
          { name: "lender_id" },
        ]
      },
      {
        name: "fk_fin_invoice_item_core_loan_type1_idx",
        using: "BTREE",
        fields: [
          { name: "loan_type_id" },
        ]
      },
      {
        name: "fk_fin_invoice_item_los_application1_idx",
        using: "BTREE",
        fields: [
          { name: "application_id" },
        ]
      },
    ]
  });
};
