import { Router } from 'express';
import * as ctrl from '../controllers/downloads.controller.js';

const r = Router();
// GET /v1/download?product=crm&version=1.2.3&file=CRM-1.2.3-win-x64.exe
r.get('/', ctrl.getDownloadLink);
export default r;
