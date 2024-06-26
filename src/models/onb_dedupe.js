const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('onb_dedupe', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    application_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'onb_application',
        key: 'id'
      }
    },
    dedupe_source: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    dedupe_associate_id: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    tags: {
      type: DataTypes.JSON,
      allowNull: true
    },
    task_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_task',
        key: 'id'
      }
    },
    resolved_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    resolved_by: {
      type: DataTypes.BIGINT,
      allowNull: true,
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
    tableName: 'onb_dedupe',
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
        name: "fk_onb_dedupe_onb_application1_idx",
        using: "BTREE",
        fields: [
          { name: "application_id" },
        ]
      },
      {
        name: "fk_onb_dedupe_core_task1_idx",
        using: "BTREE",
        fields: [
          { name: "task_id" },
        ]
      },
      {
        name: "fk_onb_dedupe_core_user1_idx",
        using: "BTREE",
        fields: [
          { name: "resolved_by" },
        ]
      },
    ]
  });
};
