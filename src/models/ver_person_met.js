const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ver_person_met', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    mobile: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    visited_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    relationship_type_lookup_key: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    remarks: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    attempt_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'ver_attempt',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ver_person_met',
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
        name: "fk_ver_person_met_ver_attempt1_idx",
        using: "BTREE",
        fields: [
          { name: "attempt_id" },
        ]
      },
    ]
  });
};
