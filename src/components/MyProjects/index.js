import {Component} from 'react'
import './index.css'

class MyProjects extends Component {
  state = {
    card1Details: false,
    card2Details: false,
    card3Details: false,
    card4Details: false,
    card5Details: false,
    card6Details: false,
    card7Details: false,
    card8Details: false,
  }

  showCardProjectOne = () => {
    this.setState({card1Details: true})
  }

  hideCardProjectOne = () => {
    this.setState({card1Details: false})
  }

  showCardProjectTwo = () => {
    this.setState({card2Details: true})
  }

  hideCardProjectTwo = () => {
    this.setState({card2Details: false})
  }

  showCardProjectThree = () => {
    this.setState({card3Details: true})
  }

  hideCardProjectThree = () => {
    this.setState({card3Details: false})
  }

  showCardProjectFour = () => {
    this.setState({card4Details: true})
  }

  hideCardProjectFour = () => {
    this.setState({card4Details: false})
  }

  showCardProjectFive = () => {
    this.setState({card5Details: true})
  }

  hideCardProjectFive = () => {
    this.setState({card5Details: false})
  }

  showCardProjectSix = () => {
    this.setState({card6Details: true})
  }

  hideCardProjectSix = () => {
    this.setState({card6Details: false})
  }

  showCardProjectSeven = () => {
    this.setState({card7Details: true})
  }

  hideCardProjectSeven = () => {
    this.setState({card7Details: false})
  }

  showCardProjecteight = () => {
    this.setState({card8Details: true})
  }

  hideCardProjecteight = () => {
    this.setState({card8Details: false})
  }

