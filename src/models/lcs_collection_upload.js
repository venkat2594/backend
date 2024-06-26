const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lcs_collection_upload', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    filename: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    lender_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_lender',
        key: 'id'
      }
    },
    request_data: {
      type: DataTypes.JSON,
      allowNull: true
    },
    response_data: {
      type: DataTypes.JSON,
      allowNull: true
    },
    is_processed: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    upload_user_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    upload_user_type: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'lcs_collection_upload',
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
        name: "fk_lcs_collection_upload_core_lender1_idx",
        using: "BTREE",
        fields: [
          { name: "lender_id" },
        ]
      },
    ]
  });
};
