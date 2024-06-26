const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ver_verification_category_rule', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    verification_category_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'ver_verification_category',
        key: 'id'
      }
    },
    allocation_rule_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_rule',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ver_verification_category_rule',
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
        name: "fk_ver_verification_category_rule_ver_verification_category_idx",
        using: "BTREE",
        fields: [
          { name: "verification_category_id" },
        ]
      },
      {
        name: "fk_ver_verification_category_rule_core_rule2_idx",
        using: "BTREE",
        fields: [
          { name: "allocation_rule_id" },
        ]
      },
    ]
  });
};
