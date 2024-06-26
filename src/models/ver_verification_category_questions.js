const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ver_verification_category_questions', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    verification_category_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'ver_verification_category',
        key: 'id'
      }
    },
    question_text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    question_type: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    options: {
      type: DataTypes.JSON,
      allowNull: true
    },
    reference_table: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    reference_field: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    question_category: {
      type: DataTypes.ENUM('OBSERVATION','QUESTION'),
      allowNull: true
    },
    sequence: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_mandatory: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    relationship_type_lookup_key: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    group_label: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    group_sequence: {
      type: DataTypes.INTEGER,
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
    rule_parameter_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_rule_parameter',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ver_verification_category_questions',
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
        name: "fk_ver_verification_category_field_ver_verification_categor_idx",
        using: "BTREE",
        fields: [
          { name: "verification_category_id" },
        ]
      },
      {
        name: "fk_ver_verification_category_questions_core_rule1_idx",
        using: "BTREE",
        fields: [
          { name: "rule_id" },
        ]
      },
      {
        name: "fk_ver_verification_category_questions_core_rule_parameter1_idx",
        using: "BTREE",
        fields: [
          { name: "rule_parameter_id" },
        ]
      },
    ]
  });
};
