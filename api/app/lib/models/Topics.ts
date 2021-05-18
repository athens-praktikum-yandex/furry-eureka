import {
  AllowNull, BelongsTo,
  Column,
  DataType, ForeignKey, HasMany,
  Model,
  Table
} from "sequelize-typescript";
import {Users} from "./Users";
import {Comments} from "./Comments";

@Table({
  paranoid: true,   // add 'deleted_at'
  tableName: 'topics'
})
export class Topics extends Model<Topics> {
  @AllowNull(false)
  @Column(DataType.STRING)
  name!: string;

  @ForeignKey(() => Users)
  @AllowNull(false)
  @Column
  ownerId!: number;

  @BelongsTo(() => Users)
  owner!: Users;

  @HasMany(() => Comments)
  comments!: Comments[]
}