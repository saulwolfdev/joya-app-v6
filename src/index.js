import { Modal, Dropdown, Accordion } from 'bootstrap';

import "./styles/main.scss";

const mainNav = require("./assets/js/main-nav");
const wizard = require('./assets/js/solicitud-limpieza');
const notifications = require('./assets/js/notificaciones2');
const adminRecorridos = require('./assets/js/admin-recorridos');

document.addEventListener('DOMContentLoaded', function() {
    mainNav.initiateNav(); 
	wizard.init();
	notifications.default.init();
	adminRecorridos.default.init();
});

const devHelper = require('./assets/js/dev-helpers'); //ELIMINAR EN PRODUCCION
devHelper.init();
 