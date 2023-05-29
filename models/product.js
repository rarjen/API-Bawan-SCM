'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    user_id: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    weight: DataTypes.DOUBLE,
    price: DataTypes.DOUBLE,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};