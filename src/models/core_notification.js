const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_notification', {
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
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    medium: {
      type: DataTypes.JSON,
      allowNull: true
    },
    task_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    execute_step_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    configuration: {
      type: DataTypes.JSON,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_notification',
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
    ]
  });
};
