import {AllowNull, Column, DataType, ForeignKey, Model, PrimaryKey, Table} from "sequelize-typescript";
import {Comments} from "./Comments";
import {Users} from "./Users";

@Table({
  paranoid: true,   // add 'deleted_at'
  tableName: 'replies'
})
export class Replies extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number;

  @ForeignKey(() => Comments)
  @Column
  comment_id!: number;

  @ForeignKey(() => Users)
  @Column
  owner_id!: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  message!: string;
}