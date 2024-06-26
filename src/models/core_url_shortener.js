const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_url_shortener', {
    id: {
      type: DataTypes.STRING(256),
      allowNull: false,
      primaryKey: true
    },
    original_url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    short_url: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    total_hits: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    created_user_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_user',
        key: 'id'
      }
    },
    associate_table: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    associate_id: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    link_use: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    workorder_id: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    stage_code: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    expire: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'core_url_shortener',
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
        name: "fk_core_url_shortener_core_user1_idx",
        using: "BTREE",
        fields: [
          { name: "created_user_id" },
        ]
      },
    ]
  });
};
