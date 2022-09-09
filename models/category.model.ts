'use strict';
import { DataTypes, Model, Optional } from "sequelize";
import db from "../config/dbConnection";

interface CategoryAttributes {
  id: number;
  name: string;
  state: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
export interface CategoryInput extends Optional<CategoryAttributes, 'id'> {}
export interface CategoryOuput extends Required<CategoryAttributes> {}

class Category extends Model<CategoryAttributes, CategoryInput> implements CategoryAttributes {
  public id!: number
  public name!: string
  public state!: number

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
  
  static associate(models:any) {
    // define association here
  }
}


Category.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  state: DataTypes.INTEGER,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  deletedAt: DataTypes.DATE
}, {
  sequelize: db,
  modelName: 'Category',
  paranoid: true
});

export default Category;
//https://blog.logrocket.com/using-sequelize-with-typescript/