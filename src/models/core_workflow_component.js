const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_workflow_component', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(256),
      allowNull: false,
      unique: "code_UNIQUE"
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    preview_image_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    workflow_type: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    workflow_step_type: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    tags: {
      type: DataTypes.JSON,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_workflow_component',
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
        name: "code_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
};
