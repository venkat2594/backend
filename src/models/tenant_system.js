const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tenant_system', {
    system: {
      type: DataTypes.STRING(256),
      allowNull: false,
      primaryKey: true
    },
    login_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    domain_url: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    logo_url: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    icon_url: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    favicon_url: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    login_background_url: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    register_background_url: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    other_data: {
      type: DataTypes.JSON,
      allowNull: true
    },
    terms_and_condition: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    privacy_policy: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tenant_system',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "system" },
        ]
      },
    ]
  });
};
