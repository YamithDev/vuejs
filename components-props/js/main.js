/* jshint -W119 */
/* jshint -W104 */
Vue.component('autor',{
  props:['nombre'],
  mounted () {
    console.log(this.nombre);
  },
  template: `
    <div class="form group">
      <h1>{{nombre}}</h1>
      <button class="btn btn-danger" @click="toMayus">Mayúsculas</button>
      <button class="btn btn-primary" @click="toMinus">Minúsculas</button>
      <button class="btn btn-warning" @click="toTitle">Capitalizar</button>

    </div>
  `,
  computed: {
    
  },
  methods: {
    toMayus() {
      this.nombre = this.nombre.toUpperCase();
    },
      
    toMinus() {
      this.nombre = this.nombre.toLowerCase();
    },
    toTitle() {
      this.nombre = this.toCapitalizeCase(this.nombre);
    },
    toCapitalizeCase(str) {
      return str.replace(
        /\w\S*/g,
        function (txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
      );
    }
  }
});

new Vue({
  el:'main',
  data:{
    autor:'Yamid cueto',
  },
});