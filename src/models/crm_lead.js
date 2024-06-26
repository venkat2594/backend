const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crm_lead', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_product',
        key: 'id'
      }
    },
    first_name: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    mobile: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    company_name: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    job_title: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    data: {
      type: DataTypes.JSON,
      allowNull: true
    },
    source_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    source_id: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'crm_lead',
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
        name: "fk_crm_lead_core_product1_idx",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
    ]
  });
};
