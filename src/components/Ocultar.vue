<template>
  <div class="d-flex">
    <v-row :style="opacidade">
      <v-col cols="4" class="text-right text-h6 font-weight-regular">
        <slot name="coluna1" />
      </v-col>
      <v-col cols="4">
        <slot name="coluna2" />
      </v-col>
      <v-col cols="4">
        <slot name="coluna3" />
      </v-col>

      <v-col cols="12" class="py-4" />
    </v-row>

    <v-btn icon x-large class="ml-2 mt-n4" @click="ocultar = !ocultar" :color="corBotao">
      <v-icon v-if="habilitarBotao">mdi-eye</v-icon>
      <v-icon v-else>mdi-eye-off</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Ocultar',
  props: {
    mostrar: { type: Boolean, default: false }
  },
  data: () => ({
    ocultar: true
  }),
  computed: {
    habilitarBotao() {
      return this.ocultar;
    },
    opacidade() {
      return this.habilitarBotao ? 'opacity: 0.1;' : 'opacity: 1;';
    },
    corBotao() {
      return this.habilitarBotao ? 'grey' : 'grey lighten-2';
    }
  },
  mounted() {
    this.ocultar = !this.mostrar;
  }
}
</script>
