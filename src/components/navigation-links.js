import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './navigation-links.module.css'

const NavigationLinks = (props) => {
  return (
    <nav className={` ${styles['Nav']} ${styles[props.rootClassName]} `}>
      <Link
        to="/"
        className={` ${styles['navlink']} ${projectStyles['navigation-Link']} `}
      >
        {props.link1}
      </Link>
      <span
        className={` ${styles['text']} ${projectStyles['navigation-Link']} `}
      >
        {props.link2}
      </span>
      <span
        className={` ${styles['text1']} ${projectStyles['navigation-Link']} `}
      >
        {props.link3}
      </span>
      <span
        className={` ${styles['text2']} ${projectStyles['navigation-Link']} `}
      >
        {props.link4}
      </span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  link3: 'Portfolio',
  rootClassName: '',
  link2: 'About',
  link4: 'Services',
  link1: 'Home',
}

NavigationLinks.propTypes = {
  link3: PropTypes.string,
  rootClassName: PropTypes.string,
  link2: PropTypes.string,
  link4: PropTypes.string,
  link1: PropTypes.string,
}

export default NavigationLinks
