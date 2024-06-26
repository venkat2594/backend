const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('los_disbursement_bank_account', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    mode: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    offer_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'los_offer',
        key: 'id'
      }
    },
    bank_account_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    percentage: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'los_disbursement_bank_account',
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
        name: "fk_los_disbursement_bank_account_los_offer1_idx",
        using: "BTREE",
        fields: [
          { name: "offer_id" },
        ]
      },
    ]
  });
};
