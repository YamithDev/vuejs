new Vue({
	el:'main',
	data:{
		mensaje:'Instancia vue 1',
	},
	methods:{
		alReves(){
			this.mensaje = this.mensaje.split('').reverse().join('');
		}
	},
	computed:{
		mensajeMayusculas(){
			return this.mensaje.toUpperCase();
		}
	}
});