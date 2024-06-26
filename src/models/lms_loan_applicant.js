const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lms_loan_applicant', {
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
    applicant_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    relationship_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    mobile: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(31),
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
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    company_name: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    contact_person: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'lms_loan_applicant',
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
        name: "fk_crm_loan_applicant_crm_loan1_idx",
        using: "BTREE",
        fields: [
          { name: "loan_id" },
        ]
      },
    ]
  });
};
