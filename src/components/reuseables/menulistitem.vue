<template>
    
  <router-link class="dn-l link dim" :to="to">
      <li class="bt b--black-10 pointer tr">
        <p class="ph2 h3 inline-flex items-center mv0 near-black ">
          <span class="oi mr1" :data-glyph="icon"></span>
          {{title}}
        </p>
      </li>
  </router-link>

</template>
<script type="text/javascript">
  export default {
    props: [ 'to', 'icon', 'title' ],
  }
</script>
