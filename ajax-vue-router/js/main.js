new Vue({
	el:'main',
	mounted(){
		console.log('Instancia montada');
		this.cargarPersona();
	},
	data:{
		personas:[]
	},
	methods:{
		cargarPersona(){
			this.$http.get('https://randomuser.me/api/?results=20')
				.then((respuesta)=>{
					this.personas = respuesta.body.results;
				})
		}
	}
});