import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // lib: {
    //   entry: resolve(__dirname, "src/layout/index.js"),
    //   name: "core-package",
    //   fileName: "index",
    // },
    // rollupOptions: {
    //   external: ["react", "react-router", "react-router-dom", "react-redux"],
    //   output: {
    //     globals: {
    //       react: "React",
    //     },
    //   },
    // },
  }
})