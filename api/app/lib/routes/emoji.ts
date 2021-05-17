import {Router} from 'express';
import {Emoji} from '../models/Emoji';
import {ScopeOptions} from "sequelize";

export const emoji = Router();

emoji.post('/', async (req, res, next) => {
  try {
    const emoj = await Emoji.create(req.body);
    res.status(201).json(emoj);
  } catch (e) {
    next(e);
  }
});

emoji.get('', async (req, res, next) => {
  try {
    res.json(await Emoji.scope(req.query['scope'] as unknown as ScopeOptions).findAll());
  } catch (e) {
    next(e);
  }
});

emoji.get('/:id', async (req, res, next) => {
  try {
    const emoj = await Emoji.scope(req.query['scope'] as unknown as ScopeOptions)
      .findByPk(req.params['id']);
    res.json(emoj);
  } catch (e) {
    next(e);
  }
});

emoji.put('/:id', async (req, res, next) => {
  try {
    await Emoji.update<Emoji>(req.body, {where: {id: req.params['id']}});
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});
