import {
  AllowNull, BelongsTo, Column, DataType, ForeignKey, HasMany, HasOne, Model, Table,
} from 'sequelize-typescript';
import { Topics } from './Topics';
import { Users } from './Users';
import { Replies } from './Replies';
import { Emoji } from './Emoji';

@Table({
  paranoid: true, // add 'deleted_at'
  tableName: 'comments',
})
export class Comments extends Model<Comments> {
  @AllowNull(false)
  @Column(DataType.STRING)
  message!: string;

  @ForeignKey(() => Topics)
  @AllowNull(false)
  @Column
  topicId!: number;

  @BelongsTo(() => Topics)
  topic!: Topics;

  @ForeignKey(() => Users)
  @AllowNull(false)
  @Column
  ownerId!: number;

  @BelongsTo(() => Users)
  user!: Users;

  @HasMany(() => Replies)
  replies!: Replies[];

  @HasOne(() => Emoji)
  emoji!: Emoji;
}
