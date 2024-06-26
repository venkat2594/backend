const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_industry_product', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    industry_type_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_industry_type',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'core_industry_product',
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
        name: "fk_core_industry_product_core_industry_type1_idx",
        using: "BTREE",
        fields: [
          { name: "industry_type_id" },
        ]
      },
    ]
  });
};
