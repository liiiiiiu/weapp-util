import { defineConfig } from 'vite'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  // https://cn.vitejs.dev/guide/build.html#library-mode
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/weapp-util.ts'),
      name: 'weapp-util',
      // the proper extensions will be added
      fileName: 'weapp-util'
    }
  }
})
