import React from 'react'

import PropTypes from 'prop-types'

import PortofolioCard from './portofolio-card'
import projectStyles from '../style.module.css'
import styles from './portofolio.module.css'

const Portofolio = (props) => {
  return (
    <div className={projectStyles['section-container']}>
      <div
        className={` ${styles['max-width']} ${projectStyles['max-content-container']} `}
      >
        <div className={styles['text-container']}>
          <span className={styles['text']}>{props.text}</span>
          <h2 className={styles['text1']}>
            <span>Explore our portfolio</span>
          </h2>
          <span className={styles['text3']}>Latest Projects</span>
          <div className={styles['Features']}>
            <div className={styles['container']}></div>
          </div>
        </div>
        <span className={styles['text4']}>Featured Projects</span>
        <div className={styles['tab-selector-cards-container']}>
          <PortofolioCard
            image_src="/playground_assets/241392277_932494860671826_8707046053277125456_n-400h.jpg"
            rootClassName="rootClassName"
          ></PortofolioCard>
          <PortofolioCard
            image_src="/playground_assets/271387125_279940797453207_5474617513849369017_n-400h.jpg"
            project_title="A brand-new advertising idea"
            rootClassName="rootClassName5"
          ></PortofolioCard>
          <PortofolioCard
            image_src="/playground_assets/album%20raxstar-400h.jpg"
            project_title="Coca-Cola Summer Concept Campaign - 2021"
            rootClassName="rootClassName4"
          ></PortofolioCard>
          <PortofolioCard
            image_src="/playground_assets/209531474_1052331891964101_7570417822778603317_n-400h.jpg"
            project_title="Ad Campaign - I love you as much as I love Nutella"
            rootClassName="rootClassName3"
          ></PortofolioCard>
          <PortofolioCard
            image_src="/playground_assets/267858324_1938794649641508_6612350952460756172_n-400h.jpg"
            project_title="Coca-Colla Next Door Campaign - conceptual"
            rootClassName="rootClassName2"
          ></PortofolioCard>
          <PortofolioCard
            image_src="/playground_assets/253474484_4867839889931991_2044792349653454817_n-400h.jpg"
            project_title="Starbucks secret is a smile when you get your latte"
            rootClassName="rootClassName1"
          ></PortofolioCard>
          <PortofolioCard
            image_src="/playground_assets/silver%20box%20%20jigar-400h.jpg"
            project_title="Starbucks secret is a smile when you get your latte"
            rootClassName="rootClassName7"
          ></PortofolioCard>
          <PortofolioCard
            image_src="/playground_assets/272031265_325338336144258_7713717647369158244_n-400h.jpg"
            project_title="Starbucks secret is a smile when you get your latte"
            rootClassName="rootClassName6"
          ></PortofolioCard>
          <PortofolioCard
            image_src="/playground_assets/275493049_249259477420759_6344084738187419940_n-400h.jpg"
            project_title="Starbucks secret is a smile when you get your latte"
            rootClassName="rootClassName8"
          ></PortofolioCard>
        </div>
      </div>
    </div>
  )
}

Portofolio.defaultProps = {
  text1: 'Latest Projects',
  text: 'our work',
}

Portofolio.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default Portofolio
