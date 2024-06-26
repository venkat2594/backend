const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fin_payout_dump_invoice', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    payout_dump_upload_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'fin_payout_dump_upload',
        key: 'id'
      }
    },
    invoice_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'fin_invoice',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'fin_payout_dump_invoice',
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
        name: "payout_dump_upload_id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "payout_dump_upload_id" },
          { name: "invoice_id" },
        ]
      },
      {
        name: "fk_fin_payout_dump_invoice_fin_payout_dump_upload1_idx",
        using: "BTREE",
        fields: [
          { name: "payout_dump_upload_id" },
        ]
      },
      {
        name: "fk_fin_payout_dump_invoice_fin_invoice1_idx",
        using: "BTREE",
        fields: [
          { name: "invoice_id" },
        ]
      },
    ]
  });
};
