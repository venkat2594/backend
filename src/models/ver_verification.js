const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ver_verification', {
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
    application_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'los_application',
        key: 'id'
      }
    },
    application_participant_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'los_application_participant',
        key: 'id'
      }
    },
    applicant_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    applicant_category: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    number_of_visits: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    task_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_task',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_user',
        key: 'id'
      }
    },
    assigned_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    closed_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    applicant_name: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    applicant_contact_no: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    application_data: {
      type: DataTypes.JSON,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ver_verification',
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
        name: "fk_ver_verification_ver_verification_category1_idx",
        using: "BTREE",
        fields: [
          { name: "verification_category_id" },
        ]
      },
      {
        name: "fk_ver_verification_los_application1_idx",
        using: "BTREE",
        fields: [
          { name: "application_id" },
        ]
      },
      {
        name: "fk_ver_verification_los_application_participant1_idx",
        using: "BTREE",
        fields: [
          { name: "application_participant_id" },
        ]
      },
      {
        name: "fk_ver_verification_core_task1_idx",
        using: "BTREE",
        fields: [
          { name: "task_id" },
        ]
      },
      {
        name: "fk_core_user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
