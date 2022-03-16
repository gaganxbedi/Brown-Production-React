import React from 'react'

import PropTypes from 'prop-types'

import styles from './feature-card1.module.css'

const FeatureCard1 = (props) => {
  return (
    <div
      className={` ${styles['FeatureCard']} ${styles[props.rootClassName]} `}
    >
      <h2 className={styles['text']}>{props.title}</h2>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
    </div>
  )
}

FeatureCard1.defaultProps = {
  title: 'Lorem ipsum',
  rootClassName: '',
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=1000',
}

FeatureCard1.propTypes = {
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default FeatureCard1
