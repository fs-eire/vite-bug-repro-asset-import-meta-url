import './style.css'

import * as wasmLib from 'test-wasm-library'

document.addEventListener('DOMContentLoaded', async () => {
  await wasmLib.init()

  document.querySelector('#result').textContent = `Result: ${wasmLib.fac(5)}`
})

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Vite!</h1>
    <div class="card">
      <p id="result">Loading</p>
    </div>
  </div>
`