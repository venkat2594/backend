const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_user_territory_lender', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    lender_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_lender',
        key: 'id'
      }
    },
    user_territory_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_user_territory',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_user_territory_lender',
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
        name: "lender_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "lender_id" },
          { name: "user_territory_id" },
        ]
      },
      {
        name: "lender_id_2",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "lender_id" },
          { name: "user_territory_id" },
        ]
      },
      {
        name: "fk_core_employee_territory_lender_core_lender1_idx",
        using: "BTREE",
        fields: [
          { name: "lender_id" },
        ]
      },
      {
        name: "fk_core_user_territory_lender_core_user_territory1_idx",
        using: "BTREE",
        fields: [
          { name: "user_territory_id" },
        ]
      },
    ]
  });
};
