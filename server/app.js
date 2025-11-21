import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';

import { corsMiddleware } from './middleware/cors.js';
import { apiLimiter } from './middleware/rateLimit.js';
import { errorHandler, notFound } from './middleware/error.js';
import routes from './routes/index.js';

const app = express();

app.use(helmet());
app.use(compression());
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(corsMiddleware);
app.use(apiLimiter);

// API v1
app.use('/v1', routes);

// 404 + centralized errors
app.use(notFound);
app.use(errorHandler);

export default app;
