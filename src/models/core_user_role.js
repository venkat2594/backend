const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_user_role', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    user_type: {
      type: DataTypes.ENUM('CUSTOMER','EMPLOYEE','CHANNEL'),
      allowNull: false
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
    parent_role_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_user_role',
        key: 'id'
      }
    },
    data_access: {
      type: DataTypes.ENUM('ALL','SUBORDINATES_ONLY'),
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_user_role',
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
        name: "parent_role_id",
        using: "BTREE",
        fields: [
          { name: "parent_role_id" },
        ]
      },
    ]
  });
};
