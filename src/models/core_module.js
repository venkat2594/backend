const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_module', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    user_type: {
      type: DataTypes.ENUM('CUSTOMER','EMPLOYEE','CHANNEL'),
      allowNull: false
    },
    system: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    parent_module_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_module',
        key: 'id'
      }
    },
    code: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    allowed_permission: {
      type: DataTypes.JSON,
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    icon: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    sequence: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    target: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_module',
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
        name: "fk_core_user_module_core_user_module1_idx",
        using: "BTREE",
        fields: [
          { name: "parent_module_id" },
        ]
      },
    ]
  });
};
