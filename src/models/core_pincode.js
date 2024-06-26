const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_pincode', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pincode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    area: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    latitude: {
      type: DataTypes.DECIMAL(10,8),
      allowNull: true
    },
    longitude: {
      type: DataTypes.DECIMAL(11,8),
      allowNull: true
    },
    city_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_city',
        key: 'id'
      }
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
    tableName: 'core_pincode',
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
        name: "pincode_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pincode" },
          { name: "area" },
        ]
      },
      {
        name: "fk_core_pincode_core_city1_idx",
        using: "BTREE",
        fields: [
          { name: "city_id" },
        ]
      },
      {
        name: "fk_core_pincode_core_state1_idx",
        using: "BTREE",
        fields: [
          { name: "state_id" },
        ]
      },
      {
        name: "fk_core_pincode_core_country1_idx",
        using: "BTREE",
        fields: [
          { name: "country_id" },
        ]
      },
    ]
  });
};
