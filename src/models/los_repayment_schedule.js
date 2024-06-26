const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('los_repayment_schedule', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    offer_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'los_offer',
        key: 'id'
      }
    },
    interest_type: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    rate_of_interest: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false
    },
    instalment_no: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    outstanding_amount: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    principal_amount: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    interest_amount: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    instalment_amount: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'los_repayment_schedule',
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
        name: "fk_los_repayment_schedule_los_offer1_idx",
        using: "BTREE",
        fields: [
          { name: "offer_id" },
        ]
      },
    ]
  });
};
