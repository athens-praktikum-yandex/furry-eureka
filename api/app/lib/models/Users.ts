import {AllowNull, Column, DataType, Model, PrimaryKey, Table} from "sequelize-typescript";

@Table({
  paranoid: true,   // add 'deleted_at'
  tableName: 'users'
})
export class Users extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  name!: string;
}