setInterval(function(){
		let now = new Date();
		let clock = document.getElementById("clock");
		clock.innerHTML = now.toLocaleTimeString();
}, 1000);


