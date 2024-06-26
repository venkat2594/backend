const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('onb_entity_user', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    share_percentage: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    mobile: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    primary_id_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    primary_id_value: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    secondary_id_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    secondary_id_value: {
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
    is_applicant: {
      type: DataTypes.TINYINT,
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
    entity_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'onb_entity',
        key: 'id'
      }
    },
    address_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'onb_address',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'onb_entity_user',
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
        name: "fk_onb_entity_user_onb_entity1_idx",
        using: "BTREE",
        fields: [
          { name: "entity_id" },
        ]
      },
      {
        name: "fk_onb_entity_user_onb_address1_idx",
        using: "BTREE",
        fields: [
          { name: "address_id" },
        ]
      },
    ]
  });
};
