import { nodeResolve } from "@rollup/plugin-node-resolve"

export default {
  input: './detect-missing-adblocker.js',
  output: {
    file: './dist/detect-missing-adblocker.js',
    format: 'es'
  },
  plugins: [ nodeResolve() ]
}
