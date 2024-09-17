import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const certificatesList = [
  {
    id: 1,
    imgUrl:
      'https://res.cloudinary.com/sri-frontend2804/image/upload/v1697620123/Screenshot_2023-10-18_143820_yafwsp.png',
    content: 'Certified For Building own static websites',
  },
  {
    id: 2,
    imgUrl:
      'https://res.cloudinary.com/sri-frontend2804/image/upload/v1697640965/Screenshot_2023-10-18_202451_vrxvab.png',
    content: 'Certified For Building own Dynamic websites',
  },
  {
    id: 3,
    imgUrl:
      'https://res.cloudinary.com/sri-frontend2804/image/upload/v1700634264/Screenshot_2023-11-22_115358_czvpfh.png',
    content: 'Certified For Completing Python Course',
  },
  {
    id: 4,
    imgUrl:
      'https://res.cloudinary.com/sri-frontend2804/image/upload/v1697643399/Screenshot_2023-10-18_204301_wod1sq.png',
    content:
      'Certified: 2nd price on website Making Competition in College Fest',
  },
  {
    id: 5,
    imgUrl:
      'https://res.cloudinary.com/sri-frontend2804/image/upload/v1697641864/Screenshot_96_ngx2ce.png',
    content: 'Certified For Python beginners',
  },
  {
    id: 6,
    imgUrl:
      'https://res.cloudinary.com/sri-frontend2804/image/upload/v1697643004/Screenshot_2023-10-18_205947_mlmbrk.png',
    content: 'Certified For Canva work with websites',
  },
  {
    id: 7,
    imgUrl:
      'https://res.cloudinary.com/sri-frontend2804/image/upload/v1697642656/Screenshot_2023-10-18_205313_lhlrt3.png',
    content: 'Certified For participating and complete a Ai chat Bot(Sri-AI)',
  },
]

class ViewaCertificate extends Component {
  state = {certificateId: null}

  componentDidMount() {
    this.getCertificateId()
  }

  getCertificateId = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({certificateId: parseInt(id, 10)})
  }

  render() {
    const {certificateId} = this.state
    const viewCertificate = certificatesList.find(
      eachItem => eachItem.id === certificateId,
    )

    if (!viewCertificate) {
      return <div>Certificate not found</div>
    }

    return (
      <div className="ViewaCertificate_container">
        <Link to="/MyCertificates">
          <div className="containerBackButton_viewacert">
            <i className="fas fa-chevron-circle-left" />
          </div>
        </Link>
        <img
          src={viewCertificate.imgUrl}
          alt={viewCertificate.content}
          className="viewCertificate_Img"
        />
        <p className="paraViewCertificate">{viewCertificate.content}</p>
      </div>
    )
  }
}

export default ViewaCertificate
