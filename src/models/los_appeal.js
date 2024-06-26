const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('los_appeal', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    offer_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'los_offer',
        key: 'id'
      }
    },
    appeal_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    appeal_data: {
      type: DataTypes.JSON,
      allowNull: false
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    decision_date: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    decision: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_employee',
        key: 'id'
      }
    },
    assigned_to: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_employee',
        key: 'id'
      }
    },
    task_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_task',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'los_appeal',
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
        name: "fk_los_appeal_los_offer1_idx",
        using: "BTREE",
        fields: [
          { name: "offer_id" },
        ]
      },
      {
        name: "fk_los_appeal_core_employee1_idx",
        using: "BTREE",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "fk_los_appeal_core_employee2_idx",
        using: "BTREE",
        fields: [
          { name: "assigned_to" },
        ]
      },
      {
        name: "fk_los_appeal_core_task1_idx",
        using: "BTREE",
        fields: [
          { name: "task_id" },
        ]
      },
    ]
  });
};
