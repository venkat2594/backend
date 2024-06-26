const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_role_module_map', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    role_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_user_role',
        key: 'id'
      }
    },
    partner_category: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    module_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_module',
        key: 'id'
      }
    },
    add_permission: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    edit_permission: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    view_permission: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    approve_permission: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    deactivate_permission: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    data_access: {
      type: DataTypes.ENUM('SUBORDINATES_ONLY','ALL'),
      allowNull: true
    },
    allowed_permission: {
      type: DataTypes.JSON,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_role_module_map',
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
        name: "fk_lsk_role_module_map_lsk_role1_idx",
        using: "BTREE",
        fields: [
          { name: "role_id" },
        ]
      },
      {
        name: "fk_lsk_role_module_map_lsk_module1_idx",
        using: "BTREE",
        fields: [
          { name: "module_id" },
        ]
      },
    ]
  });
};
