import { Router } from 'express';

// Controllers
import { getCollection, postCollection, putCollection, deleteCollection } from '../controllers/collection.controller';

// Middlewares
import { deleteCollectionValidations, getCollectionsValdiations, postCollectionValidations, putCollectionValidations } from '../middlewares/validations/collectionValidations';

const router =  Router();

router.get('/', getCollectionsValdiations, getCollection);
router.post('/', postCollectionValidations, postCollection);
router.put('/:id', putCollectionValidations, putCollection);
router.delete('/:id', deleteCollectionValidations, deleteCollection);

export default router;