
import { useState, useEffect } from 'react';
import './App.scss';

import { Github, Twitter, Codepen, Linkdin } from './svg'

function App() {

  const [ligth, setLight] = useState(true)

  useEffect(() => eyeLead())
  const eyeLead = () => {
    const wrapper = document.querySelector('.wrapper')
    wrapper.addEventListener('mousemove', (e) => {
      const eye = document.querySelector('.eye')
      const eye2 = document.querySelector('.eye2')
      const x = eye.getBoundingClientRect().left
      const x2 = eye2.getBoundingClientRect().left
      const y = eye.getBoundingClientRect().top
      const y2 = eye2.getBoundingClientRect().top
      const rad = Math.atan2(e.pageX - x, e.pageY - y)
      const rad2 = Math.atan2(e.pageX - x2, e.pageY - y2)
      const rotationDegrees = rad * (180 / Math.PI) * -1 + 180
      const rotationDegrees2 = rad2 * (180 / Math.PI) * -1 + 180
      eye.style.transform = `rotate(${rotationDegrees}deg)`
      eye2.style.transform = `rotate(${rotationDegrees2}deg)`
    })
  }
  return (

      <div
        className="wrapper"
        style=
        {ligth ? {
          backgroundColor: '#2f2c43'
        } : { backgroundColor: '#fbc8d2' }}

      >
        <div className="vector" onClick={() => setLight(!ligth)}>
          <div className="light">
            {
              ligth && <div className="light-on"> </div>
            }

            <div className="bolb"> </div>
          </div>

          <div className="desktop">
            
          <div class="content">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li style={{width: '90%'}}></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li style={{width: '60%'}}></li>
            <li></li>
            <li></li>
            <li style={{width: '70%'}}></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li style={{width: '50%'}}></li>
          </ul>
        </div>
             </div>
          <div className="desk"></div>
          <div className="coffee">
            <div className="eyes">
              <div className="eye"></div>
              <div className="eye eye2"></div>
            </div>
          </div>
        </div>

        <div className="description">
          <p>
            Hi,I'm sanaz I like making fun,interactive things with code.
      </p>
          <div className="social">
            <span>

              <Github width="30" height="30"/>

            </span>
            <span>

              <Linkdin width="30" height="30"/>

            </span>
            <span>

              <Codepen width="30" height="30"/>

            </span>
            <span>

              <Twitter width="30" height="30"/>

            </span>
          </div>
        </div>
      </div >
  
  )
}

export default App;
