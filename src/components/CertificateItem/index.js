import {Link} from 'react-router-dom'
import './index.css'

const CertificateItem = props => {
  const {itemDetails, certificateClicked} = props
  const {id, imgUrl, content} = itemDetails
  const clickedCertificate = () => {
    certificateClicked(id)
  }
  return (
    <button
      className="col-12 col-md-4 p-3 mb-2 containerAllc_cerItem"
      onClick={clickedCertificate}
    >
      <div
        className="card_certificate_select"
        id="card_certificate1"
        value="StaticCer"
      >
        <img src={imgUrl} className="certificate_img" />
        <p className="certificate_name">{content}</p>
      </div>
    </button>
  )
}

export default CertificateItem
