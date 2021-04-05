import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'



const Interests = () => {
  return <>
    <div>
      <section id="interests" className="hero is-black is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns  is-vcentered reverse-columns">
              <div className="column
          is-10-mobile is-offset-1-mobile
          is-10-tablet is-offset-1-tablet
          is-5-desktop is-offset-1-desktop
          is-5-widescreen is-offset-1-widescreen
          is-5-fullhd is-offset-1-fullhd" data-aos="fade-down">
                <h1 id="long-title" className="title">interests.</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="hero is-black is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="columns featured-post is-multiline">
                  <div className="column is-12 post">
                    <article className="columns featured">
                      <div className="column is-7 post-img ">
                        <img src="https://cdn.shopify.com/s/files/1/0306/1016/1723/files/Untitled_design_5e38ca1d-aeea-41e0-a28f-e2f0c970b670.png?v=1617214465" alt="" />
                      </div>
                      <div className="column is-5 featured-content va">
                        <div>
                          <h3 className="heading post-category">HOT SAUCE CLUB</h3>
                          <h2 className="title is-1">Bauce Brothers</h2>
                          <hr className="content-divider" />
                          <p className="subtitle is-4">I recently started a hot sauce subscription service, with a close friend and hot sauce enthusiast. Our mission is to bring delicious, small-batch craft hot sauce to the masses, we do this by only working with local hot sauce alchemists that make all vegan, all natural hot sauces with no added preservatives. Each sauce selected goes through a rigorous testing program including blind tasting & flavour profiling to ensure the only thing that gets stung is your taste buds.</p>
                          <a href="https://baucebrothers.com/" id="yellow-buton" className="button is-yellow">sauce</a>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
}

export default Interests



