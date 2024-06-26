const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('onb_income', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    source: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    income_amount: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    income_period: {
      type: DataTypes.ENUM('WEEKLY','MONTHLY','QUARTERLY','HALF_YEARLY','YEARLY'),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tax_filed: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    person_work_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'onb_person_work',
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
    entity_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'onb_entity',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'onb_income',
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
        name: "fk_onb_income_onb_person_work1_idx",
        using: "BTREE",
        fields: [
          { name: "person_work_id" },
        ]
      },
      {
        name: "fk_onb_income_onb_person1_idx",
        using: "BTREE",
        fields: [
          { name: "person_id" },
        ]
      },
      {
        name: "fk_onb_income_onb_entity1_idx",
        using: "BTREE",
        fields: [
          { name: "entity_id" },
        ]
      },
    ]
  });
};
