import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/rx8.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Hello there! <br />I'm Yohan</h1>
                          <h2>I work in Product and Mobility </h2>
                          <h2>I've also been known to play around with the Internet of Things</h2>
                          <p><a className="btn btn-primary btn-learn" href="https://docs.google.com/document/d/1DEtOwq-4VCQTkdk8G3TqzJB28p-3elj-KiJSM0xyI8M/edit?usp=sharing" target="_blank" rel="noopener noreferrer">CV<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/tram.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h2>I work at</h2>
                          <h1>WunderMobility</h1>
                          <h2>in Hamburg, Germany as a </h2>
                          <h1>Product Owner</h1>
                          <p><a className="btn btn-primary btn-learn" href="http://wundermobility.com/" target="_blank" rel="noopener noreferrer">Website <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
