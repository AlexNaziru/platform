import pino from 'pino';
import { isProd } from './env.js';

export const logger = pino({
    level: 'info',
    transport: isProd ? undefined : { target: 'pino-pretty', options: { colorize: true } }
});