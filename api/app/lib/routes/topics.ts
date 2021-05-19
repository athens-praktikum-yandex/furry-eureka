import { Router } from 'express';
import { ScopeOptions } from 'sequelize';
import { Topics } from '../models/Topics';

export const topics = Router();

topics.post('/', async (req, res, next) => {
  try {
    const topic = await Topics.create(req.body);
    res.status(201).json(topic);
  } catch (e) {
    next(e);
  }
});

topics.get('', async (req, res, next) => {
  try {
    res.json(await Topics.scope(req.query.scope as unknown as ScopeOptions).findAll());
  } catch (e) {
    next(e);
  }
});

topics.get('/:id', async (req, res, next) => {
  try {
    const topic = await Topics.scope(req.query.scope as unknown as ScopeOptions)
      .findByPk(req.params.id);
    res.json(topic);
  } catch (e) {
    next(e);
  }
});

topics.put('/:id', async (req, res, next) => {
  try {
    await Topics.update<Topics>(req.body, { where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});
