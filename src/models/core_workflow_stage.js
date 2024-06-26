const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_workflow_stage', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    workflow_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_workflow',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sequence: {
      type: DataTypes.TINYINT,
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
    validation_rule_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    configuration: {
      type: DataTypes.JSON,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'core_workflow_stage',
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
        name: "fk_lsk_stage_lsk_workflow1_idx",
        using: "BTREE",
        fields: [
          { name: "workflow_id" },
        ]
      },
      {
        name: "fk_core_stage_core_rule1_idx",
        using: "BTREE",
        fields: [
          { name: "allocation_rule_id" },
        ]
      },
    ]
  });
};
