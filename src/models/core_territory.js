const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_territory', {
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
    territory_type_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_territory_type',
        key: 'id'
      }
    },
    parent_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_territory',
        key: 'id'
      }
    },
    location_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    location_type_value: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_territory',
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
        name: "fk_core_territory_core_territory1_idx",
        using: "BTREE",
        fields: [
          { name: "parent_id" },
        ]
      },
      {
        name: "fk_core_territory_core_territory_type1_idx",
        using: "BTREE",
        fields: [
          { name: "territory_type_id" },
        ]
      },
    ]
  });
};
