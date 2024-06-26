const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_template', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    module: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    service_type: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    template: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    service_provider_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_service_provider',
        key: 'id'
      }
    },
    template_id: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    flow_id: {
      type: DataTypes.STRING(128),
      allowNull: true
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
    tableName: 'core_template',
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
        name: "fk_lsk_template_lsk_service_provider1_idx",
        using: "BTREE",
        fields: [
          { name: "service_provider_id" },
        ]
      },
    ]
  });
};
