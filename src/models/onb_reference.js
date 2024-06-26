const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('onb_reference', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    application_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'onb_application',
        key: 'id'
      }
    },
    reference_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    mobile: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    relationship: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'onb_reference',
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
        name: "fk_onb_reference_onb_application1_idx",
        using: "BTREE",
        fields: [
          { name: "application_id" },
        ]
      },
    ]
  });
};
