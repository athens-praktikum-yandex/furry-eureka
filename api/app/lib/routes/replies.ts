import {Router} from 'express';
import {Replies} from '../models/Replies';
import {ScopeOptions} from "sequelize";

export const replies = Router();

replies.post('/', async (req, res, next) => {
  try {
    const reply = await Replies.create(req.body);
    res.status(201).json(reply);
  } catch (e) {
    next(e);
  }
});

replies.get('', async (req, res, next) => {
  try {
    res.json(await Replies.scope(req.query['scope'] as unknown as ScopeOptions).findAll());
  } catch (e) {
    next(e);
  }
});

replies.get('/:id', async (req, res, next) => {
  try {
    const reply = await Replies.scope(req.query['scope'] as unknown as ScopeOptions)
      .findByPk(req.params['id']);
    res.json(reply);
  } catch (e) {
    next(e);
  }
});

replies.put('/:id', async (req, res, next) => {
  try {
    await Replies.update<Replies>(req.body, {where: {id: req.params['id']}});
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});
