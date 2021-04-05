import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'




const Home = () => {




  return <>
    <section id="home" className="hero is-black is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns  is-vcentered reverse-columns">
            <div className="column
          is-10-mobile is-offset-1-mobile
          is-10-tablet is-offset-1-tablet
          is-5-desktop is-offset-1-desktop
          is-5-widescreen is-offset-1-widescreen
          is-5-fullhd is-offset-1-fullhd" data-aos="fade-down">
              <h1 className="title">Hi, I`m Jess.</h1>
              <h2 className=" subtitle">junior developer, digital marketer & designer.</h2>
              <div className="buttons">
                <AnchorLink href='#bio'><button className="button is-yellow">bio.</button></AnchorLink>
              </div>
            </div>
            <div data-aos="fade-right" className="column
          is-10-mobile is-offset-1-mobile
          is-10-tablet is-offset-1-tablet
          is-4-desktop is-offset-1-desktop
          is-4-widescreen is-offset-1-widescreen
          is-4-fullhd is-offset-1-fullhd">
              <figure className="image">
                <img src="https://cdn.shopify.com/s/files/1/0306/1016/1723/files/JessKaria.png?v=1617095161" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>


  </>




}

export default Home