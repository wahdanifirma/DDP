<template>
  <div class="fullscreen bg-dark text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div class="text-h4" style="opacity:.4">
        Oops. Nothing here...
      </div>

      <q-btn
        class="q-mt-xl"
        outline rounded
        size="md"
        color="white"
        to="/"
        icon="home"
        no-caps
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Error404',
  beforeMount () {
    window.sessionStorage.removeItem('UZWEBGL_CRASH')
    window.sessionStorage.removeItem('UZWEBGL_MOBILITY')
  }
})
</script>
