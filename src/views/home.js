import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Hero from '../components/hero'
import ServicesCard from '../components/services-card'
import PortofolioCard from '../components/portofolio-card'
import BlogCard from '../components/blog-card'
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
              ></ServicesCard>
              <ServicesCard
                text="Logo &amp; Branding"
                text1="Create your  unique Logo and branding, crafted for your business needs."
                image_src="/playground_assets/file-document-200w.png"
              ></ServicesCard>
              <ServicesCard
                text="Social Media"
                text1="We Create Professional Feed Design for your social needs."
                image_src="/playground_assets/dice-5-200h.png"
              ></ServicesCard>
              <ServicesCard
                text="Product Design"
                image_src="/playground_assets/dice-5-200h.png"
              ></ServicesCard>
              <ServicesCard
                text="Product Design"
                image_src="/playground_assets/dice-5-200h.png"
              ></ServicesCard>
            </div>
          </div>
        </div>
        <div className={projectStyles['section-container']}>
          <div
            className={` ${styles['max-width1']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['text-container1']}>
              <span className={styles['text05']}>our work</span>
              <h2
                className={` ${styles['text06']} ${projectStyles['heading2']} `}
              >
                <span>Explore our portfolio</span>
              </h2>
              <span className={styles['text08']}>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation.
                </span>
              </span>
              <button
                className={` ${projectStyles['button-secondary']} ${projectStyles['button-lg']} ${projectStyles['button']} `}
              >
                See all projects
              </button>
            </div>
            <div className={styles['tab-selector-header']}>
              <span
                className={` ${styles['text12']} ${projectStyles['tab-selector-btn']} `}
              >
                Advertising
              </span>
              <span
                className={` ${styles['text13']} ${projectStyles['tab-selector-btn']} `}
              >
                Social Media
              </span>
              <span
                className={` ${styles['text14']} ${projectStyles['tab-selector-btn']} `}
              >
                Branding
              </span>
              <span
                className={` ${styles['text15']} ${projectStyles['tab-selector-btn']} `}
              >
                UI / UX
              </span>
              <span
                className={` ${styles['text16']} ${projectStyles['tab-selector-btn']} `}
              >
                Packaging
              </span>
              <span className={projectStyles['tab-selector-btn']}>
                Product Design
              </span>
            </div>
            <div className={styles['tab-selector-cards-container']}>
              <PortofolioCard
                image_src="/playground_assets/unsplash_qj15unotnh0-400h.png"
                rootClassName="rootClassName"
              ></PortofolioCard>
              <PortofolioCard
                image_src="/playground_assets/unsplash_wwqrpsnbpq4-400h.png"
                project_title="A brand-new advertising idea"
                rootClassName="rootClassName5"
              ></PortofolioCard>
              <PortofolioCard
                image_src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxjb2NhJTIwY29sYXxlbnwwfHx8fDE2NDY5MjYyNTM&amp;ixlib=rb-1.2.1&amp;h=400"
                project_title="Coca-Cola Summer Concept Campaign - 2021"
                rootClassName="rootClassName4"
              ></PortofolioCard>
              <PortofolioCard
                image_src="https://images.unsplash.com/photo-1519420573924-65fcd45245f8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fG51dGVsbGF8ZW58MHx8fHwxNjQ2OTI2MTky&amp;ixlib=rb-1.2.1&amp;h=400"
                project_title="Ad Campaign - I love you as much as I love Nutella"
                rootClassName="rootClassName3"
              ></PortofolioCard>
              <PortofolioCard
                image_src="https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fGNvY2ElMjBjb2xhfGVufDB8fHx8MTY0NjkyNjI1Mw&amp;ixlib=rb-1.2.1&amp;h=400"
                project_title="Coca-Colla Next Door Campaign - conceptual"
                rootClassName="rootClassName2"
              ></PortofolioCard>
              <PortofolioCard
                image_src="https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHN0YXJidWNrc3xlbnwwfHx8fDE2NDY5MjYyMzc&amp;ixlib=rb-1.2.1&amp;h=400"
                project_title="Starbucks secret is a smile when you get your latte"
                rootClassName="rootClassName1"
              ></PortofolioCard>
            </div>
          </div>
        </div>
        <div
          className={` ${styles['About']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width2']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['text-container2']}>
              <span className={styles['text18']}>about us</span>
              <h2
                className={` ${styles['text19']} ${projectStyles['heading2']} `}
              >
                <span>
                  We build brands with
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>purpose and impact</span>
              </h2>
              <span className={styles['text23']}>
                We are a full-service digital creative agency with brick and
                mortar offices and plenty of in-house talent.
              </span>
              <div className={styles['checklist']}>
                <div className={styles['check-item']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className={styles['text24']}>
                    Quality services and support all time
                  </span>
                </div>
                <div className={styles['check-item1']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon02']}>
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className={styles['text25']}>
                    Long-term strategy development
                  </span>
                </div>
                <div className={styles['check-item2']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon04']}>
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className={styles['text26']}>
                    FREE Brand Audit for startups
                  </span>
                </div>
                <div className={styles['check-item3']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon06']}>
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className={styles['text27']}>
                    Over 10 years in the business
                  </span>
                </div>
                <div className={styles['check-item4']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon08']}>
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className={styles['text28']}>
                    Future-Proofing Projects
                  </span>
                </div>
                <div className={styles['check-item5']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon10']}>
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className={styles['text29']}>
                    Support in any implementation
                  </span>
                </div>
              </div>
            </div>
            <div className={styles['image-container']}>
              <img
                alt="image"
                src="/playground_assets/rectangle%20109-1000w.png"
                className={styles['image']}
              />
            </div>
          </div>
        </div>
        <div
          className={` ${styles['Process']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width3']} ${projectStyles['max-content-container']} `}
          >
            <span className={styles['text30']}>Our process</span>
            <h2
              className={` ${styles['text31']} ${projectStyles['heading2']} `}
            >
              <span>
                We use a simple three step process.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>Take a look.</span>
            </h2>
            <div className={styles['step']}>
              <span className={styles['text35']}>01</span>
              <div className={styles['container1']}>
                <span className={styles['text36']}>Finding the best idea</span>
                <span className={styles['text37']}>
                  There are countless businesses already in existence, so it’s
                  very likely that you won’t be the first person to think of an
                  idea or product. There are countless businesses already in
                  existence, so it’s very likely that you won’t be the first
                  person to think of an idea or product.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div className={styles['step1']}>
              <span className={styles['text38']}>02</span>
              <div className={styles['container2']}>
                <span className={styles['text39']}>
                  Intense Brain storming
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className={styles['text40']}>
                  Brainstorming is a process of toiling and generating new ideas
                  alone or by holding intensive group discussions between team
                  members in a team.
                </span>
              </div>
            </div>
            <div className={styles['step2']}>
              <span className={styles['text41']}>03</span>
              <div className={styles['container3']}>
                <span className={styles['text42']}>
                  Strong design execution
                </span>
                <span className={styles['text43']}>
                  As a creative, using your professional judgement, you should
                  begin filtering your various ideas and designs, retaining the
                  strongest relevant material.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={projectStyles['section-container']}>
          <div
            className={` ${styles['max-width4']} ${projectStyles['max-content-container']} `}
          >
            <span className={styles['text44']}>from blog</span>
            <h2
              className={` ${styles['text45']} ${projectStyles['heading2']} `}
            >
              <span>Our latest articles and resources</span>
            </h2>
            <span className={styles['text47']}>
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
              className={` ${styles['primary1']} ${projectStyles['button-secondary']} ${projectStyles['button-lg']} ${projectStyles['button']} `}
            >
              Explore the blog
            </button>
            <div className={styles['blog-cards-container']}>
              <BlogCard rootClassName="rootClassName"></BlogCard>
              <BlogCard
                text1="Aug 14, 2022"
                button="advertising"
                image_src="/playground_assets/rectangle%2099%20%5B1%5D-1500w.png"
                rootClassName="rootClassName1"
              ></BlogCard>
              <BlogCard
                text1="Jul 12, 2022"
                button="Branding"
                image_src="/playground_assets/unsplash_h7qmwoxf6z8-1500w.png"
              ></BlogCard>
            </div>
          </div>
        </div>
        <div
          className={` ${styles['Banner']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width5']} ${projectStyles['max-content-container']} `}
          >
            <span className={styles['text51']}>what are you waiting?</span>
            <h2
              className={` ${styles['text52']} ${projectStyles['heading2']} `}
            >
              <span>Let’s collaborate!</span>
            </h2>
            <span className={styles['text54']}>
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
              className={` ${styles['primary2']} ${projectStyles['button-lg']} ${projectStyles['button-secondary-white']} ${projectStyles['button']} `}
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
                <span className={styles['text58']}>Product</span>
                <span className={styles['text59']}>About</span>
                <span className={styles['text60']}>Portofolio</span>
                <span>Blog</span>
              </div>
              <div className={styles['navigate-container']}>
                <span className={styles['text62']}>Navigate</span>
                <span className={styles['text63']}>Copyrights</span>
                <span className={styles['text64']}>Sitemap</span>
                <span>Privacy Policy</span>
              </div>
              <div className={styles['contact-container']}>
                <span className={styles['text66']}>Contact Us</span>
                <span className={styles['text67']}>
                  <span>2157 Village View</span>
                  <br></br>
                  <span>
                    Drive, Old Fort
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    Myers Florida
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>33901</span>
                </span>
              </div>
            </div>
            <div className={styles['subscribe-container']}>
              <span className={styles['text75']}>
                Subscribe to our newsletter
              </span>
              <input
                type="text"
                placeholder="Enter your e-mail address"
                className={` ${styles['textinput']} ${projectStyles['input']} `}
              />
              <button
                className={` ${projectStyles['button-primary']} ${projectStyles['button']} `}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className={styles['Separator']}></div>
        <footer
          className={` ${styles['max-width7']} ${projectStyles['max-content-container']} `}
        >
          <img
            alt="image"
            src="/playground_assets/logo1-200h.png"
            className={styles['image1']}
          />
          <span className={styles['text76']}>
            <span>
              All rights recived @
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className={styles['text78']}>
              aesthetics
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              | Designed by
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className={styles['text80']}>teleporhq.io</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </footer>
      </div>
    </div>
  )
}

export default Home
