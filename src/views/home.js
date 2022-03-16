import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Hero from '../components/hero'
import ServicesCard from '../components/services-card'
import Portofolio from '../components/portofolio'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Brown Production</title>
        <meta property="og:title" content="Brown Production" />
      </Helmet>
      <Navigation
        image_src="/playground_assets/logo%20wgite-200h.png"
        rootClassName="rootClassName"
      ></Navigation>
      <main className={styles['Main']}>
        <Hero></Hero>
        <div
          className={` ${styles['Services']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['heading-container']}>
              <div className={styles['text-container']}>
                <span className={styles['text']}>our services</span>
                <h2 className={styles['text01']}>
                  <span>
                    We provide a wide range of
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>creative services</span>
                </h2>
              </div>
            </div>
            <div className={styles['cards-container']}>
              <ServicesCard
                text="Poster Design"
                text1="We design professional looking Song and Movies Posters."
                image_src="/playground_assets/vector-2.svg"
              ></ServicesCard>
              <ServicesCard
                text="Logo &amp; Branding"
                text1="Create your  unique Logo and branding, crafted for your business needs."
                image_src="/playground_assets/group%201.svg"
              ></ServicesCard>
              <ServicesCard
                text="Social Media"
                text1="We Create Professional Feed Design for your social needs."
                image_src="/playground_assets/vector-1.svg"
              ></ServicesCard>
            </div>
            <div className={styles['cards-container1']}>
              <ServicesCard
                text="Marketing Services"
                text1="we run optimised ads and marketing services for our clients."
                image_src="/playground_assets/vector.svg"
              ></ServicesCard>
              <ServicesCard
                text="VFX &amp; Video Editing "
                text1="We create visuals as well as provide video editing solutions to our clients."
                image_src="/playground_assets/group%202.svg"
              ></ServicesCard>
            </div>
          </div>
        </div>
        <Portofolio></Portofolio>
        <div
          className={` ${styles['Banner']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width1']} ${projectStyles['max-content-container']} `}
          >
            <span className={styles['text05']}>what are you waiting?</span>
            <h2
              className={` ${styles['text06']} ${projectStyles['heading2']} `}
            >
              <span>Let’s collaborate!</span>
            </h2>
            <span className={styles['text08']}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation.
              </span>
            </span>
            <button
              className={` ${styles['primary']} ${projectStyles['button-lg']} ${projectStyles['button-secondary-white']} ${projectStyles['button']} `}
            >
              Contact us
            </button>
          </div>
        </div>
      </main>
      <div className={projectStyles['section-container']}>
        <div className={projectStyles['max-content-container']}>
          <div className={styles['top-part']}>
            <div className={styles['links-container']}>
              <div className={styles['product-container']}>
                <span className={styles['text12']}>Product</span>
                <span className={styles['text13']}>About</span>
                <span className={styles['text14']}>Portofolio</span>
                <span>Blog</span>
              </div>
              <div className={styles['contact-container']}>
                <span className={styles['text16']}>Contact Us</span>
                <a href="tel:+919855763038" className={styles['link']}>
                  +919855763038
                </a>
                <a href="tel:+918288947139" className={styles['link1']}>
                  +918288947139
                </a>
              </div>
            </div>
            <div className={styles['subscribe-container']}>
              <span className={styles['text17']}>Mail Us</span>
              <a
                href="mailto:mail2vipinbrown@gmail.com?subject=Hello"
                className={styles['link2']}
              >
                mail2vipinbrown@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className={styles['Separator']}></div>
        <footer
          className={` ${styles['max-width3']} ${projectStyles['max-content-container']} `}
        >
          <Link to="/">
            <img
              alt="image"
              src="/playground_assets/frame%201-200h.png"
              className={styles['image']}
            />
          </Link>
          <a
            href="https://instagram.com/vipin.brown"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link3']}
          >
            <span>
              {' '}
              © 2022 All rights Reserved
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className={styles['text19']}>BroWnProDuction</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </a>
        </footer>
      </div>
    </div>
  )
}

export default Home
