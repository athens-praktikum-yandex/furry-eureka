import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
  host: 'postgres',
  port: 5432,
  username: 'postgres',
  password: 'newPassword',
  database: 'athensdb',
  dialect: 'postgres',
  models: [`${__dirname}/models`],
});
