import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import CertificateItem from '../CertificateItem'

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

class MyCertificates extends Component {
  certificateClicked = id => {
    const {history} = this.props
    history.push(`/${id}`)
  }

  render() {
    return (
      <div className="container_certificates">
        {certificatesList.map(eachItem => (
          <CertificateItem
            key={eachItem.id}
            itemDetails={eachItem}
            certificateClicked={this.certificateClicked}
          />
        ))}
      </div>
    )
  }
}

export default MyCertificates
