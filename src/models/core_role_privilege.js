const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_role_privilege', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    user_role_id: {
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
    privilege: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_role_privilege',
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
        name: "fk_core_role_privilege_core_user_role1_idx",
        using: "BTREE",
        fields: [
          { name: "user_role_id" },
        ]
      },
    ]
  });
};
