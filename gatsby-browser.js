import React, { Suspense } from 'react'
import Loader from './src/components/loader'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { locales } from './src/locales'

import 'normalize.css'
import './src/styles/global.css'

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: locales,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // not needed for react!!
    },
    react: {
      wait: true
    }
  })

export const wrapPageElement = ({ element }) => {
  return <Suspense fallback={<Loader />}>{element}</Suspense>
}
