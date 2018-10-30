/* jshint -W104 */
/* jshint -W119 */

Vue.component('candidato',{
  props: {
    nombre: {
      type:[String, Array], //null acepta todo tipo
      required:true
    },
    correo: {
      type:String, 
      default:'yamidcueto@prueba.com'
    },
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