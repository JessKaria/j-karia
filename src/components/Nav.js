import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { TransitionGroup, CSSTransition } from 'react-transition-group'


const Navbar = () => {
  const [menu, showMenu] = useState(false)

  let nav

  if (menu) {
    nav = <div className="master-menu">
      <div id="yellow-nav" className="navbar">
        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <button className="button is-black" onClick={() => showMenu(!menu)}>contact.</button>
            </div>
          </div>
        </div>
      </div>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <main className="column">
            <div className="column is-flex is-flex-direction-column is-align-items-center">
              <h1 className="title is-1 ">contact.</h1>
              <div className="columns is-mobile">
                <div className="column is-flex is-flex-direction-column is-align-items-center">
                  <a target="blank" href="mailto:jess@baucebrothers.com?subject=Hi Jess!"><h1 id="menu" className="title is-5" >email me. 👨🏾‍💻</h1></a>
                  <a target="blank" href="https://github.com/JessKaria"><h1 id="menu" className="title is-5" >view my code. 💻</h1></a>
                  <a target="blank" href="https://www.linkedin.com/in/jess-karia/"><h1 id="menu" className="title is-5" >connect with me. 🔗</h1></a>
                </div>
              </div>
              <button className="button is-block is-white is-inverted" onClick={() => showMenu(!menu)} type="submit">close.</button>
            </div>
          </main>
        </div>
      </section>
    </div>
  }


  return <>
    <div className="navbar is-black is-fixed-top">
      {nav}
      <a role="button" className="navbar-burger" onClick={() => showMenu(!menu)}>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
      <div className="navbar-menu">
        <div className="navbar-start">
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <AnchorLink href='#bio'><button className="button is-yellow">bio.</button></AnchorLink>
            <AnchorLink href='#projects'><button className="button is-yellow">projects.</button></AnchorLink>
            <AnchorLink href='#interests'><button className="button is-yellow">interests.</button></AnchorLink>
            <button className="button is-yellow" onClick={() => showMenu(!menu)}>contact.</button>

          </div>
        </div>
      </div>
    </div>
  </>



}

export default Navbar