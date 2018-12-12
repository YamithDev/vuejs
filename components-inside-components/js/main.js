/* jshint -W119 */

Vue.component('lista-tareas',{
  props:['tareas'],
  template:
    `
      <div>
        <h1><slot></slot></h1>
        <ul>
          <tarea v-for="tarea in tareas" :tarea="tarea"></tarea>
        </ul>  
      </div>
    `
});

Vue.component('tarea',{
  props:['tarea'],
  template:
    `
     <li>{{tarea}}</li>
    `
});

new Vue({
  el:'main',
  data:{
    tareas:[
      'Finalizar sección Componentes',
      'Iniciar WorkFlow con Vue Cli y Webpack',
      'Terminar de estudiar la documentación de VUe',
      'Seguir Jugando con Vue Router y grabar el primer video'
    ]
  }
});