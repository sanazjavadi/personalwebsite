
import { useState, useRef } from 'react';
import './App.scss';

import { Github, Twitter, Codepen, Linkdin } from './svg'

function App() {

  const [ligth, setLight] = useState(true)
  const [open, setOpen] = useState(true)
  const [clicked, setClicked] = useState(false)
  const [Eye1, setLeftEye] = useState()
  const [Eye2, setrightEye] = useState()
  const leftEye = useRef()
  const rightEye = useRef()
  

  const eyeLead = (e) => {
   
      const x = leftEye.current.getBoundingClientRect().left
      const x2 = rightEye.current.getBoundingClientRect().left
      const y = leftEye.current.getBoundingClientRect().top
      const y2 = rightEye.current.getBoundingClientRect().top
      const rad = Math.atan2(e.pageX - x, e.pageY - y)
      const rad2 = Math.atan2(e.pageX - x2, e.pageY - y2)
      const rotationDegrees = rad * (180 / Math.PI) * -1 + 180
      const rotationDegrees2 = rad2 * (180 / Math.PI) * -1 + 180
     setLeftEye({transform: `rotate(${rotationDegrees}deg)`})
     setrightEye({transform: `rotate(${rotationDegrees2}deg)`})
  
   
  }
  return (

    <div
      className="wrapper"
      onMouseMove={eyeLead}
      style=
      {ligth ? {
        backgroundColor: '#2f2c43'
      } : { backgroundColor: '#c3aed6' }}

    >


      <div className="vector" onClick={() => {
        setLight(!ligth)
        setOpen(!open)
      }}>

        <div className="light">
          {
            ligth && <div className="light-on"> </div>
          }

          <div className="bolb"> </div>
        </div>
        <div className="workspace">
          <div className="coffee">
            <div className="eyes">
              <div className="eye" ref={leftEye} style={Eye1}></div>
              <div className="eye eye2" ref={rightEye} style={Eye2}></div>
            </div>
          </div>
          <div className={`laptop ${!open ? 'laptop--closed' : ''}`}>

            <div className="laptop-block">

            </div>
            <div className="laptop-top">

              <div>

              </div>
              <div>
                <ul>
                  <li></li>
                  <li></li>
                  <li style={{ width: '50%' }}></li>
                  <li></li>
                  <li style={{ width: '70%' }}></li>
                  <li></li>
                  <li></li>
                  <li style={{ width: '50%' }}></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="laptop-bottom">
              <div>
                <div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div></div>
              </div>
              <div></div>
            </div>
          </div>
        </div>



        <div className="desk"></div>
  <p className="ps"> 
    P.S :

    {` No svg No image Just pure Css`}</p>
      </div>
      <button class={`toggle ${clicked && 'clicked'}`} id="toggle" onClick={() => {
        setClicked(!clicked)
        setOpen(!open)
        setLight(!ligth)
      }}></button>
      <div className="description">

        <p>
          Hi,I'm sanaz I like making fun,
          interactive things with code.
      </p>
    
        <div className="social">
          <span>
            <a href="https://github.com/sanazjavadi/" >

              <Github width="30" height="30" />

            </a>


          </span>
          <span>
            <a href="
            http://linkedin.com/in/sanaz-javadi-56209a193">
              <Linkdin width="30" height="30" />
            </a>


          </span>
          <span>
            <a href="https://codepen.io/sanazjavadi">
              <Codepen width="30" height="30" />
            </a>


          </span>
          <span>
            <a href="https://twitter.com/sanaz_jvd
">

              <Twitter width="30" height="30" />
            </a>


          </span>
        </div>

      </div>

    </div >

  )
}

export default App;
