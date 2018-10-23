/*jshint -W104*/
/*jshint -W119*/

Vue.component('mis-tareas',{
	props: ['tareas'],
	template:`
		<ul class="list-group">
			<li class="list-group-item"
				@click="completarTarea(tarea)"
				:class="{completado: tarea.completed}"
				v-for="tarea in tareas">
				{{ tarea.title }}
			</li>
		</ul>`,
	methods:{
		completarTarea(tarea){
			tarea.completed = !tarea.completed;
		}
	},
});

new Vue({
	el:'main',
	mounted(){
		axios.get('https://jsonplaceholder.typicode.com/todos')
			.then((respuesta)=>{
				this.tareasAjax = respuesta.data;
		});
	},
	data:{
		tareasAjax:[],
		tareasLocales:[
			{title:'Hacer la compra', completed:false},
			{title:'Hacer la cena',completed:false},
			{title:'Hacer la Tarea',completed:false}
		]
	},
});

// new Vue({
// 	el:'#App',
// });

// Vue.component('mis-tareas',{
// 	template:`<ul class="list-group">
// 							<li class="list-group-item" v-for="tarea in tareas2">{{ tarea.title }}</li>
// 						</ul>`,
// 	mounted(){
// 		axios.get('https://jsonplaceholder.typicode.com/todos')
// 			.then((respuesta)=>{
// 				this.tareas2 = respuesta.data;
// 			});
// 	},
// 	data(){
// 		return{
// 			tareas2:[],
// 		}
// 	}
// });