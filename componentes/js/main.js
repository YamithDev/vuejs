Vue.component('mis-tareas',{
	props: ['tareas'],
	template:`<ul class="list-group">
							<li class="list-group-item" v-for="tarea in tareas">{{ tarea.title }}</li>
						</ul>`,
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
			{title:'Hacer la compra'},
			{title:'Hacer la cena'},
			{title:'Hacer la Tarea'}
		]
	}
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