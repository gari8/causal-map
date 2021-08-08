<template>
  <v-row justify="center">
    <v-dialog
      :value="open"
      persistent
      max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <slot />
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="blue darken-1"
            text
            @click="onClose">
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="onSubmit">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    name: 'CreateForm',
    props: {
      open: {
        type: Boolean,
        required: true
      },
      onSubmit: {
        type: Function,
        required: true
      },
      onClose: {
        type: Function,
        required: true
      }
    },
    data () {
      return {
        dialog: this.$props.open
      }
    }
  })
</script>
