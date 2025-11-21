import { Router } from 'express';
import health from './health.routes.js';
import releases from './releases.routes.js';
import downloads from './downloads.routes.js';

const router = Router();

router.use('/health', health);
router.use('/releases', releases);
router.use('/download', downloads);

export default router;
