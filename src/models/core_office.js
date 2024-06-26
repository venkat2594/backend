const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_office', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    pincode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    area_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_pincode',
        key: 'id'
      }
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
    territory_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_territory',
        key: 'id'
      }
    },
    territory_type_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_territory_type',
        key: 'id'
      }
    },
    latitude: {
      type: DataTypes.DECIMAL(10,8),
      allowNull: true
    },
    longitude: {
      type: DataTypes.DECIMAL(11,8),
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_office',
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
        name: "fk_core_office_core_pincode1_idx",
        using: "BTREE",
        fields: [
          { name: "area_id" },
        ]
      },
      {
        name: "fk_core_office_core_city1_idx",
        using: "BTREE",
        fields: [
          { name: "city_id" },
        ]
      },
      {
        name: "fk_core_office_core_state1_idx",
        using: "BTREE",
        fields: [
          { name: "state_id" },
        ]
      },
      {
        name: "fk_core_office_core_country1_idx",
        using: "BTREE",
        fields: [
          { name: "country_id" },
        ]
      },
      {
        name: "fk_core_office_core_territory1_idx",
        using: "BTREE",
        fields: [
          { name: "territory_id" },
        ]
      },
      {
        name: "fk_core_office_core_territory_type1_idx",
        using: "BTREE",
        fields: [
          { name: "territory_type_id" },
        ]
      },
    ]
  });
};
