# nodejsCRUD
Total Crud nodejs mysql sequelize 
CRUD using Session and Validators
This CRUD uses two tables : Orders and Customers. 
Fields description:

Customers Table: 
    id: {
      type: DataTypes.BIGINT(20),
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    passwd: {
      type: DataTypes.STRING
    }
    
Orders Table: 
 id: {
          type: DataTypes.BIGINT(20),
          primaryKey: true,
          autoIncrement: true
        },
        customer_id: {
          field: 'customer_id',
          type: DataTypes.BIGINT(20),
          references: {         // customer hasMany orders 1:n
            model: 'customers',
            key: 'id'
          }
        },
        description: {
          type: DataTypes.STRING
        },
        amount: {
          type: DataTypes.DOUBLE(15, 2)
        },
