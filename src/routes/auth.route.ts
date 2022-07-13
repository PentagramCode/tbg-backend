import { Router } from 'express';
import { login, register } from '../controllers/auth.controller';

// Middlewares
import { registerValidations, loginValidations } from '../middlewares/validations/authValidations';

const router = Router();

router.post('/login', loginValidations, login);
router.post('/register', registerValidations, register);

export default router;
