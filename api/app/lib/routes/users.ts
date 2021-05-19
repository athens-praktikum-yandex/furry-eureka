import { Router } from 'express';
import { ScopeOptions } from 'sequelize';
import { Users } from '../models/Users';

export const users = Router();

users.post('/', async (req, res, next) => {
  try {
    const user = await Users.create(req.body);
    res.status(201).json(user);
  } catch (e) {
    next(e);
  }
});

users.get('', async (req, res, next) => {
  try {
    res.json(await Users.scope(req.query.scope as unknown as ScopeOptions).findAll());
  } catch (e) {
    next(e);
  }
});

users.get('/:id', async (req, res, next) => {
  try {
    const user = await Users.scope(req.query.scope as unknown as ScopeOptions)
      .findByPk(req.params.id);
    res.json(user);
  } catch (e) {
    next(e);
  }
});

users.put('/:id', async (req, res, next) => {
  try {
    await Users.update<Users>(req.body, { where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});
