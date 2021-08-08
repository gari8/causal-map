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
          color="cyan"
          @click="modalEditOpen = !modalEditOpen">
          <v-icon dark>
            mdi-pencil
          </v-icon>
        </v-btn>
        <v-btn
          class="floating2 mx-2"
          fab
          dark
          large
          color="red"
          @click="modalCreateOpen = !modalCreateOpen">
          <v-icon dark>
            mdi-plus
          </v-icon>
        </v-btn>
        <create-form :open="modalCreateOpen" :on-submit="pushNode" :on-close="onCloseCreate">
          <div class="selector">
            <v-text-field v-model="inputFormCreate.text" />
            <v-slider
              v-model="inputFormCreate.fx"
              hint="Im a hint"
              max="500"
              min="-500" />
            <v-slider
              v-model="inputFormCreate.fy"
              hint="Im a hint"
              max="500"
              min="-500" />
          </div>
        </create-form>
        <create-form :open="modalEditOpen" :on-submit="editNode" :on-close="onCloseEdit">
          <div class="selector">
            <v-select
              v-model="inputFormEdit.text"
              :items="getNodes"
              persistent-hint
              return-object
              single-line />
            <v-slider
              v-model="inputFormEdit.fx"
              hint="Im a hint"
              max="500"
              min="-500" />
            <v-slider
              v-model="inputFormEdit.fy"
              hint="Im a hint"
              max="500"
              min="-500" />
          </div>
        </create-form>
      </div>
    </sidebar>
  </v-container>
</template>
<script lang="ts">
  import Vue from 'vue'
  import { INode } from 'vue-mindmap'
  import Sidebar from '~/components/organisms/Sidebar.vue'
  import MindMap from '~/components/templates/MindMap.vue'
  import CreateForm from '~/components/organisms/CreateForm.vue'
  export default Vue.extend({
    components: {
      CreateForm,
      Sidebar,
      MindMap
    },
    data () {
      return {
        modalCreateOpen: false,
        modalEditOpen: false,
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
        inputFormCreate: {
          text: '',
          fx: 0,
          fy: 0
        },
        inputFormEdit: {
          text: '',
          fx: 0,
          fy: 0
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
        this.nodes.push(this.inputFormCreate)
        // eslint-disable-next-line no-console
        console.log(this.nodes)
      },
      editNode () {
        const index = this.nodes.indexOf({ text: this.inputFormEdit.text })
        if (index > 0) {
          this.nodes[index] = this.inputFormEdit
        }
      },
      onCloseCreate () {
        this.modalCreateOpen = false
      },
      onCloseEdit () {
        this.modalEditOpen = false
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
.floating2 {
  position: fixed;
  bottom: 180px;
  right: 100px;
}
</style>
