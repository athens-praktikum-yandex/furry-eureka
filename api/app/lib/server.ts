import { createServer } from 'https';
import { app } from './app';
import { sequelize } from './sequelize';
import * as fs from 'fs';

const port = process.env.PORT || 5000;

const privateKey = fs.readFileSync('./ssl/server.key');
const certificate = fs.readFileSync('./ssl/server.crt');

const options = {
  key: privateKey,
  cert: certificate,
};


(async () => {
  await sequelize.sync({ force: true });

  createServer(options, app).listen(port, () => {
    console.info(`Server running on port ${port}`);
  });
})();
