const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_user_territory_loan_type_scope', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_user',
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
    loan_type_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_loan_type',
        key: 'id'
      }
    },
    lender_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_lender',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_user_territory_loan_type_scope',
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
        name: "user_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
          { name: "territory_id" },
          { name: "loan_type_id" },
          { name: "lender_id" },
        ]
      },
      {
        name: "user_id_2",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
          { name: "territory_id" },
          { name: "loan_type_id" },
          { name: "lender_id" },
        ]
      },
      {
        name: "fk_core_employee_territory_loan_type_scope_core_territory1_idx",
        using: "BTREE",
        fields: [
          { name: "territory_id" },
        ]
      },
      {
        name: "fk_core_employee_territory_loan_type_scope_core_territory_t_idx",
        using: "BTREE",
        fields: [
          { name: "territory_type_id" },
        ]
      },
      {
        name: "fk_core_employee_territory_loan_type_scope_core_loan_type1_idx",
        using: "BTREE",
        fields: [
          { name: "loan_type_id" },
        ]
      },
      {
        name: "fk_core_user_territory_loan_type_scope_core_user1_idx",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "fk_core_user_territory_loan_type_scope_core_lender1",
        using: "BTREE",
        fields: [
          { name: "lender_id" },
        ]
      },
    ]
  });
};
