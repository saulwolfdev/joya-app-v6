import { Notification } from './notificaciones'; 

export default {
    triggers: document.querySelectorAll('.notification-trigger'),
    notifications: [],

    init: function() {
    	//Esto no debería ser necesario! sólo para implementar pastillas de ejemplo
        this.triggers.forEach(function(trigger) {
            trigger.addEventListener('click', (e) => {
            	new Notification(e.target.dataset.msg, e.target.dataset.msgtype);
            });
        });
    }
} 