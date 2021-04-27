import { Router } from 'express';

import { ping as pingHealthcheck } from '../controllers/healthchecks';
import { logger } from '../middlewares';

export const healthRoutes = (router: Router) => {
  router
    .get('/ping', logger, pingHealthcheck);
};
