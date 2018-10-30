Vue.component('mis-tareas',{
  props:['listado'],
  template: '#mis-tareas-template',
});
new Vue({
  el:'main',
  data:{
    tareas:[
      {titulo:'Salir a correr'},
      {titulo:'Organizar el cuarto'},
      {titulo:'Aprender Vue.js'},
      {titulo:'Aprender Laravel'},
      {titulo:'Hacer ejercicios de lógica mátematica'},
    ]
  }
});