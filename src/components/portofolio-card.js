import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './portofolio-card.module.css'

const PortofolioCard = (props) => {
  return (
    <div
      className={` ${styles['SpeakerCard']} ${styles[props.rootClassName]} `}
    >
      <div className={styles['image-container']}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className={styles['image']}
        />
        <div className={styles['see-project-container']}>
          <button
            className={` ${projectStyles['button-secondary-white']} ${projectStyles['button']} ${projectStyles['button-md']} `}
          >
            See project
          </button>
        </div>
      </div>
    </div>
  )
}

PortofolioCard.defaultProps = {
  rootClassName: '',
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&ixlib=rb-1.2.1&w=300',
}

PortofolioCard.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default PortofolioCard
