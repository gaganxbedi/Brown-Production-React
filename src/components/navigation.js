import React from 'react'

import PropTypes from 'prop-types'

import AppComponent from './component'
import NavigationLinks from './navigation-links'
import projectStyles from '../style.module.css'
import styles from './navigation.module.css'

const Navigation = (props) => {
  return (
    <header
      data-role="Header"
      className={` ${styles['Header']} ${styles[props.rootClassName]} `}
    >
      <div className={styles['max-width']}>
        <AppComponent></AppComponent>
        <div className={styles['Nav']}>
          <NavigationLinks rootClassName="rootClassName17"></NavigationLinks>
          <button
            className={` ${styles['Register']} ${projectStyles['button-secondary']} ${projectStyles['button']} ${projectStyles['button-md']} `}
          >
            {props.button}
          </button>
        </div>
        <div data-type="BurgerMenu" className={styles['BurgerMenu']}>
          <svg viewBox="0 0 1024 1024" className={styles['Icon']}>
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div
          data-type="MobileMenu"
          className={` ${projectStyles['mobile-menu']} ${styles['MobileMenu']} `}
        >
          <div className={styles['Nav1']}>
            <div className={styles['Container']}>
              <img src={props.image_src} className={styles['image']} />
              <div
                data-type="CloseMobileMenu"
                className={styles['CloseMobileMenu']}
              >
                <svg viewBox="0 0 1024 1024" className={styles['icon2']}>
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className={styles['Nav2']}>
              <span
                className={` ${styles['text']} ${projectStyles['navigation-Link']} `}
              >
                {props.link1}
              </span>
              <span
                className={` ${styles['text1']} ${projectStyles['navigation-Link']} `}
              >
                {props.link2}
              </span>
              <span
                className={` ${styles['text2']} ${projectStyles['navigation-Link']} `}
              >
                {props.link3}
              </span>
              <span
                className={` ${styles['text3']} ${projectStyles['navigation-Link']} `}
              >
                {props.link4}
              </span>
            </nav>
            <button
              className={` ${projectStyles['button-secondary']} ${projectStyles['button']} ${projectStyles['button-md']} `}
            >
              {props.button2}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

Navigation.defaultProps = {
  link1: 'Home',
  image_src21: '6a998cec-c6b1-4784-bee6-21387913ae71',
  link3: 'Portofolio',
  button: 'Get in touch',
  image_src: '6a998cec-c6b1-4784-bee6-21387913ae71',
  link2: 'About',
  button2: 'Get in touch',
  rootClassName: '',
  image_alt21: 'logo',
  link4: 'Blog',
}

Navigation.propTypes = {
  link1: PropTypes.string,
  image_src21: PropTypes.string,
  link3: PropTypes.string,
  button: PropTypes.string,
  image_src: PropTypes.string,
  link2: PropTypes.string,
  button2: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt21: PropTypes.string,
  link4: PropTypes.string,
}

export default Navigation
