const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('los_charge_and_fees', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    offer_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'los_offer',
        key: 'id'
      }
    },
    calculation_type: {
      type: DataTypes.STRING(64),
      allowNull: false,
      comment: "Flat, Percentage"
    },
    cf_value: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    cf_type: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    cf_amount: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    tax_name: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    tax_value: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false
    },
    tax_amount: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'los_charge_and_fees',
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
        name: "fk_los_charge_and_fees_los_offer1_idx",
        using: "BTREE",
        fields: [
          { name: "offer_id" },
        ]
      },
    ]
  });
};
