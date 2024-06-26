const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_city', {
    id: {
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
    state_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_state',
        key: 'id'
      }
    },
    country_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_country',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_city',
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
        name: "fk_core_city_core_state1_idx",
        using: "BTREE",
        fields: [
          { name: "state_id" },
        ]
      },
      {
        name: "fk_core_city_core_country1_idx",
        using: "BTREE",
        fields: [
          { name: "country_id" },
        ]
      },
    ]
  });
};
