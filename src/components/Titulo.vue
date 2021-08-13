<template>
  <v-row class="mt-4 mb-8 text-h6">
    <v-col cols="12" class="py-0"><v-divider /></v-col>

    <v-col cols="4" class="text-right"><slot name="coluna1" /></v-col>
    <v-col cols="4"><slot name="coluna2" /></v-col>
    <v-col cols="4"><slot name="coluna3" /></v-col>

    <v-col cols="12" class="py-0"><v-divider /></v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Titulo'
}
</script>
