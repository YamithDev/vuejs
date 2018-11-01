/* jshint -W119 */
/* jshint -W104 */
const eventBus = new Vue();

Vue.component('listado-productos',{
  props:['productos'],
  template:`
    <section>
      <table class="table table-bordered">
        <caption>Lista de Productos</caption>
        <thead>
          <tr>
            <th scope="col">Producto</th>
            <th scope="col">Precio</th>
            <th scope="col" class="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="producto in productos">
            <td>
              {{producto.nombre}}
            </td>
            <td>
              {{producto.precio.toFixed(2)}} M.C
            </td>
            <td class="text-center">
              <button class="btn btn-round btn-outline-danger" @click = "eliminarProducto(producto.precio)" > - </button>
              <button class = "btn btn-round btn-outline-success" @click = "anadirProducto(producto.precio)" > + </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>`,
  methods: {
    anadirProducto(precio){
      eventBus.$emit('anadir', precio);
    },
    eliminarProducto(precio){
      eventBus.$emit('eliminar', precio);
    }
  }
});

Vue.component('carrito-compra',{
  template:`
    <section class="float-right">
      <h1>{{total.toFixed(2)}} $</h1>
      <h3>{{cantidadProductos}} Productos</h3>
    </section>
  `,
  data(){
    return{
      cantidadProductos:0,
      total:0
    };
  },
  created () {
    eventBus.$on('anadir',(precio)=>{
      if (this.total>=0) {
        this.total += precio;
        this.cantidadProductos++;
      }
    });
    eventBus.$on('eliminar',(precio)=>{
      if (this.total > 0) {
        this.total -=precio;
        this.cantidadProductos--;
      }
    });
  }
});


new Vue({
  el:'main',
  data:{
    productos:[
      {nombre:'Libro ES6', precio: 39},
      {nombre:'Portátil', precio: 100},
      {nombre:'Café', precio: 150},
      {nombre:'Auriculares', precio: 1200},
      {nombre:'Mouse', precio: 390},
    ],
  },
});