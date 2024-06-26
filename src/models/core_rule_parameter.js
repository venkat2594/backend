const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_rule_parameter', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(256),
      allowNull: true,
      unique: "rule_parameter_code_unique"
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    type_lookup_key: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    source: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    source_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    param_field: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    param_index: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    operators_allowed: {
      type: DataTypes.JSON,
      allowNull: true
    },
    reference_table: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    reference_label: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    reference_column: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    reference_condition: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    computed_params: {
      type: DataTypes.JSON,
      allowNull: true
    },
    operation: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    conditions: {
      type: DataTypes.JSON,
      allowNull: true
    },
    api_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sample_response: {
      type: DataTypes.JSON,
      allowNull: true
    },
    param_value: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    aggregate_operator: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_rule_parameter',
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
        name: "rule_parameter_code_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
};
