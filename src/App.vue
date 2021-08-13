<template>
  <v-app>
    <v-main>
      <div class="speeddial">
        <Idiomas />
      </div>

      <HelloWorld/>
    </v-main>

    <v-footer>
      <v-spacer />
      Feito com ❤ por Bruno Cunha
      <v-spacer />
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Idiomas from "@/components/Idiomas";

export default {
  name: 'App',
  components: {
    Idiomas,
    HelloWorld
  }
};
</script>

<style>
.theme--light.v-application code {
  color: #a9b7c6 !important;
  background: #282b2e !important;
  display: block !important;
  overflow-x: auto !important;
  padding: .5em 1em !important;
}
.speeddial {
  position: fixed;
  left: 10px;
  top: 0;
  bottom: 0;
  width: 80px;
}
</style>
