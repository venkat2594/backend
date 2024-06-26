const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cam_bureau_analysis', {
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
    pan_number: {
      type: DataTypes.STRING(10),
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
    bureau_stage: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    credit_score: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    total_active_accounts: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    total_closed_accounts: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    total_outstanding_amount: {
      type: DataTypes.DECIMAL(15,3),
      allowNull: true
    },
    external_id: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    expiry_date: {
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
    tableName: 'cam_bureau_analysis',
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
        name: "fk_onb_bank_statement_processing_onb_application10_idx",
        using: "BTREE",
        fields: [
          { name: "application_id" },
        ]
      },
    ]
  });
};
