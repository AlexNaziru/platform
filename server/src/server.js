import { env } from '../config/env.js';
import { logger } from '../config/logger.js';
import app from '../app.js';

const port = Number(env.PORT);
app.listen(port, () => logger.info(`API listening on :${port}`));
