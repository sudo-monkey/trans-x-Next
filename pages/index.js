import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Check from '../components/check'
import Line from '../components/line'
import IconContainer from '../components/icon-container'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>trans-x</title>
          <meta property="og:title" content="trans-x" />
        </Head>
        <section className="home-hero">
          <video
            src="/del.mp4"
            poster="/del-bg-1500h.png"
            loop="true"
            muted="true"
            autoPlay="true"
            preload="auto"
            playsInline="true"
            className="home-video"
          ></video>
          <header data-thq="thq-navbar" className="home-navbar">
            <img alt="image" src="/logo-1500h.png" className="home-branding" />
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <div className="home-hamburger">
                <img alt="image" src="/hamburger.svg" className="home-icon" />
              </div>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="home-nav"
              >
                <div className="home-container1">
                  <img alt="image" src="/logo.svg" className="home-image" />
                  <div data-thq="thq-close-menu" className="home-menu-close">
                    <svg viewBox="0 0 1024 1024" className="home-icon01">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="home-nav1"
                >
                  <span className="home-text">About</span>
                  <span className="home-text001">Features</span>
                  <span className="home-text002">Pricing</span>
                  <span className="home-text003">Team</span>
                  <span className="home-text004">Blog</span>
                </nav>
                <div className="home-container2">
                  <button className="home-login button">Login</button>
                  <button className="button">Register</button>
                </div>
              </div>
              <div className="home-icon-group">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon03"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon05"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon07"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
          <div className="home-hero-content">
            <div className="home-header-container">
              <div className="home-header">
                <h1 className="home-heading">
                  <span>
                    Trans-X
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    with
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text008">confidence</span>
                  <br></br>
                </h1>
              </div>
              <p className="home-caption">
                We are committed into providing excellent sales experience and
                global trade services.
              </p>
            </div>
            <button className="button home-button">
              <span>
                <span>Visit our online store</span>
                <br></br>
              </span>
            </button>
          </div>
        </section>
        <section className="home-note">
          <h2 className="home-caption01">
            <span className="home-text013">
              Trans-X is a fully registered enterprise based in Malaysia
              providing physical goods sales &amp; services on various
              e-commerce platforms. We are also a registered member under
              MATRADE (Malaysia External Trade Development Corporation)
            </span>
            <br></br>
          </h2>
        </section>
        <section className="home-statistics">
          <div className="home-content">
            <div className="home-stat">
              <h3 className="home-header01">Trust</h3>
              <span className="home-caption02">
                Building mutual trust for a long and successful commerce
              </span>
            </div>
            <div className="home-stat1">
              <h3 className="home-header02">Experience</h3>
              <span className="home-caption03">
                Providing a great shopping experience through feedbacks
              </span>
            </div>
            <div className="home-stat2">
              <h3 className="home-header03">Service</h3>
              <span className="home-caption04">
                Ready to provide after-sales and service
              </span>
            </div>
          </div>
        </section>
        <section className="home-slider">
          <div className="home-header04">
            <h2 className="home-heading01">
              <span className="home-text015">We do more than just sales</span>
              <span className="home-text016">
                .
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </h2>
          </div>
          <div className="home-selector">
            <p className="home-caption05">
              <span>
                At Trans-X, we do more than just sales. We are engineers at
                providing a seamless and friendly shopping experience.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                Our goal is bigger than just money, we believe in fostering
                global business relationships and values as the fundamental of
                our business. 
              </span>
            </p>
            <div className="home-slide-titles">
              <div className="slide-title">
                <span>Ecosystems</span>
              </div>
              <div className="slide-title slide-title-active">
                <span>Logistics</span>
              </div>
              <div className="slide-title">
                <span>Fulfilment</span>
              </div>
              <div className="slide-title">
                <span>After-sales</span>
              </div>
            </div>
          </div>
        </section>
        <section className="home-slides">
          <div className="home-slider1 slider blaze-slider">
            <div className="home-slider-container blaze-container">
              <div className="home-slider-track-container blaze-track-container">
                <div className="home-slider-track blaze-track">
                  <div data-role="current-banner" className="banner">
                    <img
                      alt="image"
                      src="/dhl-400h.png"
                      className="home-image01"
                    />
                    <div className="home-content01">
                      <div className="home-header05">
                        <h3 className="home-heading02">
                          <span>DHL</span>
                          <br></br>
                        </h3>
                        <p className="home-caption06">
                          <span>
                            Over 220
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <br></br>
                          <span>destinations worldwide</span>
                        </p>
                      </div>
                      <div className="home-more">
                        <span className="home-caption07">Visit</span>
                        <svg viewBox="0 0 1024 1024" className="home-icon09">
                          <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div data-role="current-banner" className="banner">
                    <img
                      alt="image"
                      src="/singpost-400h.png"
                      className="home-image02"
                    />
                    <div className="home-content02">
                      <div className="home-header06">
                        <h3 className="home-heading03">SingPost</h3>
                        <p className="home-caption08">
                          <span>
                            Over 220
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <br></br>
                          <span>destinations worldwide</span>
                          <br></br>
                        </p>
                      </div>
                      <div className="home-more1">
                        <span className="home-caption09">Visit</span>
                        <svg viewBox="0 0 1024 1024" className="home-icon11">
                          <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    data-role="current-banner"
                    className="banner home-slide2"
                  >
                    <img
                      alt="image"
                      src="/wh-400h.jpeg"
                      className="home-image03"
                    />
                    <div className="home-content03">
                      <div className="home-header07">
                        <h3 className="home-heading04">Warehouse</h3>
                        <p className="home-caption10">
                          One step faster to your doorstep
                        </p>
                      </div>
                      <div className="home-more2">
                        <span className="home-caption11">Visit</span>
                        <svg viewBox="0 0 1024 1024" className="home-icon13">
                          <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div data-role="current-banner" className="banner">
                    <img
                      alt="image"
                      src="/exim-400h.jpg"
                      className="home-image04"
                    />
                    <div className="home-content04">
                      <div className="home-header08">
                        <h3 className="home-heading05">Exim </h3>
                        <p className="home-caption12">Global trade partners</p>
                      </div>
                      <div className="home-more3">
                        <span className="home-caption13">Visit</span>
                        <svg viewBox="0 0 1024 1024" className="home-icon15">
                          <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-controls">
                <button
                  data-role="previous-banner-button"
                  className="home-previous blaze-prev button"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon17">
                    <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                  </svg>
                </button>
                <button
                  data-role="next-banner-button"
                  className="home-next blaze-next button"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon19">
                    <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="home-container4">
              <Script
                html={`<script defer>
const el = document.querySelector('.blaze-slider')

new BlazeSlider(el, {
  all: {
    slidesToShow: 3,
    slideGap: '80px',
    loop: true,
    enableAutoplay: true,
  },
})
</script>`}
              ></Script>
            </div>
          </div>
        </section>
        <section className="home-get-started">
          <div className="home-header-container1">
            <div className="home-header09">
              <h2 className="home-heading06">
                Companies will dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore veniam and more
                opportunities.
              </h2>
              <p className="home-caption14">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="home-button1">
              <button className="button">
                <span>Get started today</span>
              </button>
            </div>
          </div>
          <img
            alt="image"
            src="/getstarted-800w.png"
            className="home-image05"
          />
        </section>
        <section className="home-objectives">
          <div className="home-content05">
            <span className="home-text035">Objectives</span>
            <div className="home-objectives-list">
              <div className="objective">
                <h3 className="home-text036">Growth</h3>
                <p className="home-text037">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="objective home-objective1">
                <h3 className="home-text038">Develop</h3>
                <p className="home-text039">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="objective home-objective2">
                <h3 className="home-text040">Optimize</h3>
                <p className="home-text041">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="home-growth">
          <div className="home-content06">
            <div className="home-header10">
              <div className="home-header11">
                <h2 className="home-heading07">
                  <span>
                    Multiverse optimized for
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text043">growth.</span>
                  <br></br>
                </h2>
              </div>
              <p className="home-caption15">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <p className="home-caption16">
                Dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="home-testimonial">
              <div className="home-content07">
                <span className="home-text045">Testimonial</span>
                <p className="home-text046">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.”
                </p>
              </div>
              <div className="home-information">
                <div className="home-author">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHBvdHJhaXR8ZW58MHx8fHwxNjcxMDU2MzMz&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="home-icon21"
                  />
                  <span className="home-name">Andrew Gonzales</span>
                </div>
                <img alt="image" src="/logoipsum.svg" className="home-from" />
              </div>
            </div>
          </div>
          <div className="home-images">
            <div className="home-square"></div>
            <img alt="image" src="/growth-1400w.png" className="home-image06" />
          </div>
        </section>
        <section className="home-experience">
          <div className="home-images1">
            <div className="home-square1"></div>
            <img
              alt="image"
              src="/experience-1400w.png"
              className="home-image07"
            />
          </div>
          <div className="home-content08">
            <div className="home-header12">
              <div className="home-header-container2">
                <div className="home-header13">
                  <h2 className="home-heading08">
                    <span>A worlds class </span>
                    <span className="home-text048">experience</span>
                  </h2>
                </div>
                <p className="home-caption17">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                  eiusmod.
                </p>
              </div>
              <div className="home-checkmarks">
                <div className="home-check">
                  <div className="home-mark">
                    <svg viewBox="0 0 1024 1024" className="home-icon22">
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                  </div>
                  <span className="home-text049">
                    Duis aute irure dolor in reprehenderit
                  </span>
                </div>
                <div className="home-check1">
                  <div className="home-mark1">
                    <svg viewBox="0 0 1024 1024" className="home-icon24">
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                  </div>
                  <span className="home-text050">
                    Lorem ipsum dolor sit amet
                  </span>
                </div>
                <div className="home-check2">
                  <div className="home-mark2">
                    <svg viewBox="0 0 1024 1024" className="home-icon26">
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                  </div>
                  <span className="home-text051">
                    Voluptate velit esse cillum dolore eu fugiat nulla
                  </span>
                </div>
                <div className="home-check3">
                  <div className="home-mark3">
                    <svg viewBox="0 0 1024 1024" className="home-icon28">
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                  </div>
                  <span className="home-text052">
                    Excepteur sint occaecat cupidatat non proident sunt in culpa
                  </span>
                </div>
              </div>
            </div>
            <div className="home-testimonial1">
              <div className="home-content09">
                <span className="home-text053">Testimonial</span>
                <p className="home-text054">
                  “Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.”
                </p>
              </div>
              <div className="home-information1">
                <div className="home-author1">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY3MTA1NjMzMw&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="home-icon30"
                  />
                  <span className="home-name1">Cory Smith</span>
                </div>
                <img
                  alt="image"
                  src="/logoipsum-2.svg"
                  className="home-from1"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="home-create">
          <div className="home-content10">
            <div className="home-header14">
              <h2 className="home-heading09">
                <span>
                  Create your own
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text056">environment</span>
                <span> now!</span>
                <br></br>
              </h2>
            </div>
            <button className="home-button3 button">
              <span>
                <span>Get started today</span>
                <br></br>
              </span>
            </button>
          </div>
        </section>
        <section className="home-comparision">
          <div className="home-header-container3">
            <div className="home-header15">
              <h2 className="home-heading10">
                <span>Environment c</span>
                <span className="home-text063">omparision</span>
                <br></br>
              </h2>
            </div>
            <p className="home-caption18">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod.
            </p>
          </div>
          <div className="home-table">
            <div className="home-row">
              <div className="home-headers">
                <span className="home-text065">Placeholder</span>
              </div>
              <div className="home-plans">
                <div className="home-row01">
                  <span className="home-text066">TOGHTR</span>
                  <span className="home-text067">AGENCY</span>
                  <span className="home-text068">FRELLANCE</span>
                </div>
              </div>
            </div>
            <div className="home-row02">
              <div className="home-headers1">
                <span className="home-text069">
                  Duis aute irure dolor in reprehenderit
                </span>
              </div>
              <div className="home-plans1">
                <div className="home-row03">
                  <div className="value">
                    <Check></Check>
                  </div>
                  <div className="value">
                    <Check></Check>
                  </div>
                  <div className="value">
                    <Check></Check>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-row04">
              <div className="home-headers2">
                <span className="home-text070">Lorem ipsum dolor sit amet</span>
              </div>
              <div className="home-plans2">
                <div className="home-row05">
                  <div className="value">
                    <Check></Check>
                  </div>
                  <div className="value">
                    <Check></Check>
                  </div>
                  <div className="value">
                    <Line></Line>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-row06">
              <div className="home-headers3">
                <span className="home-text071">
                  Duis aute irure dolor in reprehenderit
                </span>
              </div>
              <div className="home-plans3">
                <div className="home-row07">
                  <div className="value">
                    <span className="home-text072">Custom</span>
                  </div>
                  <div className="value">
                    <Line></Line>
                  </div>
                  <div className="value">
                    <Line></Line>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-row08">
              <div className="home-headers4">
                <span className="home-text073">
                  Duis aute irure dolor in reprehenderit
                </span>
              </div>
              <div className="home-plans4">
                <div className="home-row09">
                  <div className="value">
                    <span className="home-text074">Unlimited</span>
                  </div>
                  <div className="value">
                    <span className="home-text075">Limited</span>
                  </div>
                  <div className="value">
                    <Line></Line>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-row10">
              <div className="home-headers5">
                <span className="home-text076">Lorem ipsum dolor sit amet</span>
              </div>
              <div className="home-plans5">
                <div className="home-row11">
                  <div className="value">
                    <Check></Check>
                  </div>
                  <div className="value">
                    <Line></Line>
                  </div>
                  <div className="value">
                    <span className="home-text077">Limited</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-row12">
              <div className="home-headers6">
                <span className="home-text078">Lorem ipsum dolor sit amet</span>
              </div>
              <div className="home-plans6">
                <div className="home-row13">
                  <div className="value">
                    <Check></Check>
                  </div>
                  <div className="value">
                    <Check></Check>
                  </div>
                  <div className="value">
                    <Check></Check>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-row14">
              <div className="home-headers7">
                <span className="home-text079">Lorem ipsum dolor sit amet</span>
              </div>
              <div className="home-plans7">
                <div className="home-row15">
                  <div className="value">
                    <Check></Check>
                  </div>
                  <div className="value">
                    <span className="home-text080">Limited</span>
                  </div>
                  <div className="value">
                    <Line></Line>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-data">
          <div className="home-header-container4">
            <div className="home-header16">
              <div className="home-row16">
                <h2 className="home-heading11">
                  <span>
                    Understand your data to manage all in one
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text082">platform</span>
                  <br></br>
                </h2>
              </div>
            </div>
            <p className="home-caption19">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="home-content11">
            <div className="home-image08">
              <img alt="image" src="/data-1400w.png" className="home-image09" />
            </div>
            <div className="home-accordion">
              <div data-role="accordion-container" className="accordion">
                <div>
                  <h3 className="home-header17">Management</h3>
                  <p
                    data-role="accordion-content"
                    className="accordion-content"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <IconContainer rootClassName="icon-container-root-class-name"></IconContainer>
              </div>
              <div data-role="accordion-container" className="accordion">
                <div>
                  <h3 className="home-header18">Integrations</h3>
                  <p
                    data-role="accordion-content"
                    className="accordion-content"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <IconContainer rootClassName="icon-container-root-class-name1"></IconContainer>
              </div>
              <div data-role="accordion-container" className="accordion">
                <div>
                  <h3 className="home-header19">Customer Solutions</h3>
                  <p
                    data-role="accordion-content"
                    className="accordion-content"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <IconContainer rootClassName="icon-container-root-class-name2"></IconContainer>
              </div>
              <div data-role="accordion-container" className="accordion">
                <div>
                  <h3 className="home-header20">Recruiting</h3>
                  <p
                    data-role="accordion-content"
                    className="accordion-content"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <IconContainer rootClassName="icon-container-root-class-name3"></IconContainer>
              </div>
              <div>
                <div className="home-container6">
                  <Script
                    html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
                  ></Script>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-customer">
          <div className="home-header21">
            <h2 className="home-heading12">
              <span>
                Customer validation is an essential phase of the
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text085">product development process</span>
              <br></br>
            </h2>
          </div>
          <div className="home-quotes">
            <div className="home-quote">
              <p className="home-quote1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="home-author2">
                <span className="home-name2">Joanna Smith</span>
                <span className="home-location">Briville</span>
              </div>
            </div>
            <div className="home-quote2">
              <p className="home-quote3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="home-author3">
                <span className="home-name3">Joanna Smith</span>
                <span className="home-location1">Briville</span>
              </div>
            </div>
            <div className="home-quote4">
              <p className="home-quote5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="home-author4">
                <span className="home-name4">Joanna Smith</span>
                <span className="home-location2">Briville</span>
              </div>
            </div>
            <div className="home-quote6">
              <p className="home-quote7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="home-author5">
                <span className="home-name5">Joanna Smith</span>
                <span className="home-location3">Briville</span>
              </div>
            </div>
          </div>
          <div className="home-controls1">
            <button className="home-previous1 button">
              <svg viewBox="0 0 1024 1024" className="home-icon31">
                <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
              </svg>
            </button>
            <button className="home-next1 button">
              <svg viewBox="0 0 1024 1024" className="home-icon33">
                <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
              </svg>
            </button>
            <button className="button home-button4">
              <span>
                <span>View all cases</span>
                <br></br>
              </span>
            </button>
          </div>
        </section>
        <section className="home-faq">
          <div className="home-header22">
            <h2 className="home-heading13">
              <span>Frequently asked </span>
              <span className="home-text091">questions</span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </h2>
          </div>
          <div className="home-content20">
            <div className="home-column">
              <div className="home-element04">
                <h3 className="home-header23">
                  Lorem ipsum dolor sit ametetur elit?
                </h3>
                <p className="home-content21">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="home-element05">
                <h3 className="home-header24">
                  Excepteur sint occaecat cupidatat non sunt in culpa qui
                  officia deserunt mollit anim id est laborum?
                </h3>
                <p className="home-content22">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </div>
              <div className="home-element06">
                <h3 className="home-header25">
                  Tempor incididunt ut labore et dolore magna aliquat enim ad
                  minim?
                </h3>
                <p className="home-content23">
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div className="home-column1">
              <div className="home-element07">
                <h3 className="home-header26">
                  Tempor incididunt ut labore et dolore magna aliquat enim ad
                  minim?
                </h3>
                <p className="home-content24">
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className="home-element08">
                <h3 className="home-header27">
                  Lorem ipsum dolor sit ametetur elit?
                </h3>
                <p className="home-content25">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="home-element09">
                <h3 className="home-header28">
                  Incididunt ut labore et dolore?
                </h3>
                <p className="home-content26">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="home-footer">
          <div className="home-content27">
            <div className="home-main">
              <div className="home-branding1">
                <img
                  alt="image"
                  src="/logo-1500h.png"
                  className="home-image10"
                />
                <span className="home-text093">
                  <span>i-City Centralwalk</span>
                  <br></br>
                  <span>Seksyen 7 </span>
                  <br></br>
                  <span>40000 Shah Alam</span>
                  <br></br>
                  <span>Selangor</span>
                  <br></br>
                </span>
              </div>
              <div className="home-links">
                <div className="home-column2">
                  <span className="home-header29">Company</span>
                  <div className="home-list">
                    <Link href="/">
                      <a className="home-link">About</a>
                    </Link>
                    <Link href="/">
                      <a className="home-link01">Services</a>
                    </Link>
                    <Link href="/">
                      <a className="home-link02">How</a>
                    </Link>
                    <Link href="/">
                      <a className="home-link03">
                        <span className="home-text102">Why</span>
                        <br></br>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="home-column3">
                  <span className="home-header30">Extern</span>
                  <div className="home-list1">
                    <Link href="/">
                      <a className="home-link04">News</a>
                    </Link>
                    <Link href="/">
                      <a className="home-link05">Articles</a>
                    </Link>
                    <Link href="/">
                      <a className="home-link06">Blog</a>
                    </Link>
                    <Link href="/">
                      <a className="home-link07">Privacy</a>
                    </Link>
                    <Link href="/">
                      <a className="home-link08">Terms</a>
                    </Link>
                    <Link href="/">
                      <a className="home-link09">Legal</a>
                    </Link>
                    <Link href="/">
                      <a className="home-link10">Press</a>
                    </Link>
                  </div>
                </div>
                <div className="home-column4">
                  <span className="home-header31">Social</span>
                  <div className="home-list2">
                    <Link href="/">
                      <a className="home-link11">LinkedIn</a>
                    </Link>
                    <Link href="/">
                      <a className="home-link12">Twitter</a>
                    </Link>
                    <Link href="/">
                      <a className="home-link13">Instagram</a>
                    </Link>
                    <Link href="/">
                      <a className="home-link14">Facebook</a>
                    </Link>
                    <Link href="/">
                      <a className="home-link15">TikTok</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-bottom">
              <span className="home-text104">
                © 2024 Trans X Trading Enterprise (202403049014) - All rights
                reserved
              </span>
              <button data-role="scroll-top" className="home-button5 button">
                <img alt="image" src="/arrow.svg" className="home-image11" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="home-container8">
            <Script
              html={`<script>
document.addEventListener("DOMContentLoaded", function() {
  // get the element with the "scroll-top" data-role
  const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

  // when the element is clicked
  scrollTopBtn.addEventListener("click", function() {
    // smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
</script>
`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #000000;
          }
          .home-hero {
            width: 100%;
            height: 100vh;
            display: flex;
            position: relative;
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-video {
            top: 0px;
            left: 0px;
            width: 100%;
            filter: opacity(0.6);
            height: 100%;
            position: absolute;
            object-fit: cover;
            border-width: 1px;
          }
          .home-navbar {
            width: 100%;
            display: flex;
            z-index: 1000;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            justify-content: space-between;
          }
          .home-branding {
            width: 120px;
            object-fit: cover;
          }
          .home-burger-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-hamburger {
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
            background-color: #0000f5;
          }
          .home-hamburger:hover {
            opacity: 0.5;
          }
          .home-icon {
            width: 60px;
            object-fit: cover;
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            color: var(--dl-color-gray-white);
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 100;
            position: fixed;
            transform: translateX(100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-black);
          }
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-image {
            height: 2rem;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon01 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-nav1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text001 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text002 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text003 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text004 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-container2 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .home-login {
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon-group {
            fill: var(--dl-color-gray-white);
            display: flex;
          }
          .home-icon03 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon05 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon07 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-hero-content {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header-container {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading {
            color: rgb(255, 255, 255);
            font-size: 100px;
            max-width: 790px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text008 {
            font-style: italic;
            font-family: 'Playfair Display';
            font-weight: 500;
          }
          .home-caption {
            color: rgb(255, 255, 255);
            font-size: 24px;
            max-width: 600px;
            line-height: 36px;
          }
          .home-note {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-end;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: flex-start;
          }
          .home-caption01 {
            color: rgb(124, 124, 128);
            font-size: 40px;
            max-width: 800px;
            font-style: normal;
            font-weight: 400;
            line-height: 52px;
            margin-right: 158px;
          }
          .home-statistics {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .home-content {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            border-color: #313133;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 1px;
            border-bottom-width: 1px;
          }
          .home-stat {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            border-color: #313133;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
            border-right-width: 1px;
          }
          .home-header01 {
            color: rgb(255, 255, 255);
            font-size: 62px;
            font-style: italic;
            text-align: center;
            font-family: 'Playfair Display';
            font-weight: 500;
            line-height: 73px;
          }
          .home-caption02 {
            color: rgb(124, 124, 128);
            font-size: 16px;
            line-height: 24px;
          }
          .home-stat1 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            border-color: #313133;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
            border-right-width: 1px;
          }
          .home-header02 {
            color: rgb(255, 255, 255);
            font-size: 62px;
            font-style: italic;
            text-align: center;
            font-family: 'Playfair Display';
            font-weight: 500;
            line-height: 73px;
          }
          .home-caption03 {
            color: rgb(124, 124, 128);
            font-size: 16px;
            line-height: 24px;
          }
          .home-stat2 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .home-header03 {
            color: rgb(255, 255, 255);
            font-size: 62px;
            font-style: italic;
            text-align: center;
            font-family: 'Playfair Display';
            font-weight: 500;
            line-height: 73px;
          }
          .home-caption04 {
            color: rgb(124, 124, 128);
            font-size: 16px;
            line-height: 24px;
          }
          .home-slider {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
          }
          .home-header04 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading01 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            max-width: 900px;
            font-style: normal;
            font-weight: 400;
          }
          .home-text015 {
            font-weight: 400;
          }
          .home-text016 {
            font-style: italic;
            font-family: 'Playfair Display';
            font-weight: 500;
          }
          .home-selector {
            width: 100%;
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-caption05 {
            color: rgb(124, 124, 128);
            font-size: 24px;
            max-width: 600px;
            line-height: 36px;
          }
          .home-slide-titles {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-slides {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-slider1 {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-slider-container {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-slider-track-container {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-slider-track {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-image01 {
            height: 400px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-content01 {
            height: 400px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-header05 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            flex-direction: column;
          }
          .home-heading02 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
          }
          .home-caption06 {
            color: rgb(204, 204, 255);
            max-width: 600px;
            line-height: 24px;
          }
          .home-more {
            gap: 4px;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-more:hover {
            opacity: 0.5;
          }
          .home-caption07 {
            color: rgb(255, 255, 255);
            max-width: 600px;
            font-style: normal;
            font-weight: 500;
          }
          .home-icon09 {
            fill: #ffffff;
            width: 14px;
            height: 14px;
          }
          .home-image02 {
            height: 400px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-content02 {
            height: 400px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-header06 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            flex-direction: column;
          }
          .home-heading03 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
          }
          .home-caption08 {
            color: rgb(204, 204, 255);
            max-width: 600px;
            line-height: 24px;
          }
          .home-more1 {
            gap: 4px;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-more1:hover {
            opacity: 0.5;
          }
          .home-caption09 {
            color: rgb(255, 255, 255);
            max-width: 600px;
            font-style: normal;
            font-weight: 500;
          }
          .home-icon11 {
            fill: #ffffff;
            width: 14px;
            height: 14px;
          }
          .home-image03 {
            height: 400px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-content03 {
            height: 400px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-header07 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            flex-direction: column;
          }
          .home-heading04 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
          }
          .home-caption10 {
            color: rgb(204, 204, 255);
            max-width: 600px;
            line-height: 24px;
          }
          .home-more2 {
            gap: 4px;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-more2:hover {
            opacity: 0.5;
          }
          .home-caption11 {
            color: rgb(255, 255, 255);
            max-width: 600px;
            font-style: normal;
            font-weight: 500;
          }
          .home-icon13 {
            fill: #ffffff;
            width: 14px;
            height: 14px;
          }
          .home-image04 {
            height: 400px;
            object-fit: cover;
            aspect-ratio: 1;
          }
          .home-content04 {
            height: 400px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-header08 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            flex-direction: column;
          }
          .home-heading05 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
          }
          .home-caption12 {
            color: rgb(204, 204, 255);
            max-width: 600px;
            line-height: 24px;
          }
          .home-more3 {
            gap: 4px;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-more3:hover {
            opacity: 0.5;
          }
          .home-caption13 {
            color: rgb(255, 255, 255);
            max-width: 600px;
            font-style: normal;
            font-weight: 500;
          }
          .home-icon15 {
            fill: #ffffff;
            width: 14px;
            height: 14px;
          }
          .home-controls {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-previous {
            display: flex;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
          }
          .home-icon17 {
            fill: #ffffff;
            width: 24px;
            height: 24px;
          }
          .home-next {
            display: flex;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
          }
          .home-icon19 {
            fill: #ffffff;
            width: 24px;
            height: 24px;
          }
          .home-container4 {
            display: contents;
          }
          .home-get-started {
            width: 100%;
            display: none;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
          }
          .home-header-container1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            z-index: 100;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-header09 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading06 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            font-style: normal;
            font-weight: 400;
          }
          .home-caption14 {
            color: rgb(124, 124, 128);
            font-size: 24px;
            max-width: 600px;
            line-height: 36px;
          }
          .home-button1 {
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image05 {
            top: 0px;
            right: 0px;
            width: 720px;
            bottom: 0px;
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-objectives {
            width: 100%;
            display: none;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-content05 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            border-color: #313133;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
            border-top-width: 1px;
          }
          .home-text035 {
            color: #7c7c80;
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 5%;
            text-transform: uppercase;
          }
          .home-objectives-list {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text036 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text037 {
            color: rgb(124, 124, 128);
            line-height: 24px;
          }
          .home-text038 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text039 {
            color: rgb(124, 124, 128);
            line-height: 24px;
          }
          .home-text040 {
            color: #ffffff;
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text041 {
            color: rgb(124, 124, 128);
            line-height: 24px;
          }
          .home-growth {
            width: 100%;
            display: none;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
          }
          .home-content06 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header10 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header11 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading07 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            font-style: normal;
            font-weight: 400;
          }
          .home-text043 {
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 500;
          }
          .home-caption15 {
            color: #7c7c80;
            width: 100%;
            font-size: 24px;
            max-width: 560px;
            line-height: 36px;
          }
          .home-caption16 {
            color: rgb(124, 124, 128);
            width: 100%;
            font-size: 24px;
            max-width: 560px;
            line-height: 36px;
            border-color: #313133;
            padding-bottom: var(--dl-space-space-threeunits);
            border-bottom-width: 1px;
          }
          .home-testimonial {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-content07 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text045 {
            color: rgb(124, 124, 128);
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 5%;
            text-transform: uppercase;
          }
          .home-text046 {
            color: rgb(255, 255, 255);
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 5%;
          }
          .home-information {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-author {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-color: #7c7c80;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: center;
            border-right-width: 1px;
          }
          .home-icon21 {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .home-name {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-from {
            width: 125px;
            object-fit: cover;
          }
          .home-images {
            flex: 1;
            display: flex;
            position: relative;
            align-items: flex-end;
            padding-top: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-square {
            top: 64px;
            right: -35px;
            width: 180px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            aspect-ratio: 1;
            flex-direction: row;
            justify-content: flex-start;
            background-color: #0000ff;
          }
          .home-image06 {
            width: 640px;
            z-index: 100;
            margin-top: var(--dl-space-space-sixunits);
            object-fit: cover;
          }
          .home-experience {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: none;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-end;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .home-images1 {
            flex: 1;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: column;
            justify-content: flex-end;
          }
          .home-square1 {
            left: -35px;
            width: 180px;
            bottom: -35px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            aspect-ratio: 1;
            flex-direction: row;
            justify-content: flex-start;
            background-color: #0000ff;
          }
          .home-image07 {
            width: 575px;
            z-index: 100;
            object-fit: cover;
          }
          .home-content08 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header12 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
            border-bottom-width: 1px;
          }
          .home-header-container2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header13 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading08 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            font-style: normal;
            font-weight: 400;
          }
          .home-text048 {
            font-family: Playfair Display;
          }
          .home-caption17 {
            color: rgb(124, 124, 128);
            width: 100%;
            font-size: 24px;
            max-width: 560px;
            line-height: 36px;
          }
          .home-checkmarks {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-check {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-mark {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #0000f5;
          }
          .home-icon22 {
            fill: #ffffff;
            width: 12px;
            height: 12px;
          }
          .home-text049 {
            color: rgb(255, 255, 255);
            line-height: 24px;
          }
          .home-check1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-mark1 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #0000f5;
          }
          .home-icon24 {
            fill: #ffffff;
            width: 12px;
            height: 12px;
          }
          .home-text050 {
            color: rgb(255, 255, 255);
            line-height: 24px;
          }
          .home-check2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-mark2 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #0000f5;
          }
          .home-icon26 {
            fill: #ffffff;
            width: 12px;
            height: 12px;
          }
          .home-text051 {
            color: rgb(255, 255, 255);
            line-height: 24px;
          }
          .home-check3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-mark3 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #0000f5;
          }
          .home-icon28 {
            fill: #ffffff;
            width: 12px;
            height: 12px;
          }
          .home-text052 {
            color: rgb(255, 255, 255);
            line-height: 24px;
          }
          .home-testimonial1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-content09 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text053 {
            color: rgb(124, 124, 128);
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 5%;
            text-transform: uppercase;
          }
          .home-text054 {
            color: rgb(255, 255, 255);
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 5%;
          }
          .home-information1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-author1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            border-color: #7c7c80;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: center;
            border-right-width: 1px;
          }
          .home-icon30 {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .home-name1 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-from1 {
            width: 100px;
            object-fit: cover;
          }
          .home-create {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: none;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-end;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .home-content10 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            background-color: #0000f5;
          }
          .home-header14 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading09 {
            color: rgb(255, 255, 255);
            font-size: 100px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .home-text056 {
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 500;
          }
          .home-button3 {
            background-color: #000000;
          }
          .home-comparision {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: none;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-header-container3 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-header15 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-heading10 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            font-style: normal;
            font-weight: 400;
          }
          .home-caption18 {
            color: rgb(124, 124, 128);
            width: 100%;
            font-size: 24px;
            max-width: 560px;
            text-align: center;
            line-height: 36px;
          }
          .home-table {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-row {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-headers {
            flex: 0.6;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-text065 {
            color: rgba(255, 255, 255, 0);
            width: 100%;
            font-style: normal;
            font-weight: 500;
            line-height: 32px;
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: #313133;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            border-bottom-width: 1px;
          }
          .home-plans {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row01 {
            width: 100%;
            display: flex;
            align-items: center;
            border-color: #313133;
            padding-right: 180px;
            flex-direction: row;
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-text066 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            text-align: center;
            line-height: 32px;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            text-transform: uppercase;
          }
          .home-text067 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            text-align: center;
            line-height: 32px;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            text-transform: uppercase;
          }
          .home-text068 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            text-align: center;
            line-height: 32px;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            text-transform: uppercase;
          }
          .home-row02 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-headers1 {
            flex: 0.6;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-text069 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-style: normal;
            font-weight: 500;
            line-height: 32px;
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: #313133;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            border-bottom-width: 1px;
          }
          .home-plans1 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row03 {
            width: 100%;
            display: flex;
            align-items: center;
            border-color: #313133;
            padding-right: 180px;
            flex-direction: row;
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-row04 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-headers2 {
            flex: 0.6;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-text070 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-style: normal;
            font-weight: 500;
            line-height: 32px;
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: #313133;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            border-bottom-width: 1px;
          }
          .home-plans2 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row05 {
            width: 100%;
            display: flex;
            align-items: center;
            border-color: #313133;
            padding-right: 180px;
            flex-direction: row;
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-row06 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-headers3 {
            flex: 0.6;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-text071 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-style: normal;
            font-weight: 500;
            line-height: 32px;
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: #313133;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            border-bottom-width: 1px;
          }
          .home-plans3 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row07 {
            width: 100%;
            display: flex;
            align-items: center;
            border-color: #313133;
            padding-right: 180px;
            flex-direction: row;
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-text072 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            text-align: center;
            line-height: 32px;
          }
          .home-row08 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-headers4 {
            flex: 0.6;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-text073 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-style: normal;
            font-weight: 500;
            line-height: 32px;
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: #313133;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            border-bottom-width: 1px;
          }
          .home-plans4 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row09 {
            width: 100%;
            display: flex;
            align-items: center;
            border-color: #313133;
            padding-right: 180px;
            flex-direction: row;
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-text074 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            text-align: center;
            line-height: 32px;
          }
          .home-text075 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            text-align: center;
            line-height: 32px;
          }
          .home-row10 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-headers5 {
            flex: 0.6;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-text076 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-style: normal;
            font-weight: 500;
            line-height: 32px;
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: #313133;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            border-bottom-width: 1px;
          }
          .home-plans5 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row11 {
            width: 100%;
            display: flex;
            align-items: center;
            border-color: #313133;
            padding-right: 180px;
            flex-direction: row;
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-text077 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            text-align: center;
            line-height: 32px;
          }
          .home-row12 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-headers6 {
            flex: 0.6;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-text078 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-style: normal;
            font-weight: 500;
            line-height: 32px;
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: #313133;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            border-bottom-width: 1px;
          }
          .home-plans6 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row13 {
            width: 100%;
            display: flex;
            align-items: center;
            border-color: #313133;
            padding-right: 180px;
            flex-direction: row;
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-row14 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-headers7 {
            flex: 0.6;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-text079 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-style: normal;
            font-weight: 500;
            line-height: 32px;
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: #313133;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            border-bottom-width: 1px;
          }
          .home-plans7 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-row15 {
            width: 100%;
            display: flex;
            align-items: center;
            border-color: #313133;
            padding-right: 180px;
            flex-direction: row;
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-text080 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            text-align: center;
            line-height: 32px;
          }
          .home-data {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: none;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-header-container4 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header16 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-row16 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-heading11 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            font-style: normal;
            font-weight: 400;
          }
          .home-caption19 {
            color: rgb(124, 124, 128);
            width: 100%;
            font-size: 24px;
            max-width: 600px;
            line-height: 36px;
          }
          .home-content11 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image08 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image09 {
            width: 440px;
            object-fit: cover;
          }
          .home-accordion {
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-header17 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
          }
          .home-header18 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
          }
          .home-header19 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
          }
          .home-header20 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
          }
          .home-container6 {
            display: contents;
          }
          .home-customer {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: none;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .home-header21 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            flex-direction: column;
          }
          .home-heading12 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            max-width: 900px;
            font-style: normal;
            font-weight: 400;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
          }
          .home-text085 {
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 500;
          }
          .home-quotes {
            width: 100%;
            display: flex;
            position: relative;
            overflow-x: hidden;
            align-items: flex-start;
            margin-left: max(0px, (100% - 1240px)/2);
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.2);
            flex-direction: row;
            border-top-width: 1px;
            border-bottom-width: 1px;
          }
          .home-quote {
            gap: var(--dl-space-space-threeunits);
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-right-width: 1px;
          }
          .home-quote1 {
            color: rgb(124, 124, 128);
            width: 100%;
            font-size: 16px;
            max-width: 400px;
            line-height: 24px;
            letter-spacing: 1%;
          }
          .home-author2 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-name2 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 30px;
            letter-spacing: 1%;
          }
          .home-location {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 1%;
          }
          .home-quote2 {
            gap: var(--dl-space-space-threeunits);
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-right-width: 1px;
          }
          .home-quote3 {
            color: rgb(124, 124, 128);
            width: 100%;
            font-size: 16px;
            max-width: 400px;
            line-height: 24px;
            letter-spacing: 1%;
          }
          .home-author3 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-name3 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 30px;
            letter-spacing: 1%;
          }
          .home-location1 {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 1%;
          }
          .home-quote4 {
            gap: var(--dl-space-space-threeunits);
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-right-width: 1px;
          }
          .home-quote5 {
            color: rgb(124, 124, 128);
            width: 100%;
            font-size: 16px;
            max-width: 400px;
            line-height: 24px;
            letter-spacing: 1%;
          }
          .home-author4 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-name4 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 30px;
            letter-spacing: 1%;
          }
          .home-location2 {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 1%;
          }
          .home-quote6 {
            gap: var(--dl-space-space-threeunits);
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-right-width: 1px;
          }
          .home-quote7 {
            color: rgb(124, 124, 128);
            width: 100%;
            font-size: 16px;
            max-width: 400px;
            line-height: 24px;
            letter-spacing: 1%;
          }
          .home-author5 {
            gap: 4px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-name5 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 30px;
            letter-spacing: 1%;
          }
          .home-location3 {
            color: rgba(255, 255, 255, 0.3);
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 1%;
          }
          .home-controls1 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
          }
          .home-previous1 {
            display: flex;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
          }
          .home-icon31 {
            fill: #ffffff;
            width: 24px;
            height: 24px;
          }
          .home-next1 {
            display: flex;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
          }
          .home-icon33 {
            fill: #ffffff;
            width: 24px;
            height: 24px;
          }
          .home-faq {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: none;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 160px;
          }
          .home-header22 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-heading13 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            font-style: normal;
            font-weight: 400;
          }
          .home-text091 {
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 500;
          }
          .home-content20 {
            gap: 120px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-column {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-element04 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-header23 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
          }
          .home-content21 {
            color: rgb(124, 124, 128);
            width: 100%;
            display: flex;
            max-width: 560px;
            line-height: 24px;
          }
          .home-element05 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-header24 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
          }
          .home-content22 {
            color: rgb(124, 124, 128);
            width: 100%;
            display: flex;
            max-width: 560px;
            line-height: 24px;
          }
          .home-element06 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-header25 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
          }
          .home-content23 {
            color: rgb(124, 124, 128);
            width: 100%;
            display: flex;
            max-width: 560px;
            line-height: 24px;
          }
          .home-column1 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-element07 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-header26 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
          }
          .home-content24 {
            color: rgb(124, 124, 128);
            width: 100%;
            display: flex;
            max-width: 560px;
            line-height: 24px;
          }
          .home-element08 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-header27 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
          }
          .home-content25 {
            color: rgb(124, 124, 128);
            width: 100%;
            display: flex;
            max-width: 560px;
            line-height: 24px;
          }
          .home-element09 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-header28 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
          }
          .home-content26 {
            color: rgb(124, 124, 128);
            width: 100%;
            display: flex;
            max-width: 560px;
            line-height: 24px;
          }
          .home-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-content27 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            border-color: #313133;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            border-top-width: 1px;
          }
          .home-main {
            gap: 240px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-branding1 {
            gap: var(--dl-space-space-twounits);
            width: 400px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image10 {
            width: 120px;
            object-fit: cover;
          }
          .home-text093 {
            color: rgb(124, 124, 128);
            line-height: 24px;
          }
          .home-links {
            gap: 120px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-column2 {
            gap: var(--dl-space-space-threeunits);
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header29 {
            font-size: 24px;
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 500;
          }
          .home-list {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link:hover {
            opacity: 0.5;
          }
          .home-link01 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link01:hover {
            opacity: 0.5;
          }
          .home-link02 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link02:hover {
            opacity: 0.5;
          }
          .home-link03 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link03:hover {
            opacity: 0.5;
          }
          .home-text102:hover {
            opacity: 0.5;
          }
          .home-column3 {
            gap: var(--dl-space-space-threeunits);
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header30 {
            font-size: 24px;
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 500;
          }
          .home-list1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link04 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link04:hover {
            opacity: 0.5;
          }
          .home-link05 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link05:hover {
            opacity: 0.5;
          }
          .home-link06 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link06:hover {
            opacity: 0.5;
          }
          .home-link07 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link07:hover {
            opacity: 0.5;
          }
          .home-link08 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link08:hover {
            opacity: 0.5;
          }
          .home-link09 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link09:hover {
            opacity: 0.5;
          }
          .home-link10 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link10:hover {
            opacity: 0.5;
          }
          .home-column4 {
            gap: var(--dl-space-space-threeunits);
            color: white;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header31 {
            font-size: 24px;
            font-style: italic;
            font-family: Playfair Display;
            font-weight: 500;
          }
          .home-list2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link11 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link11:hover {
            opacity: 0.5;
          }
          .home-link12 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link12:hover {
            opacity: 0.5;
          }
          .home-link13 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link13:hover {
            opacity: 0.5;
          }
          .home-link14 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link14:hover {
            opacity: 0.5;
          }
          .home-link15 {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
            line-height: 32px;
            text-decoration: none;
          }
          .home-link15:hover {
            opacity: 0.5;
          }
          .home-bottom {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text104 {
            color: rgb(124, 124, 128);
            font-size: 14px;
            line-height: 21px;
          }
          .home-button5 {
            display: flex;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-fiveunits);
            border-radius: 0px;
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-image11 {
            width: 21px;
            object-fit: cover;
          }
          .home-container8 {
            display: contents;
          }
          @media (max-width: 991px) {
            .home-hero {
              padding-left: var(--dl-space-space-oneandhalfunits);
            }
            .home-hero-content {
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content {
              padding-top: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-stat {
              width: 100%;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-stat1 {
              width: 100%;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-stat2 {
              width: 100%;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-selector {
              gap: var(--dl-space-space-twounits);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-slider1 {
              gap: var(--dl-space-space-twounits);
            }
            .home-image01 {
              width: 100%;
              height: 120px;
            }
            .home-content01 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              justify-content: flex-start;
            }
            .home-header05 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
            }
            .home-heading02 {
              font-size: 24px;
            }
            .home-caption06 {
              color: rgb(204, 204, 255);
              max-width: 600px;
              line-height: 24px;
            }
            .home-caption07 {
              color: rgb(255, 255, 255);
            }
            .home-image02 {
              width: 100%;
              height: 120px;
            }
            .home-content02 {
              gap: var(--dl-space-space-unit);
              width: 226px;
              height: 169px;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              justify-content: flex-start;
            }
            .home-header06 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
            }
            .home-heading03 {
              color: rgb(255, 255, 255);
              font-size: 24px;
              font-style: normal;
              font-weight: 500;
            }
            .home-caption08 {
              color: rgb(204, 204, 255);
              max-width: 600px;
              line-height: 24px;
            }
            .home-more1 {
              align-self: flex-start;
            }
            .home-caption09 {
              color: rgb(255, 255, 255);
            }
            .home-slide2 {
              position: relative;
            }
            .home-image03 {
              width: 100%;
              height: 120px;
            }
            .home-content03 {
              gap: var(--dl-space-space-unit);
              width: 194px;
              height: 169px;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              justify-content: flex-start;
            }
            .home-header07 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
            }
            .home-heading04 {
              color: rgb(255, 255, 255);
              font-size: 24px;
            }
            .home-caption10 {
              color: rgb(204, 204, 255);
              max-width: 600px;
              line-height: 24px;
            }
            .home-caption11 {
              color: rgb(255, 255, 255);
            }
            .home-image04 {
              width: 100%;
              height: 120px;
            }
            .home-content04 {
              gap: var(--dl-space-space-unit);
              width: 213px;
              height: 172px;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              justify-content: flex-start;
            }
            .home-header08 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
            }
            .home-heading05 {
              color: rgb(255, 255, 255);
              font-size: 24px;
            }
            .home-caption12 {
              color: rgb(204, 204, 255);
              max-width: 600px;
              line-height: 24px;
            }
            .home-caption13 {
              color: rgb(255, 255, 255);
              font-style: normal;
              font-weight: 500;
            }
            .home-content05 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-objectives-list {
              padding-right: 0px;
            }
            .home-objective1 {
              flex: 1;
            }
            .home-objective2 {
              flex: 1;
            }
            .home-growth {
              flex-direction: column;
            }
            .home-testimonial {
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-text046 {
              max-width: 560px;
            }
            .home-images {
              padding-top: 0px;
            }
            .home-square {
              top: -20px;
              right: -20px;
            }
            .home-image06 {
              margin-top: 0px;
            }
            .home-experience {
              align-items: flex-start;
              flex-direction: column-reverse;
            }
            .home-content10 {
              gap: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-heading09 {
              font-size: 50px;
            }
            .home-headers {
              flex: 0;
            }
            .home-text065 {
              color: rgba(255, 255, 255, 0);
              width: 0px;
              font-style: normal;
              font-weight: 500;
              line-height: 32px;
            }
            .home-row01 {
              padding-right: 0px;
              justify-content: center;
            }
            .home-row02 {
              flex-direction: column;
            }
            .home-headers1 {
              flex: 0 0 auto;
              width: 100%;
            }
            .home-text069 {
              padding-top: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-unit);
              border-bottom-width: 0px;
            }
            .home-plans1 {
              width: 100%;
            }
            .home-row03 {
              padding-right: 0px;
            }
            .home-row04 {
              flex-direction: column;
            }
            .home-headers2 {
              flex: 0 0 auto;
              width: 100%;
            }
            .home-text070 {
              width: 100%;
              padding-top: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-unit);
              border-bottom-width: 0px;
            }
            .home-plans2 {
              width: 100%;
            }
            .home-row05 {
              padding-right: 0px;
            }
            .home-row06 {
              flex-direction: column;
            }
            .home-headers3 {
              flex: 0 0 auto;
              width: 100%;
            }
            .home-text071 {
              padding-top: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-unit);
              border-bottom-width: 0px;
            }
            .home-plans3 {
              width: 100%;
            }
            .home-row07 {
              padding-right: 0px;
            }
            .home-row08 {
              flex-direction: column;
            }
            .home-headers4 {
              flex: 0 0 auto;
              width: 100%;
            }
            .home-text073 {
              padding-top: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-unit);
              border-bottom-width: 0px;
            }
            .home-plans4 {
              width: 100%;
            }
            .home-row09 {
              padding-right: 0px;
            }
            .home-row10 {
              flex-direction: column;
            }
            .home-headers5 {
              flex: 0 0 auto;
              width: 100%;
            }
            .home-text076 {
              padding-top: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-unit);
              border-bottom-width: 0px;
            }
            .home-plans5 {
              width: 100%;
            }
            .home-row11 {
              padding-right: 0px;
            }
            .home-row12 {
              flex-direction: column;
            }
            .home-headers6 {
              flex: 0 0 auto;
              width: 100%;
            }
            .home-text078 {
              padding-top: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-unit);
              border-bottom-width: 0px;
            }
            .home-plans6 {
              width: 100%;
            }
            .home-row13 {
              padding-right: 0px;
            }
            .home-row14 {
              flex-direction: column;
            }
            .home-headers7 {
              flex: 0 0 auto;
              width: 100%;
            }
            .home-text079 {
              padding-top: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-unit);
              border-bottom-width: 0px;
            }
            .home-plans7 {
              width: 100%;
            }
            .home-row15 {
              padding-right: 0px;
            }
            .home-heading11 {
              color: rgb(255, 255, 255);
            }
            .home-text082 {
              font-style: italic;
              font-family: Playfair Display;
              font-weight: 500;
            }
            .home-content11 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-header17 {
              font-size: 24px;
            }
            .home-header18 {
              font-size: 24px;
            }
            .home-header19 {
              font-size: 24px;
            }
            .home-header20 {
              font-size: 24px;
            }
            .home-customer {
              max-width: 1400px;
              padding-left: var(--dl-space-space-fiveunits);
              padding-right: var(--dl-space-space-fiveunits);
            }
            .home-header21 {
              max-width: 100%;
            }
            .home-heading12 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-quotes {
              padding-top: 0px;
              flex-direction: column;
              border-bottom-width: 0px;
            }
            .home-quote {
              gap: var(--dl-space-space-oneandhalfunits);
              width: 100%;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-quote1 {
              font-size: 16px;
              max-width: 100%;
            }
            .home-quote2 {
              gap: var(--dl-space-space-oneandhalfunits);
              width: 100%;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-quote3 {
              font-size: 16px;
              max-width: 100%;
            }
            .home-quote4 {
              gap: var(--dl-space-space-oneandhalfunits);
              width: 100%;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-quote5 {
              font-size: 16px;
              max-width: 100%;
            }
            .home-quote6 {
              gap: var(--dl-space-space-oneandhalfunits);
              width: 100%;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-quote7 {
              font-size: 16px;
              max-width: 100%;
            }
            .home-controls1 {
              max-width: 100%Width;
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-previous1 {
              display: none;
            }
            .home-next1 {
              display: none;
            }
            .home-faq {
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home-content20 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-column {
              max-width: 100%;
            }
            .home-header23 {
              font-size: 24px;
            }
            .home-content21 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header24 {
              font-size: 24px;
            }
            .home-content22 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header25 {
              font-size: 24px;
            }
            .home-content23 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-column1 {
              max-width: 100%;
            }
            .home-header26 {
              font-size: 24px;
            }
            .home-content24 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header27 {
              font-size: 24px;
            }
            .home-content25 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header28 {
              font-size: 24px;
            }
            .home-content26 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-content27 {
              border-top-width: 0px;
            }
            .home-main {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-branding1 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .home-burger-menu {
              display: flex;
            }
            .home-heading {
              font-size: 60px;
            }
            .home-note {
              align-items: flex-start;
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-caption01 {
              font-size: 18px;
              max-width: 90%;
              line-height: 23px;
              margin-right: 0px;
            }
            .home-text013 {
              font-size: 18px;
              max-width: 90%;
              line-height: 23px;
              margin-right: 0px;
            }
            .home-statistics {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-stat {
              gap: var(--dl-space-space-unit);
            }
            .home-header01 {
              font-size: 36px;
              line-height: 42px;
            }
            .home-caption02 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-stat1 {
              gap: var(--dl-space-space-unit);
            }
            .home-header02 {
              font-size: 36px;
              line-height: 42px;
            }
            .home-caption03 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-stat2 {
              gap: var(--dl-space-space-unit);
            }
            .home-header03 {
              font-size: 36px;
              line-height: 42px;
            }
            .home-caption04 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-slider {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-heading01 {
              font-size: 40px;
            }
            .home-caption05 {
              color: rgb(124, 124, 128);
              line-height: 24px;
            }
            .home-slide-titles {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-slides {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-slider1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-slider-track {
              align-items: stretch;
            }
            .home-heading02 {
              color: rgb(255, 255, 255);
              font-size: 18px;
              font-style: normal;
              font-weight: 500;
            }
            .home-caption06 {
              color: rgb(204, 204, 255);
              line-height: 18px;
            }
            .home-caption07 {
              font-size: 14px;
            }
            .home-icon09 {
              width: 11px;
              height: 11px;
            }
            .home-heading03 {
              font-size: 18px;
            }
            .home-caption08 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-caption09 {
              font-size: 14px;
            }
            .home-icon11 {
              width: 11px;
              height: 11px;
            }
            .home-heading04 {
              color: rgb(255, 255, 255);
              font-size: 18px;
              font-style: normal;
              font-weight: 500;
            }
            .home-caption10 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-caption11 {
              font-size: 14px;
            }
            .home-icon13 {
              width: 11px;
              height: 11px;
            }
            .home-heading05 {
              font-size: 18px;
            }
            .home-caption12 {
              color: rgb(204, 204, 255);
              line-height: 18px;
            }
            .home-caption13 {
              font-size: 14px;
            }
            .home-icon15 {
              width: 11px;
              height: 11px;
            }
            .home-previous {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-icon17 {
              width: 14px;
              height: 14px;
            }
            .home-next {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-icon19 {
              width: 14px;
              height: 14px;
            }
            .home-get-started {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-heading06 {
              color: rgb(255, 255, 255);
            }
            .home-caption14 {
              color: rgb(124, 124, 128);
              line-height: 24px;
            }
            .home-image05 {
              width: 300px;
            }
            .home-objectives {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content05 {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-objectives-list {
              width: 100%;
              flex-direction: column;
            }
            .home-growth {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-content06 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-header10 {
              gap: var(--dl-space-space-unit);
            }
            .home-heading07 {
              font-size: 40px;
            }
            .home-caption15 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-caption16 {
              font-size: 16px;
              line-height: 24px;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-text045 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-icon21 {
              width: 40px;
              height: 40px;
            }
            .home-name {
              font-size: 12px;
              line-height: 18px;
            }
            .home-from {
              width: auto;
              height: 100%;
            }
            .home-image06 {
              width: 100%;
            }
            .home-experience {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-square1 {
              left: -20px;
              width: 20%;
              bottom: -20px;
            }
            .home-image07 {
              width: 100%;
            }
            .home-content08 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-header12 {
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-header-container2 {
              gap: var(--dl-space-space-unit);
            }
            .home-heading08 {
              font-size: 40px;
            }
            .home-caption17 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-text053 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-icon30 {
              width: 40px;
              height: 40px;
            }
            .home-name1 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-from1 {
              width: auto;
              height: 100%;
            }
            .home-create {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-content10 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading09 {
              font-size: 36px;
            }
            .home-comparision {
              gap: var(--dl-space-space-threeunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-header-container3 {
              gap: var(--dl-space-space-unit);
            }
            .home-header15 {
              gap: var(--dl-space-space-unit);
              align-items: center;
            }
            .home-heading10 {
              font-size: 40px;
            }
            .home-caption18 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-text066 {
              font-size: 12px;
              line-height: 14px;
            }
            .home-text067 {
              font-size: 12px;
              line-height: 14px;
            }
            .home-text068 {
              font-size: 12px;
              line-height: 14px;
            }
            .home-text069 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-text070 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-text071 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-text072 {
              line-height: 21px;
            }
            .home-text073 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-text074 {
              line-height: 21px;
            }
            .home-text075 {
              line-height: 21px;
            }
            .home-text076 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-text077 {
              line-height: 21px;
            }
            .home-text078 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-text079 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-text080 {
              line-height: 21px;
            }
            .home-data {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-heading11 {
              font-size: 36px;
            }
            .home-caption19 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-image08 {
              width: 100%;
            }
            .home-image09 {
              width: 100%;
            }
            .home-customer {
              gap: var(--dl-space-space-threeunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-quote {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-quote1 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-author2 {
              width: 100%;
            }
            .home-name2 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-location {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-quote2 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-quote3 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-author3 {
              width: 100%;
            }
            .home-name3 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-location1 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-quote4 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-quote5 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-author4 {
              width: 100%;
            }
            .home-name4 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-location2 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-quote6 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-unit);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-quote7 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-author5 {
              width: 100%;
            }
            .home-name5 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-location3 {
              width: 90%;
              font-size: 14px;
              line-height: 21px;
            }
            .home-icon31 {
              width: 14px;
              height: 14px;
            }
            .home-icon33 {
              width: 14px;
              height: 14px;
            }
            .home-faq {
              gap: var(--dl-space-space-threeunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-header22 {
              gap: var(--dl-space-space-unit);
              align-items: center;
            }
            .home-heading13 {
              font-size: 36px;
            }
            .home-column {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-element04 {
              gap: var(--dl-space-space-halfunit);
              padding-top: 0px;
              padding-right: 00px;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              border-right-width: 0px;
            }
            .home-header23 {
              font-size: 16px;
              line-height: 20px;
            }
            .home-element05 {
              gap: var(--dl-space-space-halfunit);
              padding-top: 0px;
              padding-right: 00px;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              border-right-width: 0px;
            }
            .home-header24 {
              font-size: 16px;
              line-height: 20px;
            }
            .home-element06 {
              gap: var(--dl-space-space-halfunit);
              padding-top: 0px;
              padding-right: 00px;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              border-right-width: 0px;
            }
            .home-header25 {
              font-size: 16px;
              line-height: 20px;
            }
            .home-column1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-element07 {
              gap: var(--dl-space-space-halfunit);
              padding-top: 0px;
              padding-right: 00px;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              border-right-width: 0px;
            }
            .home-header26 {
              font-size: 16px;
              line-height: 20px;
            }
            .home-element08 {
              gap: var(--dl-space-space-halfunit);
              padding-top: 0px;
              padding-right: 00px;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              border-right-width: 0px;
            }
            .home-header27 {
              font-size: 16px;
              line-height: 20px;
            }
            .home-element09 {
              gap: var(--dl-space-space-halfunit);
              padding-top: 0px;
              padding-right: 00px;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              border-right-width: 0px;
            }
            .home-header28 {
              font-size: 16px;
              line-height: 20px;
            }
            .home-footer {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-links {
              gap: var(--dl-space-space-fiveunits);
              flex-direction: row;
            }
          }
          @media (max-width: 479px) {
            .home-branding {
              padding-top: var(--dl-space-space-unit);
            }
            .home-hamburger {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-icon {
              width: 30px;
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-hero-content {
              gap: var(--dl-space-space-threeunits);
            }
            .home-heading {
              font-size: 36px;
            }
            .home-caption {
              color: rgb(255, 255, 255);
              line-height: 36px;
            }
            .home-button {
              text-align: center;
            }
            .home-heading01 {
              font-size: 36px;
              line-height: 42px;
            }
            .home-slide-titles {
              display: none;
            }
            .home-image05 {
              height: 400px;
            }
            .home-text035 {
              font-size: 12px;
              line-height: 18px;
            }
            .home-text036 {
              font-size: 18px;
            }
            .home-text038 {
              font-size: 18px;
            }
            .home-text040 {
              font-size: 18px;
            }
            .home-heading07 {
              font-size: 36px;
            }
            .home-heading08 {
              color: rgb(255, 255, 255);
            }
            .home-text048 {
              font-style: italic;
              font-family: Playfair Display;
              font-weight: 500;
            }
            .home-heading09 {
              color: rgb(255, 255, 255);
              font-style: normal;
              text-align: center;
              font-weight: 500;
            }
            .home-button3 {
              text-align: center;
            }
            .home-header15 {
              gap: 0px;
              flex-direction: column;
            }
            .home-heading10 {
              color: rgb(255, 255, 255);
              text-align: center;
            }
            .home-text063 {
              font-style: italic;
              font-family: Playfair Display;
              font-weight: 500;
            }
            .home-button4 {
              text-align: center;
            }
            .home-header22 {
              gap: 0px;
              align-items: flex-start;
              flex-direction: column;
            }
            .home-links {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-bottom {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
              justify-content: center;
            }
            .home-button5 {
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
