const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('onb_person', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    application_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'onb_application',
        key: 'id'
      }
    },
    applicant_type: {
      type: DataTypes.ENUM('PRIMARY','CO_APPLICANT','GUARANTOR'),
      allowNull: true
    },
    employment_type: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    profession: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    qualification: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    salutation: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    mobile: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    first_name: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    middle_name: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    marital_status: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    primary_id_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    primary_id: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    secondary_id_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    secondary_id: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    relationship_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    maiden_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    maiden_name: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    aadhaar_kyc: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    e_signature: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    share_percentage: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    data: {
      type: DataTypes.JSON,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'onb_person',
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
        name: "fk_onb_person_onb_application1_idx",
        using: "BTREE",
        fields: [
          { name: "application_id" },
        ]
      },
    ]
  });
};
