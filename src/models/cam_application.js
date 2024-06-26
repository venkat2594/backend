const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cam_application', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    scope: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    associate_id: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    mobile: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    data: {
      type: DataTypes.JSON,
      allowNull: true
    },
    consent_acquire_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    consent_expire_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cam_application',
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
