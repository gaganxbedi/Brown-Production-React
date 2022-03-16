import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './hero.module.css'

const Hero = (props) => {
  return (
    <div
      className={` ${styles['Hero']} ${projectStyles['section-container']} `}
    >
      <div
        className={` ${styles['max-width']} ${projectStyles['max-content-container']} `}
      >
        <div className={styles['heading-container']}>
          <h1 className={styles['text']}>
            <span>We Create Posters</span>
          </h1>
          <span className={styles['text2']}>
            Brown Production
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="tel:+91"
            className={` ${styles['primary']} ${projectStyles['button-primary']} ${projectStyles['button-lg']} ${projectStyles['button']} `}
          >
            {props.primary}
          </a>
        </div>
      </div>
    </div>
  )
}

Hero.defaultProps = {
  primary: 'Get in touch with us',
}

Hero.propTypes = {
  primary: PropTypes.string,
}

export default Hero
