export class Notification {
	//Available types in CSS: error, success, warning
	constructor(_message, _type) {
		this.timeout =  6000;
		this.message = _message; 
		this.type = _type; 
		this.toast = document.createElement('div');
		this.toast.className = 'joyaToast ns-box ns-other ns-effect-loadingcircle '+this.type;
		this.toast.innerHTML = '<div class="ns-box-inner">'+
									'<p>'+this.message+'</p>'+
								'</div>'+
								'<span class="ns-close"></span>';
		this.toast.querySelector('.ns-close').addEventListener('click', (e) => {
			console.log(e.target);
			console.log(this);
			this.close();
		});

		let container = document.querySelector('.toast-container');
		container.appendChild(this.toast);
		this.show();
		let self = this; 
		if(this.timeout) {
			setTimeout( function() {
				self.close();
			}, this.timeout );
		}
	}

	show() {
		this.toast.classList.remove('ns-hide');
		this.toast.classList.add('ns-show');
	}
	close() {
		this.toast.classList.add('ns-hide');
		this.toast.classList.remove('ns-show');
		
		let self = this; 
		setTimeout(function() {	self.toast.remove();	}, 280);	 
	}
}