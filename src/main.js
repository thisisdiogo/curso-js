import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    
    <h1>Curso de js Diogo</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Curso de js Diogo
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
