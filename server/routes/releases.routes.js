import { Router } from 'express';
import * as ctrl from '../controllers/releases.controller.js';

const r = Router();

// Public: list latest releases per product
r.get('/', ctrl.listReleases);

// Admin: create a release (metadata). Later you’ll add auth middleware.
r.post('/', ctrl.createRelease);

export default r;
