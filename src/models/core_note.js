const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_note', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    scope: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    reference_id: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    child_reference_id: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    code: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    sub_code: {
      type: DataTypes.JSON,
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pending_with: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    pending_with_id: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    parent_note_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_note',
        key: 'id'
      }
    },
    created_user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_user',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_note',
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
        name: "fk_core_note_core_user1_idx",
        using: "BTREE",
        fields: [
          { name: "created_user_id" },
        ]
      },
      {
        name: "fk_core_note_core_note1_idx",
        using: "BTREE",
        fields: [
          { name: "parent_note_id" },
        ]
      },
    ]
  });
};
