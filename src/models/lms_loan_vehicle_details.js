const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lms_loan_vehicle_details', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    loan_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'lms_loan_account',
        key: 'id'
      }
    },
    make: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    model: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vin: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    estimated_value: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'lms_loan_vehicle_details',
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
        name: "fk_crm_loan_vehicle_details_crm_loan1_idx",
        using: "BTREE",
        fields: [
          { name: "loan_id" },
        ]
      },
    ]
  });
};
