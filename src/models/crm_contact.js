const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crm_contact', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    mobile: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    company_name: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    job_title: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'crm_contact',
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
    ]
  });
};
