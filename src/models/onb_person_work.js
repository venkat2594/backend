const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('onb_person_work', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    company_name: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    company_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    designation: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    total_experience: {
      type: DataTypes.DECIMAL(3,1),
      allowNull: true
    },
    current_experience: {
      type: DataTypes.DECIMAL(3,1),
      allowNull: true
    },
    epf_deduction: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    salary_mode: {
      type: DataTypes.STRING(256),
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
    person_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'onb_person',
        key: 'id'
      }
    },
    address_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'onb_address',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'onb_person_work',
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
        name: "fk_los_applicant_work_core_industry_type1_idx",
        using: "BTREE",
        fields: [
          { name: "industry_type_id" },
        ]
      },
      {
        name: "fk_los_applicant_work_core_industry_product1_idx",
        using: "BTREE",
        fields: [
          { name: "industry_product_id" },
        ]
      },
      {
        name: "fk_onb_person_work_onb_person1_idx",
        using: "BTREE",
        fields: [
          { name: "person_id" },
        ]
      },
      {
        name: "fk_onb_person_work_onb_address1_idx",
        using: "BTREE",
        fields: [
          { name: "address_id" },
        ]
      },
    ]
  });
};
