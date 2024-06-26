const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_rule_execution', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    rule_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_rule',
        key: 'id'
      }
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
    response: {
      type: DataTypes.JSON,
      allowNull: true
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_rule_execution',
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
        name: "fk_lsk_rule_execution_lsk_rule1_idx",
        using: "BTREE",
        fields: [
          { name: "rule_id" },
        ]
      },
    ]
  });
};
