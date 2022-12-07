const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.get('/ecraVolante', controller.ecraVolante_get);
router.get('/ecraPrincipal',controller.ecraPrincipal_get);
router.get('/ecraPrincipal/setup',controller.ecraPrincipalSetup_get);
router.get('/ecraPrincipal/setup/completo',controller.ecraPrincipalSetupCompleto_get);
router.get('/ecraPrincipal/phone',controller.ecraPrincipalPhone_get);
router.post('/ecraPrincipal',controller.ecraPrincipal_post);


module.exports = router;

