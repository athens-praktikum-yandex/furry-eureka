import {AllowNull, Column, DataType, ForeignKey, Model, PrimaryKey, Table} from "sequelize-typescript";
import {Users} from "./Users";

@Table({
  paranoid: true,   // add 'deleted_at'
  tableName: 'topics'
})
export class Topics extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number;

  @ForeignKey(() => Users)
  @Column
  owner_id!: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  name!: string;
}