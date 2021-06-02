import { Router } from 'express';
import { ScopeOptions } from 'sequelize';
import { SiteTheme } from '../models/SiteTheme';

export const siteTheme = Router();

siteTheme.post('/', async (req, res, next) => {
  try {
    const theme = await SiteTheme.create(req.body);
    res.status(201).json(theme);
  } catch (e) {
    next(e);
  }
});

siteTheme.get('', async (req, res, next) => {
  try {
    res.json(await SiteTheme.scope(req.query.scope as unknown as ScopeOptions).findAll());
  } catch (e) {
    next(e);
  }
});

siteTheme.get('/:id', async (req, res, next) => {
  try {
    const theme = await SiteTheme.scope(req.query.scope as unknown as ScopeOptions)
      .findByPk(req.params.id);
    res.json(theme);
  } catch (e) {
    next(e);
  }
});

siteTheme.put('/:id', async (req, res, next) => {
  try {
    await SiteTheme.update<SiteTheme>(req.body, { where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});
