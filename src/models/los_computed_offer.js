const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('los_computed_offer', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
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
      allowNull: true,
      references: {
        model: 'core_loan_type',
        key: 'id'
      }
    },
    lender_scheme_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_lender_scheme',
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
    workflow_step_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_workflow_step',
        key: 'id'
      }
    },
    selection_status: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    formula_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    formula_value: {
      type: DataTypes.DECIMAL(5,2),
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
    tenure: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    interest_rate: {
      type: DataTypes.DECIMAL(5,2),
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
    offer_loan_amount: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    emi_amount: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    computed_by: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    offer_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'los_computed_offer',
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
        name: "fk_mkt_offer_computed_result_core_lender1_idx",
        using: "BTREE",
        fields: [
          { name: "lender_id" },
        ]
      },
      {
        name: "fk_mkt_offer_computed_result_core_lender_scheme1_idx",
        using: "BTREE",
        fields: [
          { name: "lender_scheme_id" },
        ]
      },
      {
        name: "fk_mkt_offer_computed_result_los_application1_idx",
        using: "BTREE",
        fields: [
          { name: "application_id" },
        ]
      },
      {
        name: "fk_mkt_offer_computed_result_core_workflow_step1_idx",
        using: "BTREE",
        fields: [
          { name: "workflow_step_id" },
        ]
      },
      {
        name: "fk_mkt_offer_computed_result_core_loan_type1_idx",
        using: "BTREE",
        fields: [
          { name: "loan_type_id" },
        ]
      },
    ]
  });
};
