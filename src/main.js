import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import i18n from './i18n'

import { Settings } from 'luxon';

import 'highlight.js/styles/arta.css'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import handlebars from 'highlight.js/lib/languages/handlebars'
import json from 'highlight.js/lib/languages/json'
import xml from 'highlight.js/lib/languages/xml'
import hljsVuePlugin from '@highlightjs/vue-plugin'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('handlebars', handlebars)
hljs.registerLanguage('json', json)
hljs.registerLanguage('xml', xml)
Vue.use(hljsVuePlugin)

Settings.defaultLocale = 'pt-BR';
Vue.config.productionTip = false

new Vue({
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
