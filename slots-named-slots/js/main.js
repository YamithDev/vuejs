Vue.component('alerta',{
  props:['tipo','posicion'],
  template:`
    <section class="alerta" :class="[tipo, posicion]">
      <header class="alerta_header">
        <slot name="header">
          Hola
        </slot>
      </header>
      <div class="alerta_contenido">
        <slot name="contenido">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.Atque laudantium nam cum dolores aliquid, 
          ad amet beatae, enim facere pariatur quasi a.Voluptatem deserunt eos quisquam repellat magnam tenetur sit ?
        </slot>
      </div>
      <footer class="alerta_footer">
        <slot name="footer">
          Este es el texto del footer
        </slot>
      </footer>
    </section>
  `,
});

new Vue({
  el:'main',
});