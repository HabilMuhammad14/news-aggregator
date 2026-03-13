import express from 'express';
import newsController from '../controllers/newsController.js';
const router = express.Router()

router.get('/', newsController.getTopHeadLines);
router.get('/search', newsController.searchNews);

export default router;