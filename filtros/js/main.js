const vm = new Vue({
	el:'main',
	data:{
		busqueda: '',
		minimo: 5,
		juegos:[{
			titulo: 'Battlefield 1',
			genero:'FPS',
			puntuacion:7,
		},
		{
			titulo: 'Pubg',
			genero:'Battle Royale',
			puntuacion:9,
		},
		{
			titulo: 'Pro Evolution Soccer',
			genero:'Deportes',
			puntuacion:5,
		}],
	},
	computed:{
		mejoresJuegos(){
			return this.juegos.filter((juego)=>juego.puntuacion >= this.minimo);
		},

		buscarJuegos(){
			return this.juegos.filter((juego)=>juego.titulo.includes(this.busqueda));
		}
	},
});

