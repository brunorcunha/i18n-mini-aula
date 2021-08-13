import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

function loadLocaleMessages () {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

const numberFormats = {
  'en-US': { currency: { style: 'currency', currency: 'USD' } },
  'ja-JP': { currency: { style: 'currency', currency: 'JPY', currencyDisplay: 'symbol' } },
  'es-ES': { currency: { style: 'currency', currency: 'CLP' } },
  'pt-BR': { currency: { style: 'currency', currency: 'BRL' }
  }
}

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'pt-BR',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'pt-BR',
  messages: loadLocaleMessages(),
  numberFormats
})
