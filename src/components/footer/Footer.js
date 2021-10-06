import React from 'react'


import '../../styles/components/_footer.scss'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>JEduardo Guerrero Rodríguez</h1>
        <p>Ocaña, NS</p>
      </div>
      <div className="footer-contact">
        <h3>Contact me</h3>
        <p>And let's get down to work</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Design By JEduardo</div>
        <div className="sns-links">
          <a
            href="https://github.com/jewar21"
            target="_blank"
            rel="noreferrer"
          >
            <i className="pi pi-github"></i>
          </a>
          <a
            href="https://www.twitter.com/jesseard"
            target="_blank"
            rel="noreferrer"
          >
            <i className="pi pi-twitter"></i>
          </a>
          <a
            href="https://www.facebook.com/JEduGuerRo/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="pi pi-facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}
