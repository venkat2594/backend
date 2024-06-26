const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ver_verification_file', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    verification_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'ver_verification',
        key: 'id'
      }
    },
    verification_activity_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'ver_verification_activity',
        key: 'id'
      }
    },
    file: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    latitude: {
      type: DataTypes.DECIMAL(10,8),
      allowNull: true
    },
    longitude: {
      type: DataTypes.DECIMAL(11,8),
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ver_verification_file',
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
        name: "fk_verification_file_verification_activity1_idx",
        using: "BTREE",
        fields: [
          { name: "verification_activity_id" },
        ]
      },
      {
        name: "fk_ver_verification_file_ver_verification1_idx",
        using: "BTREE",
        fields: [
          { name: "verification_id" },
        ]
      },
    ]
  });
};
