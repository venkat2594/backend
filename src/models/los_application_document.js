const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('los_application_document', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    document_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_document',
        key: 'id'
      }
    },
    application_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'los_application',
        key: 'id'
      }
    },
    document_class_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_document_class',
        key: 'id'
      }
    },
    checklist_item_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_checklist_item',
        key: 'id'
      }
    },
    file_location: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    provider: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    reference_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    reference_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'los_application_document',
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
        name: "fk_los_application_document_core_document1_idx",
        using: "BTREE",
        fields: [
          { name: "document_id" },
        ]
      },
      {
        name: "fk_los_application_document_los_application1_idx",
        using: "BTREE",
        fields: [
          { name: "application_id" },
        ]
      },
      {
        name: "fk_los_application_document_core_checklist_item1_idx",
        using: "BTREE",
        fields: [
          { name: "checklist_item_id" },
        ]
      },
      {
        name: "fk_los_application_document_core_document_class1_idx",
        using: "BTREE",
        fields: [
          { name: "document_class_id" },
        ]
      },
    ]
  });
};
