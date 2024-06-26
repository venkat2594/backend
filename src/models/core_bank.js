const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_bank', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    bank_code: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    bank_name: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    micr: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    ifsc: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    iin: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    ach_credit: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    ach_debit: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    apbs: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    dsa: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    bank_type: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_bank',
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
    ]
  });
};
