const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ver_verification_activity', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    verification_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'ver_verification',
        key: 'id'
      }
    },
    verification_category_question_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'ver_verification_category_questions',
        key: 'id'
      }
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_verified: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    person_met_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'ver_person_met',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ver_verification_activity',
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
        name: "fk_verification_activity_ver_verification1_idx",
        using: "BTREE",
        fields: [
          { name: "verification_id" },
        ]
      },
      {
        name: "fk_ver_verification_activity_ver_verification_category_fiel_idx",
        using: "BTREE",
        fields: [
          { name: "verification_category_question_id" },
        ]
      },
      {
        name: "fk_ver_verification_activity_ver_person_met1_idx",
        using: "BTREE",
        fields: [
          { name: "person_met_id" },
        ]
      },
    ]
  });
};
