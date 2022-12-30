<template>
  <q-layout
    view="lHh Lpr lFf"
    class="bg-grey-3 text-dark"
    style="overflow-y: hidden"
  >
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "HomeLayout",
  computed: {
    isLoggedIn: function () {
      return this.$store.getters["auth/loggedIn"];
    },
  },
});
</script>
