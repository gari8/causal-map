<template>
  <v-container class="d-flex pa-0" fluid>
    <v-navigation-drawer
      parmanent
      color="sideBar">
      <v-list height="100vh" class="d-flex flex-column justify-lg-space-between">
        <div class="overflow-y-auto">
          <div class="d-flex px-4">
            <v-icon
              large
              color="purple darken-2">
              mdi-dialpad
            </v-icon>
            <v-card-text class="font-weight-black">
              Causal Map
            </v-card-text>
          </div>
          <v-divider />
          <v-expansion-panels class="panelSetting pa-1" flat accordion focusable>
            <v-expansion-panel class="overflow-y-auto">
              <v-expansion-panel-header color="sideBar" class="px-4">
                <v-icon>
                  mdi-file-multiple-outline
                </v-icon><v-card-text class="py-1 px-2 font-weight-bold">
                  Maps
                </v-card-text>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="panelContent">
                <v-treeview activatable hoverable color="warning" :items="items" />
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header color="sideBar" class="px-4">
                <v-icon>
                  mdi-file-multiple-outline
                </v-icon><v-card-text class="py-1 px-2 font-weight-bold">
                  Maps
                </v-card-text>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="panelContent">
                <v-treeview activatable hoverable color="warning" class="scroll-y-transition" :items="items" />
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
        <div>
          <v-divider />
          <div class="listEnd d-flex px-5">
            <v-icon>mdi-cog-outline</v-icon><v-card-text class="px-2 font-weight-bold">
              設定
            </v-card-text>
          </div>
        </div>
      </v-list>
    </v-navigation-drawer>
    <slot />
  </v-container>
</template>
<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    name: 'Sidebar',
    data () {
      return {
        items: [
          {
            id: 1,
            name: 'first'
          },
          {
            id: 2,
            name: 'first'
          },
          {
            id: 3,
            name: 'second'
          },
          {
            id: 4,
            name: 'first'
          },
          {
            id: 5,
            name: 'second'
          },
          {
            id: 6,
            name: 'first'
          },
          {
            id: 7,
            name: 'second'
          },
          {
            id: 8,
            name: 'first'
          },
          {
            id: 9,
            name: 'second'
          },
          {
            id: 10,
            name: 'first'
          },
          {
            id: 11,
            name: 'second'
          }, {
            id: 12,
            name: 'first'
          },
          {
            id: 13,
            name: 'second'
          },
          {
            id: 14,
            name: 'first'
          },
          {
            id: 15,
            name: 'second'
          }
        ]
      }
    },
    methods: {
      onClick () {

      }
    }
  })
</script>
<style lang="scss" scoped>
.panelSetting {
  border-radius: 0;
  box-shadow: none !important;
}
.panelContent {
  ::v-deep div {
    padding: 2px;
  }
}
.listEnd {
  padding: 10px 0;
}
</style>
