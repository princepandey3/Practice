import express from 'express';
import apiController from '../controller/apiController.js';

const router = express.Router();

router.get("/", apiController)

export default router