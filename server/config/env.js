import 'dotenv/config';
import { z } from 'zod';

const EnvSchema = z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    PORT: z.string().default('8080'),
    CLIENT_ORIGIN: z.string().url(),
    STORAGE_DRIVER: z.enum(['local', 'r2', 's3']).default('local'),
    DOWNLOADS_DIR: z.string().default('./downloads'),

    S3_ENDPOINT: z.string().optional(),
    S3_REGION: z.string().optional(),
    S3_BUCKET: z.string().optional(),
    S3_ACCESS_KEY_ID: z.string().optional(),
    S3_SECRET_ACCESS_KEY: z.string().optional()
});

export const env = EnvSchema.parse(process.env);
export const isProd = env.NODE_ENV === 'production';
