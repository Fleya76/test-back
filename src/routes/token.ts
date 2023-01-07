/** src/routes/token.ts */
import express from 'express';
import controller from '../controllers/token';
const router = express.Router();

router.post('/token/create', controller.createToken);

export = router;
