<template>
  <v-container class="pa-0" fluid>
    <sidebar>
      <div>
        <div class="mapWrapper">
          <mind-map :nodes="nodes" :connections="connections" />
        </div>
        <v-btn
          class="floating mx-2"
          fab
          dark
          large
          color="cyan">
          <v-icon dark>
            mdi-pencil
          </v-icon>
        </v-btn>

        <!--        <div class="selector red">-->
        <!--          <v-select-->
        <!--            v-model="mapItem.mapTitle"-->
        <!--            :items="getNodes"-->
        <!--            persistent-hint-->
        <!--            return-object-->
        <!--            single-line />-->
        <!--          <v-btn-->
        <!--            @click="pushNode" />-->
        <!--        </div>-->
      </div>
    </sidebar>
  </v-container>
</template>
<script lang="ts">
  import Vue from 'vue'
  import { INode } from 'vue-mindmap'
  import Sidebar from '~/components/organisms/Sidebar.vue'
  import MindMap from '~/components/templates/MindMap.vue'
  export default Vue.extend({
    components: {
      Sidebar,
      MindMap
    },
    data () {
      return {
        nodes: [
          {
            text: 'test1',
            fx: 10,
            fy: 10
          },
          {
            text: 'test2',
            fx: 100,
            fy: 100
          }
        ],
        connections: [
          {
            source: 'test1',
            target: 'test2',
            curve: {
              x: 100,
              y: 100
            }
          }
        ],
        mapItem: {
          mapTitle: '',
          nodes: [],
          connections: []
        }
      }
    },
    computed: {
      getNodes (): any[] {
        return this.nodes
          ? this.nodes!.filter((node: INode) => {
            return node.text
          })
          : []
      }
    },
    methods: {
      pushNode () {
        // eslint-disable-next-line no-console
        console.log('hi')
      }
    }
  })
</script>
<style lang="scss" scoped>
.selector {
  width: 100%;
  height: 20%;
}
.mapWrapper {
  height: 70%;
  overflow: hidden;
}
.floating {
  position: fixed;
  bottom: 100px;
  right: 100px;
}
</style>
