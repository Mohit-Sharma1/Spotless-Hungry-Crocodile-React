import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features1-container2 thq-section-max-width">
        <div className="features1-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features1-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features1-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features1-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features1-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features1-tab-horizontal1"
          >
            <div className="features1-divider-container1">
              {activeTab === 0 && <div className="features1-container3"></div>}
            </div>
            <div className="features1-content1">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features1-tab-horizontal2"
          >
            <div className="features1-divider-container2">
              {activeTab === 1 && <div className="features1-container4"></div>}
            </div>
            <div className="features1-content2">
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features1-tab-horizontal3"
          >
            <div className="features1-divider-container3">
              {activeTab === 2 && <div className="features1-container5"></div>}
            </div>
            <div className="features1-content3">
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature2ImgAlt: 'Illustration of Virtual Neighborhoods feature',
  feature1ImgSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature2Title: 'Virtual Neighborhoods (Collaboration & Communication)',
  feature3ImgSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature1ImgAlt: 'Illustration of Invisible Work Walls feature',
  feature3Title: 'Outcome Over Hours (Performance & Productivity)',
  feature1Description:
    'AI detects overworking patterns and sends smart nudges. Auto Do Not Disturb mode outside working hours. Personalized work rhythm tracking. Smart device integration (lights change color when work ends).',
  feature2Description:
    'Live team status board for seamless communication. AI-powered spontaneous interaction prompts. Virtual coworking spaces for specific teams. Break-time buddy system to reduce isolation.',
  feature1Title: 'Invisible Work Walls (Work-Life Balance)',
  feature3ImgAlt: 'Illustration of Outcome Over Hours feature',
  feature3Description:
    'AI-driven performance tracking based on completed work, not hours logged. Peer feedback integration for qualitative assessments. Work trends analytics and insights. Employee well-being scores to balance workload and stress.',
  feature2ImgSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Features1.propTypes = {
  feature2ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature3Title: PropTypes.string,
  feature1Description: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature3Description: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
}

export default Features1
