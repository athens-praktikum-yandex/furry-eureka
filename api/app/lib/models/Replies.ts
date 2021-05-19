import {
  AllowNull, BelongsTo, Column, DataType, ForeignKey, Model, Table,
} from 'sequelize-typescript';
import { Comments } from './Comments';
import { Users } from './Users';

@Table({
  paranoid: true, // add 'deleted_at'
  tableName: 'replies',
})
export class Replies extends Model<Replies> {
  @AllowNull(false)
  @Column(DataType.STRING)
  message!: string;

  @ForeignKey(() => Comments)
  @AllowNull(false)
  @Column
  commentId!: number;

  @BelongsTo(() => Comments)
  comment!: Comments;

  @ForeignKey(() => Users)
  @Column
  ownerId!: number;

  @BelongsTo(() => Users)
  owner!: Users;
}
