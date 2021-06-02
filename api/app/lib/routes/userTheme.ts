import { Router } from 'express';
import { ScopeOptions } from 'sequelize';
import { UserTheme } from '../models/UserTheme';

export const userTheme = Router();

userTheme.post('/', async (req, res, next) => {
  try {
    const theme = await UserTheme.create(req.body);
    res.status(201).json(theme);
  } catch (e) {
    next(e);
  }
});

userTheme.get('', async (req, res, next) => {
  try {
    res.json(await UserTheme.scope(req.query.scope as unknown as ScopeOptions).findAll());
  } catch (e) {
    next(e);
  }
});

userTheme.get('/:id', async (req, res, next) => {
  try {
    const theme = await UserTheme.scope(req.query.scope as unknown as ScopeOptions)
      .findByPk(req.params.id);
    res.json(theme);
  } catch (e) {
    next(e);
  }
});

userTheme.put('/:id', async (req, res, next) => {
  try {
    await UserTheme.update<UserTheme>(req.body, { where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});
