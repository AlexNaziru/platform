import * as service from '../services/releases.service.js';
import { z } from 'zod';

const CreateSchema = z.object({
    productId: z.string().min(1),
    version: z.string().min(1),
    notes: z.string().optional(),
    assets: z.array(z.object({
        platform: z.enum(['win-x64','mac-x64','mac-arm64','linux-x64']),
        file: z.string(),      // filename in storage
        size: z.number().int().positive(),
        sha256: z.string().min(64)
    })).nonempty()
});

export async function listReleases(req, res, next) {
    try {
        const data = await service.listLatest();
        res.json(data);
    } catch (e) { next(e); }
}

export async function createRelease(req, res, next) {
    try {
        const payload = CreateSchema.parse(req.body);
        const release = await service.create(payload);
        res.status(201).json(release);
    } catch (e) { next(e); }
}
