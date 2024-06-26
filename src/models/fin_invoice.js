const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fin_invoice', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    invoice_no: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    invoice_type: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    invoice_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    invoice_month: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    no_of_leads: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    net_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tax_details: {
      type: DataTypes.JSON,
      allowNull: true
    },
    tax_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    total_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    mode: {
      type: DataTypes.ENUM('PAYABLE','RECEIVABLE'),
      allowNull: true
    },
    core_lender_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_lender',
        key: 'id'
      }
    },
    core_loan_type_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'core_loan_type',
        key: 'id'
      }
    },
    address: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    area_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_pincode',
        key: 'id'
      }
    },
    city_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_city',
        key: 'id'
      }
    },
    state_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_state',
        key: 'id'
      }
    },
    country_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_country',
        key: 'id'
      }
    },
    pincode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gst_no: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    from_name: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    from_address: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    from_area_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_pincode',
        key: 'id'
      }
    },
    from_city_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_city',
        key: 'id'
      }
    },
    from_state_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_state',
        key: 'id'
      }
    },
    from_country_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_country',
        key: 'id'
      }
    },
    from_pincode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    from_gst_no: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    employee_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_employee',
        key: 'id'
      }
    },
    channel_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'core_channel',
        key: 'id'
      }
    },
    file_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    signed_file_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'fin_invoice',
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
        name: "fk_fin_invoice_core_lender1_idx",
        using: "BTREE",
        fields: [
          { name: "core_lender_id" },
        ]
      },
      {
        name: "fk_fin_invoice_core_loan_type1_idx",
        using: "BTREE",
        fields: [
          { name: "core_loan_type_id" },
        ]
      },
      {
        name: "fk_fin_invoice_core_pincode1_idx",
        using: "BTREE",
        fields: [
          { name: "area_id" },
        ]
      },
      {
        name: "fk_fin_invoice_core_city1_idx",
        using: "BTREE",
        fields: [
          { name: "city_id" },
        ]
      },
      {
        name: "fk_fin_invoice_core_state1_idx",
        using: "BTREE",
        fields: [
          { name: "state_id" },
        ]
      },
      {
        name: "fk_fin_invoice_core_country1_idx",
        using: "BTREE",
        fields: [
          { name: "country_id" },
        ]
      },
      {
        name: "fk_fin_invoice_core_pincode2_idx",
        using: "BTREE",
        fields: [
          { name: "from_area_id" },
        ]
      },
      {
        name: "fk_fin_invoice_core_city2_idx",
        using: "BTREE",
        fields: [
          { name: "from_city_id" },
        ]
      },
      {
        name: "fk_fin_invoice_core_state2_idx",
        using: "BTREE",
        fields: [
          { name: "from_state_id" },
        ]
      },
      {
        name: "fk_fin_invoice_core_country2_idx",
        using: "BTREE",
        fields: [
          { name: "from_country_id" },
        ]
      },
      {
        name: "fk_fin_invoice_core_employee1_idx",
        using: "BTREE",
        fields: [
          { name: "employee_id" },
        ]
      },
      {
        name: "fk_fin_invoice_core_channel1_idx",
        using: "BTREE",
        fields: [
          { name: "channel_id" },
        ]
      },
    ]
  });
};
