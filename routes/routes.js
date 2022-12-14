const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.get('/ecraVolante', controller.ecraVolante_get);
router.get('/ecraPrincipal',controller.ecraPrincipal_get);
router.get('/ecraPrincipal/radio',controller.ecraPrincipalRadio_get);
router.get('/ecraPrincipal/media',controller.ecraPrincipalMedia_get);
router.get('/ecraPrincipal/gps',controller.ecraPrincipalGPS_get);
router.post('/ecraPrincipal/gps',controller.ecraPrincipalGPS_post);
router.get('/ecraPrincipal/phone',controller.ecraPrincipalPhone_get);
router.post('/ecraPrincipal/phone',controller.ecraPrincipalPhone_post);
router.get('/ecraPrincipal/contactos',controller.ecraPrincipalContactos_get);
router.get('/ecraPrincipal/chamada',controller.ecraChamada_get);
router.get('/ecraPrincipal/menu',controller.ecraPrincipalMenu_get);
router.get('/ecraPrincipal/menu2',controller.ecraPrincipalMenu2_get);
router.get('/ecraPrincipal/car',controller.ecraPrincipalCar_get);
router.post('/ecraPrincipal/contactos',controller.ecraPrincipalContactos_post);
router.post('/ecraPrincipal/chamada', controller.ecraChamada_post);
router.get('/ecraPrincipal/setup',controller.ecraPrincipalSetup_get);
router.get('/ecraPrincipal/setup/completo',controller.ecraPrincipalSetupCompleto_get);
router.get('/ecraPrincipal/phone',controller.ecraPrincipalPhone_get);
router.post('/ecraPrincipal/phone',controller.ecraPrincipalPhone_post);
router.get('/ecraPrincipal/contactos',controller.ecraPrincipalContactos_get);
router.get('/ecraPrincipal/chamada',controller.ecraChamada_get);
router.post('/ecraPrincipal/contactos',controller.ecraPrincipalContactos_post);
router.post('/ecraPrincipal/chamada', controller.ecraChamada_post);
router.post('/ecraPrincipal/endSession', controller.endSession_post);
router.get('/ecraPrincipal/endSession', controller.endSession_get);
router.get('/ecraVolante/voiceRecognition', controller.voiceRecognition_get);
router.post('/ecraVolante/voiceRecognition', controller.voiceRecognition_post);
router.get('/ecraVolante/mustBeConnected', controller.mustBeConnected_get);
router.get('/ecraVolante/ecraVolanteGPS',controller.ecraVolanteGPS_get);
router.post('/ecraVolante/ecraVolanteGPS',controller.ecraVolanteGPS_post);
router.get('/ecraPrincipal/wifi',controller.ecraPrincipalWifi_get);
router.post('/ecraPrincipal/wifi',controller.ecraPrincipalWifi_post);
router.get('/ecraVolante/voiceRecognition/check',controller.ecraVolanteCheck_get);
router.get('/ecraVolante/triggerChamada',controller.triggerChamada_get);
router.post('/ecraVolante/triggerChamada',controller.triggerChamada_post);
router.get('/ecraPrincipal/calendario',controller.ecraPrincipalCalendario_get);
router.get('/ecraPrincipal/MarchaAtras',controller.ecraMarchaAtras_get);



module.exports = router;

