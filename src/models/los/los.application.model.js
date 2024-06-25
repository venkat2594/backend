module.exports = function (sequelize, DataTypes) {
    return sequelize.define('LosApplication', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        loan_type_id: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        code: {
            type: DataTypes.STRING(32),
            allowNull: false,
            unique: true
        },
        type: {
            type: DataTypes.STRING(128),
            allowNull: true
        },
        salutation: {
            type: DataTypes.STRING(32),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(256),
            allowNull: false
        },
        mobile: {
            type: DataTypes.STRING(16),
            allowNull: false
        },
        lead_source: {
            type: DataTypes.STRING(256),
            allowNull: true
        },
        external_lead_id: {
            type: DataTypes.STRING(256),
            allowNull: true
        },
        external_journey_type: {
            type: DataTypes.STRING(128),
            allowNull: true
        },
        external_lead_type: {
            type: DataTypes.STRING(128),
            allowNull: true
        },
        external_loan_id: {
            type: DataTypes.STRING(256),
            allowNull: true
        },
        submission_mode: {
            type: DataTypes.STRING(256),
            allowNull: true
        },
        email: {
            type: DataTypes.STRING(256),
            allowNull: false
        },
        contact_name: {
            type: DataTypes.STRING(256),
            allowNull: true
        },
        loan_amount: {
            type: DataTypes.DECIMAL(15, 2),
            allowNull: true
        },
        loan_code: {
            type: DataTypes.STRING(256),
            allowNull: true,
            unique: true
        },
        loan_status: {
            type: DataTypes.STRING(256),
            allowNull: true
        },
        apply_capacity: {
            type: DataTypes.ENUM('PERSON', 'ENTITY'),
            allowNull: false
        },
        entity_type: {
            type: DataTypes.STRING(256),
            allowNull: true
        },
        employment_type: {
            type: DataTypes.STRING(256),
            allowNull: true
        },
        data: {
            type: DataTypes.JSON,
            allowNull: true
        },
        origin_platform: {
            type: DataTypes.STRING(256),
            allowNull: true
        },
        customer_id: {
            type: DataTypes.BIGINT,
            allowNull: true
        },
        onboarding_id: {
            type: DataTypes.BIGINT,
            allowNull: true
        },
        sourcing_territory_id: {
            type: DataTypes.BIGINT,
            allowNull: true
        },
        servicing_territory_id: {
            type: DataTypes.BIGINT,
            allowNull: true
        },
        data_synced: {
            type: DataTypes.STRING(128),
            allowNull: true
        },
        status: {
            type: DataTypes.TINYINT,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    }, {
        sequelize,
        tableName: 'los_application',
        timestamps: false,
        indexes: [
            {
                name: 'PRIMARY',
                unique: true,
                fields: ['id']
            },
            {
                name: 'code_unique',
                unique: true,
                fields: ['code']
            },
            {
                name: 'loan_code_unique',
                unique: true,
                fields: ['loan_code']
            },
            {
                name: 'customer_id_index',
                fields: ['customer_id']
            },
            {
                name: 'loan_type_id_index',
                fields: ['loan_type_id']
            },
            {
                name: 'onboarding_id_index',
                fields: ['onboarding_id']
            },
            {
                name: 'sourcing_territory_id_index',
                fields: ['sourcing_territory_id']
            },
            {
                name: 'servicing_territory_id_index',
                fields: ['servicing_territory_id']
            }
        ]
    });
};
