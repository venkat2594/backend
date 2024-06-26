const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('onb_address', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    address_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    residence_type: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    area: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    landmark: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    pincode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    residing_in_month: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pincode_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_pincode',
        key: 'id'
      }
    },
    premises_type: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    application_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'onb_application',
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
    person_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'onb_person',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'onb_address',
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
        name: "fk_onb_address_onb_entity1_idx",
        using: "BTREE",
        fields: [
          { name: "entity_id" },
        ]
      },
      {
        name: "fk_onb_address_onb_person1_idx",
        using: "BTREE",
        fields: [
          { name: "person_id" },
        ]
      },
      {
        name: "fk_onb_address_onb_application1_idx",
        using: "BTREE",
        fields: [
          { name: "application_id" },
        ]
      },
      {
        name: "fk_onb_address_core_pincode",
        using: "BTREE",
        fields: [
          { name: "pincode_id" },
        ]
      },
    ]
  });
};
