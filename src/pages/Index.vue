<template>
  <q-page class="row items-center justify-evenly">
    <HelloWorld/>
  </q-page>
</template>

<script lang="ts">
import HelloWorld from 'components/HelloWorld.vue';

import { defineComponent } from 'vue';


export default defineComponent({
  name: 'PageIndex',
  components: { HelloWorld },

});
</script>
