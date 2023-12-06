import express from 'express';
import apiPrivate from './api.private.router.js'
import apiPublic from './api.public.router.js'
import validateToken from '../middlewares/validateToken.js'

const router = express.Router();

// Routes publiques accessibles à tout le monde
router.use(apiPublic);

// Routes privées accessibles après validation du token
router.use(validateToken, apiPrivate);

export default router;