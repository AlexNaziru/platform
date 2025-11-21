import { Router } from 'express';
import * as ctrl from '../controllers/health.controller.js';

const r = Router();
r.get('/', ctrl.health);
export default r;
