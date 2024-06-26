const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_workflow', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    workflow_type_lookup_key: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    allocation_rule_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_rule',
        key: 'id'
      }
    },
    is_default: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    mode: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_workflow',
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
        name: "fk_core_workflow_core_rule1_idx",
        using: "BTREE",
        fields: [
          { name: "allocation_rule_id" },
        ]
      },
    ]
  });
};
