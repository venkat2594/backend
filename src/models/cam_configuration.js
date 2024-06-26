const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cam_configuration', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    rule_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_rule',
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
    sequence: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    applicable_to: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    apply_for: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    apply_capacity: {
      type: DataTypes.ENUM('PERSON','ENTITY'),
      allowNull: false
    },
    product_code: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cam_configuration',
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
        name: "fk_cam_configuration_core_rule1_idx",
        using: "BTREE",
        fields: [
          { name: "rule_id" },
        ]
      },
      {
        name: "fk_cam_configuration_core_loan_type1_idx",
        using: "BTREE",
        fields: [
          { name: "loan_type_id" },
        ]
      },
    ]
  });
};
