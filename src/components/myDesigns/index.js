import {Component} from 'react'
import './index.css'

class MyDesigns extends Component {
  render() {
    return (
      <div className="coverContainer_myDEsign">
        <div className="container_mydesign">
          <h1 className="heading_buttonS">
            My Creative Buttons :
            <span className="d-none d-md-block hoverInstruct_buttons">
              Hover The Button To Animate
            </span>
            <span className="d-block d-md-none hoverInstruct_buttons">
              Click The Button To Animate
            </span>
          </h1>
          <div className="containerbuttons_mydesign">
            <div className="containerButton">
              <div className="buttonBuy">
                <img
                  className="imageButton"
                  src="http://www.pngplay.com/wp-content/uploads/2/Truck-PNG-Pic-Background.png"
                />
                <p className="para">Buy Now</p>
                <hr className="hrl" />
                <img
                  className="boxes"
                  src="https://www.freeiconspng.com/thumbs/courses-icon/courses-icon-4.png"
                />
                <p className="completedtxt">
                  Added <i className="fas fa-check-circle" />
                </p>
              </div>
            </div>
            <div className="containerButton">
              <button className="buttonbuynow_slide slide_bNow_Button">
                Slide to buy
              </button>
            </div>
            <div className="containerButton">
              <div className="Container_button_reflece">
                <h1 className="Text_reflextButton">Reflect</h1>
              </div>
            </div>
            <div className="containerButton">
              <button href="#" className="underlineButtonFromCenter">
                Center Animation
              </button>
            </div>
          </div>
          <p className="para_morebuttonsInfo">
            {' '}
            More buttons will be added soon!
            <img
              className="image_moreButtonSoon"
              src="https://static.vecteezy.com/system/resources/previews/021/013/504/original/coming-soon-icon-symbol-coming-soon-icon-symbol-illustration-on-transparent-background-free-png.png"
            />
          </p>
        </div>
      </div>
    )
  }
}

export default MyDesigns
