const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_lender_scheme_charge', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    lender_scheme_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_lender_scheme',
        key: 'id'
      }
    },
    title: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    charge_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    apply_stage: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    calculate_type: {
      type: DataTypes.ENUM('FLAT','PERCENTAGE'),
      allowNull: true
    },
    calculate_value: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    compute_source: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    minimum_value: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    maximum_value: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    deviation_allowed: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    rule_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_rule',
        key: 'id'
      }
    },
    tax_name: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    tax_value: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_lender_scheme_charge',
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
        name: "fk_core_lender_scheme_charge_core_lender_scheme1_idx",
        using: "BTREE",
        fields: [
          { name: "lender_scheme_id" },
        ]
      },
      {
        name: "fk_core_lender_scheme_charge_core_rule1_idx",
        using: "BTREE",
        fields: [
          { name: "rule_id" },
        ]
      },
    ]
  });
};
