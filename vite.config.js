import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/school_ui/',
  plugins: [react( {
      babel: {
          plugins: [['babel-plugin-react-compiler']],
      },
      }

  )],
})
