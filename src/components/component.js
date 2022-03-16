import React from 'react'

import PropTypes from 'prop-types'

import styles from './component.module.css'

const AppComponent = (props) => {
  return (
    <div className={styles['container']}>
      <img
        alt={props.image_alt21}
        src={props.image_src21}
        className={styles['image']}
      />
    </div>
  )
}

AppComponent.defaultProps = {
  image_src21: '/playground_assets/logo%20wgite-200h.png',
  image_alt21: 'logo',
}

AppComponent.propTypes = {
  image_src21: PropTypes.string,
  image_alt21: PropTypes.string,
}

export default AppComponent
