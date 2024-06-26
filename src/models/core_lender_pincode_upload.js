const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_lender_pincode_upload', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    lender_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_lender',
        key: 'id'
      }
    },
    loan_type_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_loan_type',
        key: 'id'
      }
    },
    lender_scheme_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_lender_scheme',
        key: 'id'
      }
    },
    configuration_type: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    bucket_name: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    file_location: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    provider: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    eligible_pincode_count: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_lender_pincode_upload',
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
        name: "fk_mkt_lender_pincode_uplload_core_lender1_idx",
        using: "BTREE",
        fields: [
          { name: "lender_id" },
        ]
      },
      {
        name: "fk_mkt_lender_pincode_uplload_core_loan_type1_idx",
        using: "BTREE",
        fields: [
          { name: "loan_type_id" },
        ]
      },
      {
        name: "fk_mkt_lender_pincode_uplload_core_lender_scheme1_idx",
        using: "BTREE",
        fields: [
          { name: "lender_scheme_id" },
        ]
      },
    ]
  });
};
