const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fin_payout_dump_upload', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    core_lender_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_lender',
        key: 'id'
      }
    },
    core_loan_type_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_loan_type',
        key: 'id'
      }
    },
    month: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    filename: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    is_invoiced: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'fin_payout_dump_upload',
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
        name: "fk_fin_payout_dump_upload_core_lender1_idx",
        using: "BTREE",
        fields: [
          { name: "core_lender_id" },
        ]
      },
      {
        name: "fk_fin_payout_dump_upload_core_loan_type1_idx",
        using: "BTREE",
        fields: [
          { name: "core_loan_type_id" },
        ]
      },
    ]
  });
};
