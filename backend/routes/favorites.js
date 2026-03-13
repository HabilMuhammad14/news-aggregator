import express from 'express';
import favoritesController from '../controllers/favoritesController.js';
const router = express.Router()

router.get('/', favoritesController.getFavorites);
router.post('/', favoritesController.addFavorite);
router.delete('/:id', favoritesController.removeFavorite);

export default router;