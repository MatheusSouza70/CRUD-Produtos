module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define("customers", {
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
  // Create table for first time 
  // Customer.sync( { force: true } )

  return Customer;


}

