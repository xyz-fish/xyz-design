import React from 'react'
import { createRoot } from 'react-dom/client'
import RouterElement from '@/router'

import '@unocss/reset/tailwind.css'

import './index.scss'

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterElement />
  </React.StrictMode>
)
