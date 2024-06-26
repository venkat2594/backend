const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('los_application_property', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    application_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'los_application',
        key: 'id'
      }
    },
    address: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    area_sqft: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    appraisal_date: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'los_application_property',
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
        name: "fk_lsk_property_lsk_lead1_idx",
        using: "BTREE",
        fields: [
          { name: "application_id" },
        ]
      },
    ]
  });
};
