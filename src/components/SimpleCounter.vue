<template>
  <div class="q-pb-lg">
    <q-btn round color="primary" icon="add" @click="actions.inc"/>
    <span class="bg-gray-200 text-xl ml-3 mr-3 q-mx-sm text-h6">
      Counter: {{ state.counter }}
    </span>
    <q-btn round color="primary" icon="remove" @click="actions.dec"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useOvermind } from '../overmind';

export default defineComponent({
  name: 'SimpleCounter',
  setup() {
    const state = useOvermind.state();
    const actions = useOvermind.actions();
    return { state, actions };
  },
});
</script>
