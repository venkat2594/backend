const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('los_application', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    loan_type_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_loan_type',
        key: 'id'
      }
    },
    code: {
      type: DataTypes.STRING(32),
      allowNull: false,
      unique: "code"
    },
    type: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    salutation: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    mobile: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    lead_source: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    external_lead_id: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    external_journey_type: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    external_lead_type: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    external_loan_id: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    submission_mode: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    contact_name: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    loan_amount: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    loan_code: {
      type: DataTypes.STRING(256),
      allowNull: true,
      unique: "loan_code"
    },
    loan_status: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    apply_capacity: {
      type: DataTypes.ENUM('PERSON','ENTITY'),
      allowNull: false
    },
    entity_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    employment_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    data: {
      type: DataTypes.JSON,
      allowNull: true
    },
    origin_platform: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    customer_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_customer',
        key: 'id'
      }
    },
    onboarding_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'onb_application',
        key: 'id'
      }
    },
    sourcing_territory_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_territory',
        key: 'id'
      }
    },
    servicing_territory_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_territory',
        key: 'id'
      }
    },
    data_synced: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'los_application',
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
        name: "code",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "loan_code",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "loan_code" },
        ]
      },
      {
        name: "fk_lsk_lead_lsk_customer1_idx",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
      {
        name: "fk_los_application_core_loan_type1_idx",
        using: "BTREE",
        fields: [
          { name: "loan_type_id" },
        ]
      },
      {
        name: "fk_los_application_onb_application1_idx",
        using: "BTREE",
        fields: [
          { name: "onboarding_id" },
        ]
      },
      {
        name: "fk_sourcing_territory_id",
        using: "BTREE",
        fields: [
          { name: "sourcing_territory_id" },
        ]
      },
      {
        name: "fk_servicing_territory_id",
        using: "BTREE",
        fields: [
          { name: "servicing_territory_id" },
        ]
      },
    ]
  });
};
