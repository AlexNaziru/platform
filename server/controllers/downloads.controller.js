import { getSignedDownloadUrl, getLocalFilePath } from '../services/storage.service.js';
import { env } from '../config/env.js';
import path from 'node:path';
import fs from 'node:fs';

export async function getDownloadLink(req, res, next) {
    try {
        const { product, version, file } = req.query;
        if (!product || !version || !file) {
            return res.status(400).json({ error: 'Missing product, version, or file' });
        }

        if (env.STORAGE_DRIVER === 'local') {
            // For local dev: stream the file directly
            const p = getLocalFilePath(product, version, file);
            if (!fs.existsSync(p)) return res.status(404).json({ error: 'Not found' });
            res.setHeader('Content-Disposition', `attachment; filename="${file}"`);
            return fs.createReadStream(p).pipe(res);
        }

        // R2/S3: return presigned URL JSON
        const url = await getSignedDownloadUrl(product, version, file);
        return res.json({ url });

    } catch (e) { next(e); }
}
