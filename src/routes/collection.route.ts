import { Router } from 'express';

// Controllers
import { getCollection, postCollection, putCollection, deleteCollection } from '../controllers/collection.controller';

// Middlewares
import { getCollectionsValidations } from '../middlewares/validations/collection/collectionValidations';

const router =  Router();

router.get('/', getCollectionsValidations ,getCollection);
router.post('/', postCollection);
router.put('/:id', putCollection);
router.delete('/:id', deleteCollection);

export default router;