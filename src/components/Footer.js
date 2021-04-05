import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Footer = () => {

  return <>
    <div className="navbar is-black">
      <div className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            <h1 id="footer-createdby" className="subtitle is-5">created by Jess Karia.</h1>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <AnchorLink href='#home'><button className="button is-yellow">back to top.</button></AnchorLink>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Footer