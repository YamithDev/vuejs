/*jshint -W104*/
new Vue({
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