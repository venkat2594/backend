const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cam_bank_analysis', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    application_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'cam_application',
        key: 'id'
      }
    },
    entity_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'onb_entity',
        key: 'id'
      }
    },
    person_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'onb_person',
        key: 'id'
      }
    },
    bank_account_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'onb_bank_account',
        key: 'id'
      }
    },
    document_id: {
      type: DataTypes.JSON,
      allowNull: true
    },
    request_data: {
      type: DataTypes.JSON,
      allowNull: true
    },
    response_data: {
      type: DataTypes.JSON,
      allowNull: true
    },
    computed_data: {
      type: DataTypes.JSON,
      allowNull: true
    },
    transaction_data: {
      type: DataTypes.JSON,
      allowNull: true
    },
    total_debits: {
      type: DataTypes.DECIMAL(15,3),
      allowNull: true
    },
    total_credits: {
      type: DataTypes.DECIMAL(15,3),
      allowNull: true
    },
    average_monthly_balance: {
      type: DataTypes.DECIMAL(15,3),
      allowNull: true
    },
    salary_identified: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    salary_amount: {
      type: DataTypes.DECIMAL(15,3),
      allowNull: true
    },
    statement_start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    statement_end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    work_order_id: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cam_bank_analysis',
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
        name: "fk_onb_bank_statement_processing_onb_entity1_idx",
        using: "BTREE",
        fields: [
          { name: "entity_id" },
        ]
      },
      {
        name: "fk_onb_bank_statement_processing_onb_person1_idx",
        using: "BTREE",
        fields: [
          { name: "person_id" },
        ]
      },
      {
        name: "fk_onb_bank_statement_processing_onb_application1_idx",
        using: "BTREE",
        fields: [
          { name: "application_id" },
        ]
      },
      {
        name: "fk_cam_bank_analysis_onb_bank_account",
        using: "BTREE",
        fields: [
          { name: "bank_account_id" },
        ]
      },
    ]
  });
};