  render() {
    const {
      card1Details,
      card2Details,
      card3Details,
      card4Details,
      card5Details,
      card6Details,
      card7Details,
      card8Details,
    } = this.state
    return (
      <div className="background_main_projects">
        <div className="container-fluid p-5">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="card_project_background text-center">
                <div
                  className="card_img_projct"
                  id="card_hoer"
                  onMouseOver={this.showCardProjectOne}
                  onMouseOut={this.hideCardProjectOne}
                  onFocus={this.showCardProjectOne}
                  onBlur={this.hideCardProjectOne}
                >
                  <video
                    id="video_celelemt"
                    className={`card_img_projct ${
                      card1Details ? 'd-none' : ''
                    }`}
                    muted
                    loop
                    autoPlay
                    src="https://res.cloudinary.com/sri-frontend2804/video/upload/v1685192904/zwiggy_qg21tk.mp4"
                  />
                  <div
                    id="contents_card"
                    className={card1Details ? '' : 'd-none'}
                  >
                    <h1 className="" id="heading_card">
                      Zwiggy
                    </h1>
                    <p className="prar_card_project " id="para_project">
                      This is a Food Ordering website, Users can easily choose
                      food and order on this website.
                    </p>
                    <a
                      href="https://zwiggydotcom.ccbp.tech/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="button_visit_Site "
                        id="button_external_pro_link"
                      >
                        Visit website{' '}
                        <i className="fas fa-external-link-alt icon_button_link" />
                      </button>
                    </a>
                  </div>
                  <div
                    className={`topIconContainer ${
                      card1Details ? 'd-none' : ''
                    }`}
                    id="icon_hover_container"
                  >
                    <h1 className="topSwipeIcon">
                      <i className="fas fa-long-arrow-alt-up" />
                    </h1>
                    <p
                      className="swipeTXt_pro d-none d-md-block"
                      id="text_hover"
                    >
                      Hover me to Get Details
                    </p>
                    <p className="swipeTXt_pro d-md-none" id="text_hover">
                      Click me to Get Details
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card_project_background text-center">
                <div
                  className="card_img_projct"
                  id="card_hoer2"
                  onMouseOver={this.showCardProjectSeven}
                  onMouseOut={this.hideCardProjectSeven}
                  onFocus={this.showCardProjectSeven}
                  onBlur={this.hideCardProjectSeven}
                >
                  <img
                    className={`card_img_projct ${
                      card7Details ? 'd-none' : ''
                    }`}
                    id="video_celelemt2"
                    style={{height: '16rem'}}
                    src="https://img.freepik.com/free-vector/people-making-list-illustration_53876-43029.jpg?t=st=1721810302~exp=1721813902~hmac=1c6f8a1bcc470681471e0703918a6deab4c535f4d3c62d31eb45c53f8a2586bc&w=900"
                  />
                  <div
                    id="contents_card2"
                    className={card7Details ? '' : 'd-none'}
                  >
                    <h1 className="" id="heading_card">
                      React ToDo App
                    </h1>
                    <p
                      className="prar_card_project todoAppproject"
                      id="para_project"
                    >
                      This is a comprehensive To-Do application for users. It
                      allows you to easily create, delete, edit, and view all
                      your tasks, helping you stay organized and manage your
                      time effectively.
                    </p>
                    <a
                      href="https://todointernasgn.ccbp.tech"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        style={{
                          background: '#eee',
                          color: 'black',
                          fontWeight: '600',
                        }}
                        className="button_visit_Site "
                        id="button_external_pro_link"
                      >
                        Visit website{' '}
                        <i className="fas fa-external-link-alt icon_button_link" />
                      </button>
                    </a>
                  </div>
                  <div
                    className={`topIconContainer ${
                      card7Details ? 'd-none' : ''
                    }`}
                    id="icon_hover_container2"
                  >
                    <h1 className="topSwipeIcon">
                      <i className="fas fa-long-arrow-alt-up" />
                    </h1>
                    <p
                      className="swipeTXt_pro d-none d-md-block"
                      id="text_hover"
                    >
                      Hover Me To Details
                    </p>
                    <p className="swipeTXt_pro d-md-none" id="text_hover">
                      Click me to Get Details
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card_project_background text-center">
                <div
                  className="card_img_projct"
                  id="card_hoer2"
                  onMouseOver={this.showCardProjecteight}
                  onMouseOut={this.hideCardProjecteight}
                  onFocus={this.showCardProjecteight}
                  onBlur={this.hideCardProjecteight}
                >
                  <img
                    className={`card_img_projct ${
                      card8Details ? 'd-none' : ''
                    }`}
                    id="video_celelemt2"
                    style={{height: '16rem'}}
                    src="https://img.freepik.com/free-vector/gradient-sad-emoji-illustration_52683-133713.jpg?t=st=1721811262~exp=1721814862~hmac=40136cc4571ee3ee942d518f362c9135e529e4c10e4214bd31405fba921868fc&w=740"
                  />
                  <div
                    id="contents_card2"
                    className={card8Details ? '' : 'd-none'}
                  >
                    <h1 className="" id="heading_card">
                      React-Emojie Game
                    </h1>
                    <p className="prar_card_project " id="para_project">
                      This is a simple Emojie Game, Developed using React.js.
                    </p>
                    <a
                      href="https://emojigamie.ccbp.tech"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        style={{
                          background: '#e80388',
                          color: 'white',
                          fontWeight: '600',
                        }}
                        className="button_visit_Site "
                        id="button_external_pro_link"
                      >
                        Visit website{' '}
                        <i className="fas fa-external-link-alt icon_button_link" />
                      </button>
                    </a>
                  </div>
                  <div
                    className={`topIconContainer ${
                      card8Details ? 'd-none' : ''
                    }`}
                    id="icon_hover_container2"
                  >
                    <h1 className="topSwipeIcon">
                      <i className="fas fa-long-arrow-alt-up" />
                    </h1>
                    <p
                      className="swipeTXt_pro d-none d-md-block"
                      id="text_hover"
                    >
                      Hover Me To Details
                    </p>
                    <p className="swipeTXt_pro d-md-none" id="text_hover">
                      Click me to Get Details
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card_project_background text-center">
                <div
                  className="card_img_projct"
                  id="card_hoer2"
                  onMouseOver={this.showCardProjectTwo}
                  onMouseOut={this.hideCardProjectTwo}
                  onFocus={this.showCardProjectTwo}
                  onBlur={this.hideCardProjectTwo}
                >
                  <img
                    className={`card_img_projct ${
                      card2Details ? 'd-none' : ''
                    }`}
                    id="video_celelemt2"
                    style={{height: '16rem'}}
                    src="https://cdn-icons-png.flaticon.com/512/1041/1041373.png"
                  />
                  <div
                    id="contents_card2"
                    className={card2Details ? '' : 'd-none'}
                  >
                    <h1 className="" id="heading_card">
                      Better With Cookie
                    </h1>
                    <p className="prar_card_project " id="para_project">
                      It is a great food recipe website for users, the recipe is
                      provided through embedded YouTube tutorials.
                    </p>
                    <a
                      href="https://beterwithcokie.ccbp.tech/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        style={{
                          background: '#ffe6a4',
                          color: 'black',
                          fontWeight: '600',
                        }}
                        className="button_visit_Site "
                        id="button_external_pro_link"
                      >
                        Visit website{' '}
                        <i className="fas fa-external-link-alt icon_button_link" />
                      </button>
                    </a>
                  </div>
                  <div
                    className={`topIconContainer ${
                      card2Details ? 'd-none' : ''
                    }`}
                    id="icon_hover_container2"
                  >
                    <h1 className="topSwipeIcon">
                      <i className="fas fa-long-arrow-alt-up" />
                    </h1>
                    <p
                      className="swipeTXt_pro d-none d-md-block"
                      id="text_hover"
                    >
                      Hover Me To Details
                    </p>
                    <p className="swipeTXt_pro d-md-none" id="text_hover">
                      Click me to Get Details
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card_project_background text-center">
                <div
                  className="card_img_projct"
                  id="card_hoer3"
                  onMouseOver={this.showCardProjectThree}
                  onMouseOut={this.hideCardProjectThree}
                  onFocus={this.showCardProjectThree}
                  onBlur={this.hideCardProjectThree}
                >
                  <img
                    id="video_celelemt3"
                    className={`card_img_projct ${
                      card3Details ? 'd-none' : ''
                    }`}
                    style={{height: '16rem'}}
                    src="http://aurora.ekof.bg.ac.rs/~s150976/Slike/smart-resume-builder-cv-free-logo.png"
                  />
                  <div
                    id="contents_card3"
                    className={card3Details ? '' : 'd-none'}
                  >
                    <h1 className="" id="heading_card">
                      Resume Builder
                    </h1>
                    <p className="prar_card_project" id="para_project">
                      A professional resume builder web application for
                      freshers, those who do not know about an actual resume.
                    </p>
                    <a
                      href="https://resumebuildrr.ccbp.tech/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="button_visit_Site "
                        style={{
                          background: '#00afef',
                          color: 'white',
                          fontWeight: '600',
                        }}
                        id="button_external_pro_link"
                      >
                        Visit website{' '}
                        <i className="fas fa-external-link-alt icon_button_link" />
                      </button>
                    </a>
                  </div>
                  <div
                    className={`topIconContainer ${
                      card3Details ? 'd-none' : ''
                    }`}
                    id="icon_hover_container3"
                  >
                    <h1 className="topSwipeIcon">
                      <i className="fas fa-long-arrow-alt-up" />
                    </h1>
                    <p
                      className="swipeTXt_pro d-none d-md-block"
                      id="text_hover"
                    >
                      Hover Me To Details
                    </p>
                    <p className="swipeTXt_pro d-md-none" id="text_hover">
                      Click me to Get Details
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card_project_background text-center">
                <div
                  className="card_img_projct"
                  id="card_hoer4"
                  onMouseOver={this.showCardProjectFour}
                  onMouseOut={this.hideCardProjectFour}
                  onFocus={this.showCardProjectFour}
                  onBlur={this.hideCardProjectFour}
                >
                  <img
                    className={`card_img_projct ${
                      card4Details ? 'd-none' : ''
                    }`}
                    id="video_celelemt4"
                    style={{height: '16rem'}}
                    src="https://www.saratechnologies.com/images/chatbot-img.png"
                  />
                  <div
                    id="contents_card4"
                    className={card4Details ? '' : 'd-none'}
                  >
                    <h1 className="" id="heading_card">
                      SRI-Ai
                    </h1>
                    <p className="prar_card_project" id="para_project">
                      It is a great Chat-Bot like a CHAT-GPT,User can clarify
                      the common doubts in it,and make a conversation like user
                      friendly.
                    </p>
                    <a
                      href="https://aboutmyportfolio.ccbp.tech/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="button_visit_Site "
                        id="button_external_pro_link"
                      >
                        Visit website{' '}
                        <i className="fas fa-external-link-alt icon_button_link" />
                      </button>
                    </a>
                  </div>
                  <div
                    className={`topIconContainer ${
                      card4Details ? 'd-none' : ''
                    }`}
                    id="icon_hover_container4"
                  >
                    <h1 className="topSwipeIcon">
                      <i className="fas fa-long-arrow-alt-up" />
                    </h1>
                    <p
                      className="swipeTXt_pro d-none d-md-block"
                      id="text_hover"
                    >
                      Hover Me To Details
                    </p>
                    <p className="swipeTXt_pro d-md-none" id="text_hover">
                      Click me to Get Details
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card_project_background text-center">
                <div
                  className="card_img_projct"
                  id="card_hoer5"
                  onMouseOver={this.showCardProjectFive}
                  onMouseOut={this.hideCardProjectFive}
                  onFocus={this.showCardProjectFive}
                  onBlur={this.hideCardProjectFive}
                >
                  <img
                    className={`card_img_projct ${
                      card5Details ? 'd-none' : ''
                    }`}
                    id="video_celelemt5"
                    style={{height: '16rem'}}
                    src="https://3.bp.blogspot.com/-SufMmRh2h3g/WNFQaRvBGRI/AAAAAAAADRY/Y3PEEB4rwZEtN-PzP5-Pr45WHDXjFupSACEw/s1600/hero-e49112ac2753496e2182980c4e186b35.png"
                  />
                  <div
                    id="contents_card5"
                    className={card5Details ? '' : 'd-none'}
                  >
                    <h1 className="" id="heading_card">
                      VR Products
                    </h1>
                    <p className="prar_card_project" id="para_project">
                      It one of the vr gaming products selling website,various
                      vr-gaming accesories were buying in this site easily..
                    </p>
                    <a
                      href="https://arvrdotcom.ccbp.tech/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="button_visit_Site "
                        id="button_external_pro_link"
                      >
                        Visit website{' '}
                        <i className="fas fa-external-link-alt icon_button_link" />
                      </button>
                    </a>
                  </div>
                  <div
                    className={`topIconContainer ${
                      card5Details ? 'd-none' : ''
                    }`}
                    id="icon_hover_container5"
                  >
                    <h1 className="topSwipeIcon">
                      <i className="fas fa-long-arrow-alt-up" />
                    </h1>
                    <p
                      className="swipeTXt_pro d-none d-md-block"
                      id="text_hover"
                    >
                      Hover Me To Details
                    </p>
                    <p className="swipeTXt_pro d-md-none" id="text_hover">
                      Click me to Get Details
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card_project_background text-center">
                <div
                  className="card_img_projct"
                  id="card_hoer6"
                  onMouseOver={this.showCardProjectSix}
                  onMouseOut={this.hideCardProjectSix}
                  onFocus={this.showCardProjectSix}
                  onBlur={this.hideCardProjectSix}
                >
                  <img
                    className={`card_img_projct ${
                      card6Details ? 'd-none' : ''
                    }`}
                    id="video_celelemt6"
                    style={{height: '16rem'}}
                    src="https://www.pngall.com/wp-content/uploads/2017/01/Weather-Report-PNG-File.png"
                  />
                  <div
                    id="contents_card6"
                    className={card6Details ? '' : 'd-none'}
                  >
                    <h1 className="" id="heading_card">
                      Weather Forecasting
                    </h1>
                    <p className="prar_card_project" id="para_project">
                      In this website user can able to easily findout the
                      weather of a particular location around the world.
                    </p>
                    <a
                      href="https://weatherchecker.ccbp.tech/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="button_visit_Site "
                        id="button_external_pro_link"
                      >
                        Visit website{' '}
                        <i className="fas fa-external-link-alt icon_button_link" />
                      </button>
                    </a>
                  </div>
                  <div
                    className={`topIconContainer ${
                      card6Details ? 'd-none' : ''
                    }`}
                    id="icon_hover_container6"
                  >
                    <h1 className="topSwipeIcon">
                      <i className="fas fa-long-arrow-alt-up" />
                    </h1>
                    <p
                      className="swipeTXt_pro d-none d-md-block"
                      id="text_hover"
                    >
                      Hover Me To Details
                    </p>
                    <p className="swipeTXt_pro d-md-none" id="text_hover">
                      Click me to Get Details
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MyProjects
