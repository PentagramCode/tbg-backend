import { Router } from 'express';
import { login, register } from '../controllers/auth.controller';

// Middlewares
import { registerValidations } from '../middlewares/validations/auth/authValidations';

const router = Router();

router.post('/login', login);
router.post('/register', registerValidations, register);

export default router;
