<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'App',
  beforeMount () {
    window.sessionStorage.removeItem('UZWEBGL_CRASH')
    window.sessionStorage.removeItem('UZWEBGL_MOBILITY')
  }
})
</script>
