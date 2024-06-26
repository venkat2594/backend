const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('los_offer', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    scheme_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_lender_scheme',
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
    application_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'los_application',
        key: 'id'
      }
    },
    application_loan_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'los_application_loan',
        key: 'id'
      }
    },
    instalment_type: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    sanction_amount: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    purpose_of_loan: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    tenure: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rate_of_interest: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    interest_type: {
      type: DataTypes.STRING(128),
      allowNull: true,
      comment: "Flat - Floating -Reducing"
    },
    instalment_amount: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    instalment_start_date: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    instalment_schedule: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    repayment_period: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    processing_amount: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    processing_percentage: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    loan_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'lms_loan_account',
        key: 'id'
      }
    },
    reject_reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    lender_status: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    disbursed_amount: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    total_repayment_amount: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    offer_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    offer_source: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    previous_offer_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'los_offer',
        key: 'id'
      }
    },
    reference_appeal_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'los_appeal',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'los_offer',
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
        name: "fk_lsk_offer_lsk_scheme1_idx",
        using: "BTREE",
        fields: [
          { name: "scheme_id" },
        ]
      },
      {
        name: "fk_lsk_offer_lsk_lender1_idx",
        using: "BTREE",
        fields: [
          { name: "lender_id" },
        ]
      },
      {
        name: "fk_lsk_offer_lsk_lead1_idx",
        using: "BTREE",
        fields: [
          { name: "application_id" },
        ]
      },
      {
        name: "fk_lsk_offer_crm_loan1_idx",
        using: "BTREE",
        fields: [
          { name: "loan_id" },
        ]
      },
      {
        name: "fk_los_offer_los_application_loan1_idx",
        using: "BTREE",
        fields: [
          { name: "application_loan_id" },
        ]
      },
      {
        name: "fk_los_offer_los_appeal1_idx",
        using: "BTREE",
        fields: [
          { name: "reference_appeal_id" },
        ]
      },
      {
        name: "fk_los_offer_los_offer1_idx",
        using: "BTREE",
        fields: [
          { name: "previous_offer_id" },
        ]
      },
    ]
  });
};
