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
			axios.get('https://randomuser.me/api/?results=1000')
				.then((respuesta)=>{
					this.personas = respuesta.data.results;
				});
		}
	}
});