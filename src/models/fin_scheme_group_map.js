const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fin_scheme_group_map', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    scheme_group_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'fin_scheme_group',
        key: 'id'
      }
    },
    scheme_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'fin_scheme',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'fin_scheme_group_map',
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
        name: "scheme_group_id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "scheme_group_id" },
          { name: "scheme_id" },
        ]
      },
      {
        name: "fk_fin_scheme_group_map_fin_scheme_group1_idx",
        using: "BTREE",
        fields: [
          { name: "scheme_group_id" },
        ]
      },
      {
        name: "fk_fin_scheme_group_map_fin_scheme1_idx",
        using: "BTREE",
        fields: [
          { name: "scheme_id" },
        ]
      },
    ]
  });
};
