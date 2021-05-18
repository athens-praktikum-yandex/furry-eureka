import {Router} from 'express';
import {Comments} from '../models/Comments';
import {ScopeOptions} from "sequelize";

export const comments = Router();

comments.post('/', async (req, res, next) => {
  try {
    const comment = await Comments.create(req.body);
    res.status(201).json(comment);
  } catch (e) {
    next(e);
  }
});

comments.get('', async (req, res, next) => {
  try {
    res.json(await Comments.scope(req.query['scope'] as unknown as ScopeOptions).findAll());
  } catch (e) {
    next(e);
  }
});

comments.get('/:id', async (req, res, next) => {
  try {
    const comment = await Comments.scope(req.query['scope'] as unknown as ScopeOptions)
      .findByPk(req.params['id']);
    res.json(comment);
  } catch (e) {
    next(e);
  }
});

comments.put('/:id', async (req, res, next) => {
  try {
    await Comments.update<Comments>(req.body, {where: {id: req.params['id']}});
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});
