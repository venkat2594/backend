const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_checklist_item', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    checklist_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_checklist',
        key: 'id'
      }
    },
    document_class_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_document_class',
        key: 'id'
      }
    },
    document_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_document',
        key: 'id'
      }
    },
    group_label: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    rule_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_rule',
        key: 'id'
      }
    },
    sequence: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_mandatory: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_checklist_item',
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
        name: "fk_core_checklist_item_core_checklist1_idx",
        using: "BTREE",
        fields: [
          { name: "checklist_id" },
        ]
      },
      {
        name: "fk_core_checklist_item_core_document_class1_idx",
        using: "BTREE",
        fields: [
          { name: "document_class_id" },
        ]
      },
      {
        name: "fk_core_checklist_item_core_document1_idx",
        using: "BTREE",
        fields: [
          { name: "document_id" },
        ]
      },
      {
        name: "fk_core_checklist_item_core_rule1_idx",
        using: "BTREE",
        fields: [
          { name: "rule_id" },
        ]
      },
    ]
  });
};
