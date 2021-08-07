<template>
  <v-container class="pa-0" fluid>
    <sidebar>
      <p>a</p>
    </sidebar>
  </v-container>
</template>
<script lang="ts">
  import Vue from 'vue'
  import Sidebar from '~/components/organisms/Sidebar.vue'
  export default Vue.extend({
    components: {
      Sidebar
    },
    data () {
      return {}
    }
  })
</script>
