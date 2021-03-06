// @ts-nocheck
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { topics } from './routes/topics';
import { comments } from './routes/comments';
import { users } from './routes/users';
import { replies } from './routes/replies';
import { emoji } from './routes/emoji';
import { userTheme } from './routes/userTheme';
import { siteTheme } from './routes/siteTheme';

export const app = express();

// middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// middleware for json body parsing
app.use(bodyParser.json({ limit: '5mb' }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Expose-Headers', 'x-total-count');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type,authorization');

  next();
});

app.use('/topics', topics);
app.use('/comments', comments);
app.use('/users', users);
app.use('/replies', replies);
app.use('/emoji', emoji);
app.use('/user-themes', userTheme);
app.use('/site-themes', siteTheme);
