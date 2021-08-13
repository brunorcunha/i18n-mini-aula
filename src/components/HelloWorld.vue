<template>
  <v-container class="pb-16">
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('@/assets/logo.png')"
          class="my-3"
          contain
          height="300"
        />
      </v-col>

      <v-col>
        <h1 class="display-2 font-weight-bold mb-3">
          {{ $t('internacionalizacao') }}
        </h1>

        <p class="subheading font-weight-regular">
          {{ $t('internacionalizacaodesc') }}
        </p>
      </v-col>
    </v-row>

    <v-row class="text-center mt-4 mb-8">
      <v-col cols="3" />

      <v-col>
        <h2 class="headline font-weight-bold mb-3">Vue-i18n</h2>

        <v-row justify="center">
          <a href="https://kazupon.github.io/vue-i18n/started.html" class="subheading mx-3" target="_blank">
            Documentação
          </a>
        </v-row>
      </v-col>

      <v-col>
        <h2 class="headline font-weight-bold mb-3">Intl NumberFormat</h2>

        <v-row justify="center">
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat" class="subheading mx-3" target="_blank">
            Documentação
          </a>
        </v-row>
      </v-col>

      <v-col>
        <h2 class="headline font-weight-bold mb-3">Luxon (MomentJs)</h2>

        <v-row justify="center">
          <a href="https://moment.github.io/luxon/#/formatting?id=table-of-tokens" class="subheading mx-3" target="_blank">
            Documentação
          </a>
        </v-row>
      </v-col>

      <v-col cols="3" />
    </v-row>

    <Idiomas />

    <Titulo>
      <template #coluna1>Tradução</template>
      <template #coluna2>Template</template>
      <template #coluna3>Locale ({{ $i18n.locale }})</template>
    </Titulo>

    <Ocultar mostrar>
      <template #coluna1>
        {{ $t('helloworld') }}
      </template>
      <template #coluna2>
        <highlightjs autodetect code="$t('helloworld')" />
      </template>
      <template #coluna3>
        <highlightjs autodetect :code="`{ 'helloworld': '${$t('helloworld')}' }`" />
      </template>
    </Ocultar>

    <Ocultar>
      <template #coluna1>
        {{ $t('termos1') }} <a href="/termos">{{ $t('termos2') }}</a>
      </template>
      <template #coluna2>
        <highlightjs autodetect code="$t('termos1') <a href='/termos'>$t('termos2')</a>" />
      </template>
      <template #coluna3>
        <highlightjs autodetect :code="`{
  'termos1': '${$i18n.messages[$i18n.locale]['termos1']}',
  'termos2': '${$i18n.messages[$i18n.locale]['termos2']}'
}`" />
      </template>
    </Ocultar>

    <Ocultar>
      <template #coluna1>
        <i18n path="aceito">
          <a href="/termos">{{ $t('termosdeservico') }}</a>
        </i18n>
      </template>
      <template #coluna2>
        <highlightjs autodetect code="<i18n path='aceito'>
  <a href='/termos'> $t('termosdeservico') </a>
</i18n>" />
      </template>
      <template #coluna3>
        <highlightjs autodetect :code="`{
  'aceito': '${$i18n.messages[$i18n.locale]['aceito']}',
  'termosdeservico': '${$i18n.messages[$i18n.locale]['termosdeservico']}'
}`" />
      </template>
    </Ocultar>

    <Ocultar>
      <template #coluna1>
        {{ $t('ola', { nome: 'Bruno' }) }}
      </template>
      <template #coluna2>
        <highlightjs autodetect code="$t('ola', { nome: 'Bruno' })" />
      </template>
      <template #coluna3>
        <highlightjs autodetect :code="`{ 'ola': '${$i18n.messages[$i18n.locale]['ola']}' }`" />
      </template>
    </Ocultar>

    <Ocultar>
      <template #coluna1>
        {{ $t('vars', ['Array indice 1', 'Array 2', 'Index 3']) }}
      </template>
      <template #coluna2>
        <highlightjs autodetect code="$t('vars', ['Array indice 1', 'Array 2', 'Index 3'])" />
      </template>
      <template #coluna3>
        <highlightjs autodetect :code="`{ 'vars': '${$i18n.messages[$i18n.locale]['vars']}' }`" />
      </template>
    </Ocultar>

    <Ocultar>
      <template #coluna1>
        {{ $tc('paciente', 1) }}<br>
        {{ $tc('paciente', 2) }}
      </template>
      <template #coluna2>
        <highlightjs autodetect code="$tc('paciente', 1)
$tc('paciente', 2)" />
      </template>
      <template #coluna3>
        <highlightjs autodetect :code="`{ 'paciente': '${$i18n.messages[$i18n.locale]['paciente']}' }`" />
      </template>
    </Ocultar>

    <Ocultar>
      <template #coluna1>
        {{ $tc('psicologo', 0) }}<br>
        {{ $tc('psicologo', 1) }}<br>
        {{ $tc('psicologo', 10, [10]) }}
      </template>
      <template #coluna2>
        <highlightjs autodetect code="$tc('psicologo', 0)
$tc('psicologo', 1)
$tc('psicologo', 10, [10])" />
      </template>
      <template #coluna3>
        <highlightjs autodetect :code="`{ 'psicologo': '${$i18n.messages[$i18n.locale]['psicologo']}' }`" />
      </template>
    </Ocultar>

    <Ocultar>
      <template #coluna1>
        {{ $t('fallback') }}
      </template>
      <template #coluna2>
        <highlightjs autodetect code="$t('fallback')" />
      </template>
      <template #coluna3>
        <highlightjs autodetect :code="`{ 'fallback': '${$i18n.messages[$i18n.locale]['fallback']}' }`" />
      </template>
    </Ocultar>

    <Titulo>
      <template #coluna1>Número</template>
      <template #coluna2>Template</template>
      <template #coluna3>Intl.NumberFormat ({{ $i18n.locale }})</template>
    </Titulo>

    <Ocultar>
      <template #coluna1>
        {{ $n(100, 'currency') }}<br>
        {{ $n(100000000.99) }}
      </template>
      <template #coluna2>
        <highlightjs autodetect code="$n(100, 'currency')
$n(100000000.99)" />
      </template>
      <template #coluna3>
        <highlightjs autodetect :code="`const numberFormats = {
'${$i18n.locale}': ${JSON.stringify($i18n.numberFormats[$i18n.locale], null, 4)}
}`" />
      </template>
    </Ocultar>

    <Titulo>
      <template #coluna1>Data</template>
      <template #coluna2>Template</template>
      <template #coluna3>Luxon ({{ $i18n.locale }})</template>
    </Titulo>

    <Ocultar>
      <template #coluna1>
        {{ dataLuxon.toFormat('dd/MM/yyyy HH:mm:ss') }}
      </template>
      <template #coluna2>
        <highlightjs autodetect code="DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss')" />
      </template>
    </Ocultar>

    <Ocultar>
      <template #coluna1>
        {{ dataLuxon.toFormat('F') }}
      </template>
      <template #coluna2>
        <highlightjs autodetect code="DateTime.now().toFormat('F')" />
      </template>
    </Ocultar>

    <Ocultar>
      <template #coluna1>
        {{ dataLuxon.toFormat('D') }}
      </template>
      <template #coluna2>
        <highlightjs autodetect code="DateTime.now().toFormat('D')" />
      </template>
    </Ocultar>

    <Ocultar>
      <template #coluna1>
        {{ dataLuxon.toFormat('DDDD') }}
      </template>
      <template #coluna2>
        <highlightjs autodetect code="DateTime.now().toFormat('DDDD')" />
      </template>
    </Ocultar>

  </v-container>
</template>

<script>
import { DateTime } from 'luxon';
import Idiomas from "@/components/Idiomas";
import Ocultar from "@/components/Ocultar";
import Titulo from "@/components/Titulo";

export default {
  name: 'HelloWorld',
  components: {Titulo, Ocultar, Idiomas},
  computed: {
    locale() {
      return this.$i18n.locale;
    },
    dataLuxon() {
      return DateTime.now().setLocale(this.locale);
    }
  }
}
</script>
