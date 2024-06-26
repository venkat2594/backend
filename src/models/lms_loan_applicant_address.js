const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lms_loan_applicant_address', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    loan_applicant_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'lms_loan_applicant',
        key: 'id'
      }
    },
    type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    area: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    landmark: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    pincode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'lms_loan_applicant_address',
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
        name: "fk_crm_loan_address_crm_loan_applicant1_idx",
        using: "BTREE",
        fields: [
          { name: "loan_applicant_id" },
        ]
      },
    ]
  });
};
