/* jshint -W104 */
/* jshint -W119 */

Vue.component('candidato',{
  props: {
    nombre: String,
    correo: String,
    imagen: String
  },
  template: '#candidato-template',
});

new Vue({
  el:'main',
  mounted () {
    this.obtenerCandidatos();
  },
  data:{
    candidatos:[]
  },
  methods: {
    obtenerCandidatos() {
      axios.get('https://randomuser.me/api/?results=20')
        .then((respuesta)=>{
          this.candidatos = respuesta.data.results;
        });
    }
  }
});