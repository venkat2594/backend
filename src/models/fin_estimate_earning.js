const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fin_estimate_earning', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    mode: {
      type: DataTypes.ENUM('PAYABLE','RECEIVABLE'),
      allowNull: false
    },
    application_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'los_application',
        key: 'id'
      }
    },
    employee_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_employee',
        key: 'id'
      }
    },
    channel_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_channel',
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
    scheme_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'fin_scheme',
        key: 'id'
      }
    },
    payout_rate: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    payout_amount: {
      type: DataTypes.DOUBLE,
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
    loan_type_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_loan_type',
        key: 'id'
      }
    },
    sourcing_territory_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_territory',
        key: 'id'
      }
    },
    servicing_territory_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_territory',
        key: 'id'
      }
    },
    processing_fee: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    interest: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    emi: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    principal: {
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
    repayment_cycle_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'fin_estimate_earning',
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
        name: "fk_fin_estimate_earning_los_application1_idx",
        using: "BTREE",
        fields: [
          { name: "application_id" },
        ]
      },
      {
        name: "fk_fin_estimate_earning_core_employee1_idx",
        using: "BTREE",
        fields: [
          { name: "employee_id" },
        ]
      },
      {
        name: "fk_fin_estimate_earning_core_channel1_idx",
        using: "BTREE",
        fields: [
          { name: "channel_id" },
        ]
      },
      {
        name: "fk_fin_estimate_earning_fin_scheme1_idx",
        using: "BTREE",
        fields: [
          { name: "scheme_id" },
        ]
      },
      {
        name: "fk_fin_estimate_earning_core_lender1_idx",
        using: "BTREE",
        fields: [
          { name: "lender_id" },
        ]
      },
      {
        name: "fk_fin_estimate_earning_core_loan_type1_idx",
        using: "BTREE",
        fields: [
          { name: "loan_type_id" },
        ]
      },
      {
        name: "fk_fin_estimate_earning_core_territory1_idx",
        using: "BTREE",
        fields: [
          { name: "sourcing_territory_id" },
        ]
      },
      {
        name: "fk_fin_estimate_earning_core_territory2_idx",
        using: "BTREE",
        fields: [
          { name: "servicing_territory_id" },
        ]
      },
    ]
  });
};
