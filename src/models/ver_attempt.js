const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ver_attempt', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    attempt_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    verification_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'ver_verification',
        key: 'id'
      }
    },
    latitude: {
      type: DataTypes.DECIMAL(10,8),
      allowNull: true
    },
    longitude: {
      type: DataTypes.DECIMAL(11,8),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    outcome: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    recommendation_flag: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    report_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ver_attempt',
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
        name: "fk_ver_attempt_ver_verification1_idx",
        using: "BTREE",
        fields: [
          { name: "verification_id" },
        ]
      },
    ]
  });
};
