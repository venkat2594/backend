const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_lookup_master', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    lu_key: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    lu_name: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    lu_value: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    group_code: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'core_lookup_master',
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
        name: "UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "lu_key" },
          { name: "group_code" },
        ]
      },
    ]
  });
};
