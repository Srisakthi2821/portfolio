import {Component} from 'react'
import './index.css'

class WorkExperience extends Component {
  render() {
    return (
      <div className="Work_Experice_container">
        <h1 className="headingWorkExp">Work Experience</h1>
        <div className="containerWorkexp_lines">
          <hr className="hrlineWorkExp" />
          <div>
            <div className="container_worlItem f1stContainerWITEM">
              <img
                src="https://res.cloudinary.com/dnklin54k/image/upload/v1725970935/transparentfull_rjrmt4.png"
                alt="codeclause"
                className="workExpImage"
              />
            </div>
            <div className="floatingCard">
              <p className="paraWorkItem">
                I completed a Fullstack Development Internship from 3rd July to
                1st August in Coimbatore, Tamil Nadu.
              </p>
            </div>
          </div>
          <div>
            <div className="container_worlItem s2ndWorkItem">
              <img
                src="https://www.app.internship.codeclause.com/utilities/assets/img/logo/codeclause1.png"
                alt="codeclause"
                className="workExpImage"
              />
            </div>
            <div className="floatingCard2">
              <p className="paraWorkItem">
                I completed a Fullstack Development Internship remotely from
                October 2023 to November 2023.
              </p>
            </div>
          </div>
          <div>
            <div className="container_worlItem t3rdWorkItemCont">
              <img
                src="https://media.tenor.com/iyOOkFq5RLQAAAAi/what-looking.gif"
                alt="codeclause"
                className="workExpImage lookingJobImg"
              />
            </div>
            <div className="floatingCard3">
              <p className="paraWorkItem">
                Looking for opportunities to leverage my skills and contribute
                to a dynamic, growth-oriented team environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WorkExperience
