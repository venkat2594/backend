const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_user_territory', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    territory_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_territory',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_user',
        key: 'id'
      }
    },
    all_lender_enabled: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_user_territory',
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
        name: "territory_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "territory_id" },
          { name: "user_id" },
        ]
      },
      {
        name: "territory_id_2",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "territory_id" },
          { name: "user_id" },
        ]
      },
      {
        name: "fk_core_employee_territory_core_territory1_idx",
        using: "BTREE",
        fields: [
          { name: "territory_id" },
        ]
      },
      {
        name: "fk_core_user_territory_core_user1_idx",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
