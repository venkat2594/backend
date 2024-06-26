const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_parameter_associate', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    rule_parameter_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_rule_parameter',
        key: 'id'
      }
    },
    associate_type: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    associate_id: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    variable: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_parameter_associate',
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
        name: "fk_core_parameter_associate_core_rule_parameter1_idx",
        using: "BTREE",
        fields: [
          { name: "rule_parameter_id" },
        ]
      },
    ]
  });
};
