const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('los_application_loan', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    application_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'los_application',
        key: 'id'
      }
    },
    loan_type_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_loan_type',
        key: 'id'
      }
    },
    sub_loan_type_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_sub_loan_type',
        key: 'id'
      }
    },
    facility_code: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    loan_amount: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    tenure: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rate_of_interest: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    process_fee_type: {
      type: DataTypes.ENUM('FLAT','PERCENTAGE'),
      allowNull: true
    },
    process_fee_value: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'los_application_loan',
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
        name: "fk_los_application_loan_los_application1_idx",
        using: "BTREE",
        fields: [
          { name: "application_id" },
        ]
      },
      {
        name: "fk_los_application_loan_core_loan_type1_idx",
        using: "BTREE",
        fields: [
          { name: "loan_type_id" },
        ]
      },
      {
        name: "fk_los_application_loan_core_sub_loan_type1_idx",
        using: "BTREE",
        fields: [
          { name: "sub_loan_type_id" },
        ]
      },
    ]
  });
};
