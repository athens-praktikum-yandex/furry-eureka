import {AllowNull, Column, DataType, ForeignKey, Model, PrimaryKey, Table} from "sequelize-typescript";
import {Topics} from "./Topics";
import {Users} from "./Users";

@Table({
  paranoid: true,   // add 'deleted_at'
  tableName: 'comments'
})
export class Comments extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number;

  @ForeignKey(() => Topics)
  @Column
  topic_id!: number;

  @ForeignKey(() => Users)
  @Column
  owner_id!: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  message!: string;
}