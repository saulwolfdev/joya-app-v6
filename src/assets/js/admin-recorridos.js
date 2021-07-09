export default {
    collapseTriggers: document.querySelectorAll('.collapse-all'),


    init: function() {
    	//Esto no debería ser necesario! sólo para implementar pastillas de ejemplo
        this.collapseTriggers.forEach(function(trigger) {
            trigger.addEventListener('click', (e) => {
            	document.querySelectorAll(".collapse-table").forEach((table) => {
                    table.classList.remove("show");
                    document.querySelector("[data-bs-toggle='collapse'][href='#"+table.id+"']").classList.add("collapsed");
                });
            });
        });
    }
} 