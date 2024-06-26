const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_ask_summary', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    scope: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    associate_id: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    created_by_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_user',
        key: 'id'
      }
    },
    resolved_by_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_user',
        key: 'id'
      }
    },
    lender_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_lender',
        key: 'id'
      }
    },
    lender_apply_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'los_application_lender_apply',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_ask_summary',
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
        name: "fk_core_ask_summary_core_user1_idx",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "fk_core_ask_summary_core_user2_idx",
        using: "BTREE",
        fields: [
          { name: "resolved_by_id" },
        ]
      },
      {
        name: "fk_core_ask_summary_core_lender1",
        using: "BTREE",
        fields: [
          { name: "lender_id" },
        ]
      },
      {
        name: "fk_core_ask_summary_los_application_lender_apply1",
        using: "BTREE",
        fields: [
          { name: "lender_apply_id" },
        ]
      },
    ]
  });
};
