const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_lender_contract', {
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
      allowNull: false,
      references: {
        model: 'core_loan_type',
        key: 'id'
      }
    },
    apply_method: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    status_fetch_method: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    payout_start_date: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    payout_end_date: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    payout_dump_available: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    rm_user_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_user',
        key: 'id'
      }
    },
    contact_name: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    contact_mobile: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    contact_email: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    contact_address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    link_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    link: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_lender_contract',
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
        name: "fk_core_lender_contract_core_lender1_idx",
        using: "BTREE",
        fields: [
          { name: "lender_id" },
        ]
      },
      {
        name: "fk_core_lender_contract_core_loan_type1_idx",
        using: "BTREE",
        fields: [
          { name: "loan_type_id" },
        ]
      },
      {
        name: "fk_core_lender_contract_core_user1_idx",
        using: "BTREE",
        fields: [
          { name: "rm_user_id" },
        ]
      },
    ]
  });
};
