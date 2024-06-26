const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_rule', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(256),
      allowNull: true,
      unique: "rule_code_unique"
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    rule: {
      type: DataTypes.JSON,
      allowNull: false
    },
    validation_params: {
      type: DataTypes.JSON,
      allowNull: false
    },
    output_params: {
      type: DataTypes.JSON,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_rule',
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
        name: "rule_code_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
};
