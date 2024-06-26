const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_channel_loan_type', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    loan_type_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_loan_type',
        key: 'id'
      }
    },
    channel_territory_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_channel_territory',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_channel_loan_type',
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
        name: "fk_core_employee_territory_loan_type_core_loan_type1_idx",
        using: "BTREE",
        fields: [
          { name: "loan_type_id" },
        ]
      },
      {
        name: "fk_channel_loan_type_channel_territory",
        using: "BTREE",
        fields: [
          { name: "channel_territory_id" },
        ]
      },
    ]
  });
};
