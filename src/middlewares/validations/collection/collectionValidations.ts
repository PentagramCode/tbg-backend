// Middlewares
import validateJwt from '../../validateJwt';

// Helpers
import { existErrors } from '../../../helpers/existErrors';


export const getCollectionsValidations = [
    validateJwt,
    existErrors
];