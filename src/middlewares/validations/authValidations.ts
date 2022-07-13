import { check } from 'express-validator';

// Helpers
import { existErrors } from '../../helpers/existErrors';
import { existUsername } from '../../helpers/dbValidations';

/**
 * Route validations register
 */
export const registerValidations = [
    check('username', 'username is required').not().isEmpty().custom( existUsername ),
    check('email', 'email is required').not().isEmpty().isEmail().withMessage('email is invalid'),
    check('password').isLength({ min: 8 }).withMessage('must be at least 8 chars long').matches(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/).withMessage('Must contain lowercase and uppercase letters and symbols'),
    existErrors
];

/**
 * Route validations login
 */
export const loginValidations = [
    check('email', 'email is invalid').isEmail(),
    check('password', 'password is required').not().isEmpty().isLength({ min: 8 }).withMessage('must be at least 8 chars long'),
    existErrors
];