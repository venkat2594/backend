const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('onb_document', {
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
        model: 'onb_application',
        key: 'id'
      }
    },
    bucket_name: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    file_location: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    provider: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    entity_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'onb_entity',
        key: 'id'
      }
    },
    person_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'onb_person',
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
    ask_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_ask',
        key: 'id'
      }
    },
    bank_account_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'onb_bank_account',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'onb_document',
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
        name: "fk_onb_document_onb_application1_idx",
        using: "BTREE",
        fields: [
          { name: "application_id" },
        ]
      },
      {
        name: "fk_onb_document_onb_entity1_idx",
        using: "BTREE",
        fields: [
          { name: "entity_id" },
        ]
      },
      {
        name: "fk_onb_document_onb_person1_idx",
        using: "BTREE",
        fields: [
          { name: "person_id" },
        ]
      },
      {
        name: "fk_checklist_item_id",
        using: "BTREE",
        fields: [
          { name: "checklist_item_id" },
        ]
      },
      {
        name: "fk_onb_document_core_ask",
        using: "BTREE",
        fields: [
          { name: "ask_id" },
        ]
      },
      {
        name: "fk_onb_document_onb_bank_account",
        using: "BTREE",
        fields: [
          { name: "bank_account_id" },
        ]
      },
    ]
  });
};
