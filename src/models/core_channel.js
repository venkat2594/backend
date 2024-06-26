const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('core_channel', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.ENUM('ENTITY','PERSON'),
      allowNull: false
    },
    entity_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    partner_category: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    mobile: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    point_of_contact: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    dsa_code: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    dsa_status: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    onboarding_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'onb_application',
        key: 'id'
      }
    },
    onboarding_territory_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_territory',
        key: 'id'
      }
    },
    approved_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    lead_sync_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'core_channel',
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
        name: "fk_core_channel_onb_application1_idx",
        using: "BTREE",
        fields: [
          { name: "onboarding_id" },
        ]
      },
      {
        name: "fk_core_channel_territory",
        using: "BTREE",
        fields: [
          { name: "onboarding_territory_id" },
        ]
      },
    ]
  });
};
