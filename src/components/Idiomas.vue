<template>
  <v-row class="text-center mb-6">
    <v-col cols="3" />
    <v-col>
      <v-btn fab x-large @click="trocarIdioma('pt-BR')" class="mx-4 my-2">
        <v-avatar size="72">
          <v-img src="@/assets/pt_br.svg" />
        </v-avatar>
      </v-btn>

      <v-btn fab x-large @click="trocarIdioma('es-ES')" class="mx-4 my-2">
        <v-avatar size="72">
          <v-img src="@/assets/es.svg" />
        </v-avatar>
      </v-btn>

      <v-btn fab x-large @click="trocarIdioma('en-US')" class="mx-4 my-2">
        <v-avatar size="72">
          <v-img src="@/assets/en.svg" />
        </v-avatar>
      </v-btn>

      <v-btn fab x-large @click="trocarIdioma('ja-JP')" class="mx-4 my-2">
        <v-avatar color="#BD0029" />
      </v-btn>
    </v-col>
    <v-col cols="3" />
  </v-row>
</template>

<script>
import {Settings} from 'luxon';

export default {
  name: 'Idiomas',
  methods: {
    trocarIdioma(lang){
      this.$i18n.locale = lang;
      Settings.defaultLocale = lang;
    }
  }
}
</script>
