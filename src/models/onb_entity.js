const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('onb_entity', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    applicant_type: {
      type: DataTypes.ENUM('PRIMARY','CO_APPLICANT','GUARANTOR'),
      allowNull: true
    },
    application_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'onb_application',
        key: 'id'
      }
    },
    entity_type: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    legal_name: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    trade_name: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    primary_id_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    primary_id: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    secondary_id_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    secondary_id: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    nature_of_business: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    business_vintage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    incorporation_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    last_year_profit: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    last_year_turnover: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    annual_income: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    monthly_sale: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    data: {
      type: DataTypes.JSON,
      allowNull: true
    },
    monthly_emi: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    industry_type_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_industry_type',
        key: 'id'
      }
    },
    industry_product_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_industry_product',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'onb_entity',
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
        name: "fk_los_applicant_entity_core_industry_type1_idx",
        using: "BTREE",
        fields: [
          { name: "industry_type_id" },
        ]
      },
      {
        name: "fk_los_applicant_entity_core_industry_product1_idx",
        using: "BTREE",
        fields: [
          { name: "industry_product_id" },
        ]
      },
      {
        name: "fk_onb_entity_onb_application1_idx",
        using: "BTREE",
        fields: [
          { name: "application_id" },
        ]
      },
    ]
  });
};
