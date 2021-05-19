import {
  AllowNull, Column, DataType, HasMany, Model, Table,
} from 'sequelize-typescript';
import { Topics } from './Topics';
import { Comments } from './Comments';
import { Replies } from './Replies';

@Table({
  paranoid: true, // add 'deleted_at'
  tableName: 'users',
})
export class Users extends Model<Users> {
  @AllowNull(false)
  @Column(DataType.STRING)
  name!: string;

  @HasMany(() => Topics)
  topics!: Topics[];

  @HasMany(() => Comments)
  comments!: Comments[];

  @HasMany(() => Replies)
  replies!: Replies[];
}
