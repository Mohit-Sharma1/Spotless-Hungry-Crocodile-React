import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  review3:
    'I love the Invisible Work Walls feature! It has helped me maintain a healthy work-life balance and avoid burnout.',
  review4:
    "WorkSphere's Outcome Over Hours approach has provided valuable insights into our team's performance and well-being. Highly recommended!",
  author2Name: 'Jane Smith',
  review1: '5/5 stars',
  author1Src:
    'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjIxNjY2NXw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Src:
    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjIxNjY2Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Position: 'Senior Manager',
  author4Position: 'HR Manager',
  content1:
    'WorkSphere has completely transformed how our team operates remotely. The AI-driven features have significantly improved our productivity and collaboration.',
  author4Src:
    'https://images.unsplash.com/photo-1613566028327-4a32e02f6ab1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjIxNjY2NXw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Name: 'John Doe',
  author2Position: 'Team Lead',
  author4Name: 'Sarah Lee',
  author4Alt: 'Image of Sarah Lee',
  author2Alt: 'Image of Jane Smith',
  author3Position: 'Software Engineer',
  author2Src:
    'https://images.unsplash.com/photo-1579380287268-aa88d096651c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjIxNjY2Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  review2:
    "WorkSphere's Virtual Neighborhoods have made communication seamless and efficient. It feels like we are working side by side even when miles apart.",
  author3Name: 'David Johnson',
  heading1: 'Testimonials',
  author1Alt: 'Image of John Doe',
  author3Alt: 'Image of David Johnson',
}

Testimonial.propTypes = {
  review3: PropTypes.string,
  review4: PropTypes.string,
  author2Name: PropTypes.string,
  review1: PropTypes.string,
  author1Src: PropTypes.string,
  author3Src: PropTypes.string,
  author1Position: PropTypes.string,
  author4Position: PropTypes.string,
  content1: PropTypes.string,
  author4Src: PropTypes.string,
  author1Name: PropTypes.string,
  author2Position: PropTypes.string,
  author4Name: PropTypes.string,
  author4Alt: PropTypes.string,
  author2Alt: PropTypes.string,
  author3Position: PropTypes.string,
  author2Src: PropTypes.string,
  review2: PropTypes.string,
  author3Name: PropTypes.string,
  heading1: PropTypes.string,
  author1Alt: PropTypes.string,
  author3Alt: PropTypes.string,
}

export default Testimonial
