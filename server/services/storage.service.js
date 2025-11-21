import path from 'node:path';
import { env } from '../config/env.js';

// Later you can import AWS SDK v3 and implement presign for R2/S3
export function getLocalFilePath(product, version, file) {
    return path.join(process.cwd(), env.DOWNLOADS_DIR, product, version, file);
}

export async function getSignedDownloadUrl(product, version, file) {
    // Stub for R2/S3 – implement with @aws-sdk/client-s3 + getSignedUrl
    const key = `releases/${product}/${version}/${file}`;
    // return a pre-signed URL string
    return `https://cdn.example.com/${key}`;
}
