import {Component} from 'react'
import {Link} from 'react-router-dom'
import {BsXLg, BsFillBellFill} from 'react-icons/bs'
import {FaArrowTrendUp} from 'react-icons/fa6'
import {TypeAnimation} from 'react-type-animation'
import ContactBar from '../ContactBar'
import MySkills from '../mySkills'
import WorkExperience from '../WorkExperience'
import './index.css'

class Home extends Component {
  state = {introCardVisible: true}

  closeButton = () => {
    this.setState({introCardVisible: false})
  }

  onCloseIntroCardIcon = () => {
    this.setState({introCardVisible: false})
  }

  render() {
    const {introCardVisible} = this.state
    return (
      <>
        {introCardVisible ? (
          <div id="main-container">
            <div className="mx-auto message-ai" id="message-container">
              <div className="message-icon">
                <BsFillBellFill className="chat_logo_gliderCard" />
                <img
                  className="logo_message_ai d-none"
                  src="https://res.cloudinary.com/dnklin54k/image/upload/v1718711824/portfolio_logo_gmgelm.gif"
                />
              </div>
              <div className="text-right" id="close-icon-message">
                <BsXLg
                  className="close-icon-message"
                  onClick={this.onCloseIntroCardIcon}
                />
              </div>
              <hr className="message-line" />
              <h1 className="message_head">
                Hi, I am <span className="info-style">Srisakthi</span>
              </h1>
              <p className="para-message">
                Heartly Wellcomes You to visit my Portfolio !
              </p>

              <a
                className="linkFormName d-none d-md-block"
                href="https://forms.office.com/r/DKUBTbMfcN"
                target="_self"
              >
                <p className="para_enterName mdPara_click_register">
                  Click to Register Yourself !{' '}
                  <i className="far fa-thumbs-up" />
                </p>
              </a>

              <a
                className="linkFormName d-md-none"
                href="https://forms.office.com/r/DKUBTbMfcN"
                target="_self"
              >
                <p className="para_enterName">
                  Please Click Me <i className="far fa-thumbs-up" />
                </p>
              </a>
              <button
                className="btn btn-primary button_close_message"
                onClick={this.closeButton}
              >
                Go !
              </button>
            </div>
          </div>
        ) : (
          <p> </p>
        )}
        <div className="bottom_container_portfolio">
          <ContactBar />
          <div className=" start_inviting_portfolio " id="srihome">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-5 col-12">
                  <div className="background_image_home">
                    <img
                      src="https://res.cloudinary.com/dnklin54k/image/upload/v1724939438/a-removebg-preview_eu8nuu.png"
                      className="main_img_home"
                    />
                  </div>
                </div>
                <div className="col-md-1 d-none d-md-block">
                  <hr className="line_home" />
                </div>
                <div
                  className="col-md-6 col-12 small_mar_paras"
                  style={{marginLeft: '-50px'}}
                >
                  <h1 className="heading1_heading">
                    Hello, I&apos;m{' '}
                    <span className="name_home">Sri Sakthi</span>
                  </h1>
                  <p className="animation_text">
                    & I&apos;m a{'  '}&nbsp;
                    <TypeAnimation
                      className="animationText_values"
                      sequence={[
                        'Fullstack Developer', // Types 'Fullstack Developer'
                        1250, // Waits 1 second
                        'YouTuber', // Types 'YouTuber'
                        1250, // Waits 1 second
                        'Gamer', // Types 'Gamer'
                        1250, // Waits 1 second
                        'Entrepreneur', // Types 'Entrepreneur'
                        1250, // Waits 1 second
                        'Freelancer', // Types 'Freelancer'
                        1250, // Waits 1 second
                      ]}
                      wrapper="span" // You can change this to "div" or any other element
                      cursor
                      repeat={Infinity} // Repeat the animation infinitely
                      style={{
                        display: 'inline-block',
                        color: '#fd0089',
                        fontWeight: '600',
                      }}
                    />
                  </p>

                  <br />
                  <p className="availablity_para_text_home">
                    I&apos;m open for new Intern opportunities - if you would
                    like to discuss your project, I&apos;m available at <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="Personal_info_bg" id="personalinfo">
            <div className="">
              <h1 className="heading_presonal headline">Personal info</h1>
              <h1 className="myQualificationHeading_Personalinfo">
                My Qualification :
              </h1>
            </div>
            <div className="row mb-5">
              <div className="col-12 col-md-8">
                <p className="para1_personalinfo headline">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A passionate
                  web developer currently pursuing my studies. While I&apos;m
                  still a student, I&apos;ve embarked on an exciting journey
                  into the world of web development, where I&apos;ve been
                  exploring my creativity and specialize in both front-end and
                  back-end technologies, and I&apos;m committed to building
                  websites. Let&apos;s collaborate and turn your ideas into
                  reality with the enthusiasm of a student.
                </p>
              </div>
              <div className="col-12 col-md-3 d-none d-md-block container_perInfo_img">
                <img
                  src="https://res.cloudinary.com/sri-frontend2804/image/upload/v1706804438/3610606-removebg_errp0p.png"
                  className="personalinfo_image headline"
                />
              </div>
            </div>
            <MySkills />
          </div>
          <div className=" carousel_container" id="sectinoMySkillandExp">
            <h1 className="carousel_tools_container_heading">Tools I Use !</h1>
            <div
              id="carouselExampleIndicators"
              className=" carousel slide headline"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="3"
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="4"
                />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item car_11 active">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="background_carousel1 ">
                          <img
                            src="https://cdn-images-1.medium.com/max/1200/1*A6kkoOVJVpXPWewg8axc5w.png"
                            className="canvaloogo_car"
                          />
                          <img
                            src="https://marcas-logos.net/wp-content/uploads/2020/01/Canva-logo-768x432.png"
                            className="canvaloogo_txt"
                          />
                          <h1 className="ml-3 mt-2 text_head_canva">Expert</h1>
                          <p className="paragraph_canva_car ml-3">
                            Design tool for creating images, videos, web
                            graphics, and logos.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="background_carousel2 ">
                          <img
                            src="https://www.rosaluebbe.com/wp-content/uploads/2021/03/figma-1-logo-png-transparent-768x1152.png"
                            alt="figma"
                            className="ml-2 canvaloogo_car"
                          />
                          <img
                            src="https://www.ddplanet.ru/images/services/technologies/Figma_Logo.png"
                            className="canvaloogo_txt"
                          />
                          <h1 className="ml-3 mt-2 text_head_canva">
                            Intermediate
                          </h1>
                          <p className="paragraph_canva_car ml-3">
                            Collaborative design tool for creating user
                            interfaces and prototypes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="background_carousel3 ">
                          <img
                            src="https://cdn.b12.io/client_media/ZTxl6ZYR/5bb16c86-c6c9-11e6-a042-0242ac110002.firebase-transparent-tinypng.png"
                            className="canvaloogo_car"
                          />
                          <h1 className="ml-3 mt-2 text_head_canva">
                            Beginner
                          </h1>
                          <p className="paragraph_canva_car ml-3">
                            Backend platform used for secure authentication and
                            user login management.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="background_carousel4 ">
                          <img
                            src="https://www.pngarts.com/files/8/Github-Logo-Transparent-Background-PNG.png"
                            className="canvaloogo_car githubLogo_car"
                          />
                          <img
                            src="https://pngimg.com/uploads/github/github_PNG64.png"
                            className="canvaloogo_car githubTextImage"
                          />
                          <h1 className="ml-3 mt-2 text_head_canva">
                            Intermediate
                          </h1>
                          <p className="paragraph_canva_car ml-3">
                            GitHub adds collaboration and hosting features.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="background_carousel5 ">
                          <img
                            src="https://cdn.freebiesupply.com/logos/large/2x/git-icon-logo-png-transparent.png"
                            className="canvaloogo_car "
                          />
                          <img
                            src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/141_Git_logo_logos-1024.png"
                            className="canvaloogo_car"
                          />
                          <h1 className="ml-3 mt-2 text_head_canva">
                            Intermediate
                          </h1>
                          <p className="paragraph_canva_car ml-3">
                            Version control system for tracking changes in code
                            and collaboration
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <WorkExperience />
          <div className="container_navigateToMyProjects">
            <div className="col-12 col-md-6 mt-2">
              <div className="d-flex flex-row">
                <div className="container_item_projects_perinfo tagline">
                  <img
                    src="https://res.cloudinary.com/sri-frontend2804/image/upload/v1696760327/Untitled_design_nkpdru.png"
                    className="image_personalinfo_projectscomp"
                  />
                  <p className="para_item_proj_info">20+ Projects</p>
                </div>
                <div className="container_item_projects_perinfo tagline">
                  <img
                    src="https://res.cloudinary.com/sri-frontend2804/image/upload/v1696760850/Untitled_design_ijmnql.png"
                    className="image_personalinfo_projectscomp"
                  />
                  <p className="para_item_proj_info">Unique Designing</p>
                </div>
              </div>
              <div className="d-flex flex-row">
                <div className="container_item_projects_perinfo tagline">
                  <img
                    src="https://res.cloudinary.com/sri-frontend2804/image/upload/v1696760850/asde_c0vsnd.png"
                    className="image_personalinfo_projectscomp"
                  />
                  <p className="para_item_proj_info">
                    10,000+ <br />
                    Lines of Codes
                  </p>
                </div>
                <div className="container_item_projects_perinfo tagline">
                  <img
                    src="https://res.cloudinary.com/sri-frontend2804/image/upload/v1696760850/saf_qhnczw.png"
                    className="image_personalinfo_projectscomp"
                  />
                  <p className="para_item_proj_info">3+ Internships</p>
                </div>
              </div>
            </div>
            <div className="part_2_navigateProjectsContainer">
              <h2 className="descriptionNaviProj">
                Go to my projects and explore the creativity behind each design.
                Click &apos;View My Projects&apos; to dive in and see more!
              </h2>
              <Link to="/myprojects">
                <button className="buttonNavigateToMyprojects">
                  View MyProjects
                  <span className="spanElementProjView">
                    <FaArrowTrendUp />
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className=" needMe_container">
            <h1 className="heading_need_me tagline">
              Need a skilled WebDeveloper ?<br />
              Contact me and tell about your project!
            </h1>
            <hr className="need_me_hr_line" />
            <p className="para_need_cont tagline">
              Say Hello ! at{' '}
              <span className="para_email_need">
                {' '}
                Srisakthic2804@gmail.com{' '}
              </span>
              or<span className="para_email_need">+91 9361 9559 58</span>
            </p>
          </div>
          <div className="socialmedia_container pb-sm-5">
            <h1
              style={{fontSize: '3.4rem', textAlign: 'center'}}
              className="heading_need_me"
            >
              or
            </h1>
            <div className="contact_me_soc d-flex flex-row justify-content-center">
              <div>
                <h1 className="head_contact_last headline">
                  Get in Touch With me !
                </h1>
                <div className="d-flex flex-row justify-content-center">
                  <div className="d-flex ">
                    <a
                      href="https://api.whatsapp.com/send?phone=9361955958"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{color: 'black'}}
                    >
                      <div className="bg_soc_med_con_whatsapp mr-4 ">
                        <i
                          className="sm_sty fab fa-whatsapp"
                          style={{fontSize: '3.7rem'}}
                        />
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/yourx__sri/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{color: 'black'}}
                    >
                      <div className="bg_soc_med_con_insta mr-4 ">
                        <i
                          className="sm_sty fab fa-instagram"
                          style={{fontSize: '4rem'}}
                        />
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sri-sakthi-c-a12b21235/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{color: 'black'}}
                    >
                      <div className="bg_soc_med_con_linkedin mr-4 ">
                        <i
                          className="sm_sty fab fa-linkedin-in"
                          style={{fontSize: '3.7rem'}}
                        />
                      </div>
                    </a>
                    <a
                      href="https://github.com/Srisakthi2821"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{color: 'black'}}
                    >
                      <div className="bg_soc_med_con_Guihub mr-4 ">
                        <i
                          className="sm_sty fab fa-github"
                          style={{fontSize: '3.7rem'}}
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright_container">
            <div className="marque_copyright" scrollamount="5">
              Copyright © Srisakthi®. All rights reserved.
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Home
