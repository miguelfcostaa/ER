const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.get('/ecraPrincipal',controller.ecraPrincipal_get);
router.get('/ecraVolante', controller.ecraVolante_get);
router.get('/ecraPrincipalPhone',controller.ecraPrincipalPhone_get);
router.post('/ecraPrincipal',controller.ecraPrincipal_post);


module.exports = router;

