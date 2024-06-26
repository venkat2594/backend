const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('onb_application', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    scope: {
      type: DataTypes.ENUM('APPLICATION_FLOW','PARTNER_FLOW'),
      allowNull: false
    },
    entity_type: {
      type: DataTypes.ENUM('ENTITY','PERSON'),
      allowNull: false
    },
    associate_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    terms_and_conditions: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'onb_application',
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
    ]
  });
};
