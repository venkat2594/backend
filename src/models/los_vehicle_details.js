const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('los_vehicle_details', {
    id: {
      autoIncrement: true,
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
    make: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    model: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    year: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    vin: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    price: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    estimated_value: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'los_vehicle_details',
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
        name: "fk_lsk_vehicle_details_lsk_lead1_idx",
        using: "BTREE",
        fields: [
          { name: "application_id" },
        ]
      },
    ]
  });
};
