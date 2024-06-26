const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fin_scheme_group', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    fin_parent_category_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'fin_parent_category',
        key: 'id'
      }
    },
    core_territory_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_territory',
        key: 'id'
      }
    },
    is_standard_plan: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    reference_scheme_group_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'fin_scheme_group',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'fin_scheme_group',
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
        name: "fk_fin_scheme_group_fin_parent_category1_idx",
        using: "BTREE",
        fields: [
          { name: "fin_parent_category_id" },
        ]
      },
      {
        name: "fk_fin_scheme_group_core_territory1_idx",
        using: "BTREE",
        fields: [
          { name: "core_territory_id" },
        ]
      },
      {
        name: "fk_fin_scheme_group_fin_scheme_group1_idx",
        using: "BTREE",
        fields: [
          { name: "reference_scheme_group_id" },
        ]
      },
    ]
  });
};
