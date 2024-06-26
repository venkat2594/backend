const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_territory_type', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
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
    level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    parent_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_territory_type',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_territory_type',
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
          { name: "code" },
          { name: "level" },
        ]
      },
      {
        name: "fk_core_territory_type_core_territory_type1_idx",
        using: "BTREE",
        fields: [
          { name: "parent_id" },
        ]
      },
    ]
  });
};
