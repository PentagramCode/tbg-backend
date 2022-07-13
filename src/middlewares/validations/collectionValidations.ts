import { check } from 'express-validator';

// Middlewares
import validateJwt from '../validateJwt';
import isAdminRole from '../validateAdmin';

// Helpers
import { existErrors } from '../../helpers/existErrors';
import { existCollection } from '../../helpers/dbValidations';


export const getCollectionsValdiations = [
    validateJwt,
    isAdminRole,
    check('limit', 'limit is a number').isNumeric().optional({ nullable: true }),
    check('from', 'from is a number').isNumeric().optional({ nullable: true}),
    existErrors,
];


export const postCollectionValidations = [
    validateJwt,
    isAdminRole,
    check('name', 'name is required').not().isEmpty().custom( existCollection ),
    existErrors
];

export const putCollectionValidations = [
    validateJwt,
    check('id', 'Not a valid mongo id').isMongoId(),
    isAdminRole,
    check('name', 'name is required').not().isEmpty().custom( existCollection ),
    existErrors
];

export const deleteCollectionValidations = [
    validateJwt,
    check('id', 'Not a valid mongo id').isMongoId(),
    isAdminRole,
    existErrors
];