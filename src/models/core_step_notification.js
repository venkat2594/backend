const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_step_notification', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    step_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_workflow_step',
        key: 'id'
      }
    },
    notification_template_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'core_step_notification',
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
        name: "fk_lsk_notification_lsk_step1_idx",
        using: "BTREE",
        fields: [
          { name: "step_id" },
        ]
      },
    ]
  });
};
