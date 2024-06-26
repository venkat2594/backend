const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_lender', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    lender_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    sequence: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    logo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    gst_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_lender',
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
