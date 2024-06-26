const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_loan_type', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    loan_category: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    code: {
      type: DataTypes.STRING(64),
      allowNull: false,
      unique: "code_UNIQUE"
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    sequence: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    apply_capacity: {
      type: DataTypes.JSON,
      allowNull: true
    },
    employment_type: {
      type: DataTypes.JSON,
      allowNull: true
    },
    configuration: {
      type: DataTypes.JSON,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_loan_type',
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
        name: "code_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
};
