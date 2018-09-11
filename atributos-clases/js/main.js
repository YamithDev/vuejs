<<<<<<< HEAD
/*jshint -W104*/
new Vue({
=======
const instancia = new Vue({
>>>>>>> 0bcd89c9c649d301e67761219afb61d6d1503b08
	el:'main',
	data:{
		tareas:[
			{titulo:'Hacer la compra', completado: false},
			{titulo:'Aprender VueJS', completado: false},
			{titulo:'Aprender Firebase', completado: false},
			{titulo:'Dominar ES6', completado: false},
			{titulo:'Hacer Ejercicio', completado: false}
		],
	},
	methods:{	
		completarTarea(tarea){
			tarea.completado = !tarea.completado;
		}
	},
});