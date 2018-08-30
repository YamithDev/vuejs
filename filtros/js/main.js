const vm = new Vue({
	el:'main',
	data:{
		mensaje:'Hola mundo',
		nuevoJuego: null,
		juegos:[{
			titulo: 'Battlefield 1',
			genero:'FPS',
			puntuacion:23,
		},
		{
			titulo: 'Pubg',
			genero:'Battle Royale',
			puntuacion:135,
		},
		{
			titulo: 'Pro Evolution Soccer',
			genero:'Deportes',
			puntuacion:378,
		}],
	},
	methods:{
		agregarJuego(){
			this.juegos.unshift({
				titulo: this.nuevoJuego,
				genero: '---',
				puntuacion:0,
			});
			this.nuevoJuego = null;
		}
	},
	computed:{
		mensajeAlReves(){
			return this.mensaje.split('').reverse().join('');
		},

		juegosPorGenero(){
			return this.juegos.filter((juego)=>juego.genero);
		},

		juegosPorPuntuacion(){
			return this.juegos.sort((a,b)=>b.puntuacion - a.puntuacion);
		}
	},
});

