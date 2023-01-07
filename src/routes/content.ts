/** src/routes/content.ts */
import express from 'express';
import controller from '../controllers/content';

const router = express.Router();

router.post('/content/justify', controller.justifyContent);

export = router;
