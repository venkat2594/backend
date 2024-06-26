const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_checklist', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    lender_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_lender',
        key: 'id'
      }
    },
    rule_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_rule',
        key: 'id'
      }
    },
    sequence: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    applicable_to: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    loan_type_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_loan_type',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_checklist',
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
        name: "fk_core_document_proof_core_lender1_idx",
        using: "BTREE",
        fields: [
          { name: "lender_id" },
        ]
      },
      {
        name: "fk_core_document_proof_core_rule1_idx",
        using: "BTREE",
        fields: [
          { name: "rule_id" },
        ]
      },
      {
        name: "fk_core_checklist_core_loan_type1_idx",
        using: "BTREE",
        fields: [
          { name: "loan_type_id" },
        ]
      },
    ]
  });
};
