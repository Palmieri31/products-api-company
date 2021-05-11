import {Router} from 'express';
const router = Router();

import * as authCtrl from '../controllers/auth.controller';
import {verifySignup} from '../middlewares';


router.post('/signup', verifySignup.ckeckDuplicateUsernameOrEmail, verifySignup.checkRolesExisted, authCtrl.signUp);
router.post('/signin', authCtrl.signin);

export default router;
