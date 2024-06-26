const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('onb_bank_account', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    bank_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_bank',
        key: 'id'
      }
    },
    account_holder_name: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    account_type: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    account_number: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    bank_name: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    ifsc_code: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    person_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'onb_person',
        key: 'id'
      }
    },
    entity_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'onb_entity',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'onb_bank_account',
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
        name: "fk_onb_bank_account_onb_person1_idx",
        using: "BTREE",
        fields: [
          { name: "person_id" },
        ]
      },
      {
        name: "fk_onb_bank_account_onb_entity1_idx",
        using: "BTREE",
        fields: [
          { name: "entity_id" },
        ]
      },
      {
        name: "fk_onb_bank_account_core_bank",
        using: "BTREE",
        fields: [
          { name: "bank_id" },
        ]
      },
    ]
  });
};
