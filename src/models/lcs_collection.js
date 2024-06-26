const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lcs_collection', {
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
    principal_outstanding_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    interest_outstanding_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    emi_outstanding_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    late_fees: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    total_due_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    total_pending_emi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    settlement_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    recovered_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dpd: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    allocated_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    recovery_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    merchant_name: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    payment_link: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    payment_link_expiry: {
      type: DataTypes.DATE,
      allowNull: true
    },
    lead_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    workflow_instance_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_workflow_instance',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'lcs_collection',
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
        name: "fk_crm_collection_crm_loan1_idx",
        using: "BTREE",
        fields: [
          { name: "loan_id" },
        ]
      },
      {
        name: "fk_lsk_collection_lsk_workflow_instance1_idx",
        using: "BTREE",
        fields: [
          { name: "workflow_instance_id" },
        ]
      },
    ]
  });
};
