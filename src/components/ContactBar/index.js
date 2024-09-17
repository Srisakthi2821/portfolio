import {
  RiWhatsappFill,
  RiLinkedinBoxFill,
  RiInstagramFill,
  RiGithubFill,
} from 'react-icons/ri'
import './index.css'

const ContactBar = () => (
  <div className="containerContactBar">
    <a
      href="https://api.whatsapp.com/send?phone=9361955958"
      target="_blank"
      rel="noopener noreferrer"
    >
      <RiWhatsappFill className="Appsidebar whatsAppSideBar" />
    </a>
    <a
      href="https://www.linkedin.com/in/sri-sakthi-c-a12b21235/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <RiLinkedinBoxFill className="Appsidebar linkedinAppSidebar" />
    </a>
    <a
      href="https://www.instagram.com/yourx__sri/?hl=en"
      target="_blank"
      rel="noopener noreferrer"
    >
      <RiInstagramFill className="Appsidebar instaAppSidebar" />
    </a>
    <a
      href="https://github.com/Srisakthi2821"
      target="_blank"
      rel="noopener noreferrer"
    >
      <RiGithubFill className="Appsidebar githubAppSidebar" />
    </a>
  </div>
)

export default ContactBar
