const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lcs_collection_upload_map', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    collection_upload_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'lcs_collection_upload',
        key: 'id'
      }
    },
    collection_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'lcs_collection',
        key: 'id'
      }
    },
    data: {
      type: DataTypes.JSON,
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'lcs_collection_upload_map',
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
        name: "fk_lsk_upload_collection_map_lsk_upload1_idx",
        using: "BTREE",
        fields: [
          { name: "collection_upload_id" },
        ]
      },
      {
        name: "fk_lsk_upload_collection_map_lsk_collection1_idx",
        using: "BTREE",
        fields: [
          { name: "collection_id" },
        ]
      },
    ]
  });
};
