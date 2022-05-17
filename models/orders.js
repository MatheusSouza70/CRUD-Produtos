module.exports = (sequelize, DataTypes) => {
  var Orders = sequelize.define("orders", {
    id: {
      type: DataTypes.BIGINT(20),
      primaryKey: true,
      autoIncrement: true
    },
    customer_id: {
      field: 'customer_id',
      type: DataTypes.BIGINT(20),
      references: { // customer hasMany orders 1:n
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
    createdAt: {
      field: 'created_at',
      type: 'TIMESTAMP',
      default: Date.now()
    },
    updatedAt: {
      field: 'updated_at',
      type: 'TIMESTAMP',
      default: Date.now()
    }

  })
  //Orders.sync( { force: true } )
  //Orders.associate = (models) => {
  // Orders.belongsTo(models.customers, {foreignKey: 'customer_id'})
  // };


  return Orders;


}