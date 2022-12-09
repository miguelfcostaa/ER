const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.get('/ecraVolante', controller.ecraVolante_get);
router.get('/ecraPrincipal',controller.ecraPrincipal_get);
router.get('/ecraPrincipal/radio',controller.ecraPrincipalRadio_get);
router.get('/ecraPrincipal/media',controller.ecraPrincipalMedia_get);
router.get('/ecraPrincipal/phone',controller.ecraPrincipalPhone_get);
router.post('/ecraPrincipal/phone',controller.ecraPrincipalPhone_post);
router.get('/ecraPrincipal/contactos',controller.ecraPrincipalContactos_get);
router.get('/ecraPrincipal/chamada',controller.ecraChamada_get);
router.post('/ecraPrincipal/contactos',controller.ecraPrincipalContactos_post);
router.post('/ecraPrincipal/chamada', controller.ecraChamada_post);
router.get('/ecraPrincipal/setup',controller.ecraPrincipalSetup_get);
router.get('/ecraPrincipal/setup/completo',controller.ecraPrincipalSetupCompleto_get);
router.get('/ecraPrincipal/gps',controller.ecraPrincipalGPS_get);
router.get('/ecraPrincipal/car',controller.ecraPrincipalCar_get);
router.get('/ecraPrincipal/menu',controller.ecraPrincipalMenu_get);


module.exports = router;

