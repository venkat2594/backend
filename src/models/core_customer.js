const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_customer', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    primary_id_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    primary_id: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    secondary_id_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    secondary_id: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_user',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_customer',
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
        name: "fk_core_customer_core_user1_idx",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
