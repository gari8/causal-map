<template>
  <mindmap class="map" :nodes="nodes" :connections="connections" :editable="true" />
</template>
<script lang="ts">
  import Vue, { PropType } from 'vue'
  import Mindmap, { IConnection, INode } from 'vue-mindmap'
  import 'vue-mindmap/dist/vue-mindmap.css'
  const MM: any = Mindmap
  Vue.use(MM)
  export default Vue.extend({
    name: 'MindMap',
    props: {
      nodes: {
        type: Array as PropType<INode[]>,
        default: () => []
      },
      connections: {
        type: Array as PropType<IConnection[]>,
        default: () => []
      }
    },
    data (): {

    } {
      return {

      }
    }
  })
</script>
<style lang="scss" scoped>
.map {
  width: 100%;
  height: 100vh !important;
}
</style>
