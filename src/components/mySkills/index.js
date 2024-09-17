import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import './index.css'

const mySkillsList = [
  {
    id: uuid(),
    title: 'HTML',
    skillsImg:
      'https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png',
    gradientColors:
      'linear-gradient(90deg,rgba(248, 100, 37, 1) 0%,rgba(224, 78, 17, 1) 52%,rgba(211, 65, 3, 1) 100%)',
    skillType: 'WEB',
  },
  {
    id: uuid(),
    title: 'CSS',
    skillsImg: 'https://logospng.org/download/css-3/logo-css-3-1536.png',
    gradientColors:
      'linear-gradient(90deg,rgba(38, 77, 228, 1) 0%,rgba(16, 57, 208, 1) 52%,rgba(3, 45, 194, 1) 100%)',
    skillType: 'WEB',
  },
  {
    id: uuid(),
    title: 'JavaScript',
    skillsImg:
      'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    gradientColors:
      'linear-gradient(90deg,rgba(240, 219, 79, 1) 0%,rgba(240, 189, 79, 1) 52%,rgba(240, 159, 79, 1) 100%)',
    skillType: 'WEB',
  },
  {
    id: uuid(),
    title: 'Node.js',
    skillsImg:
      'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
    gradientColors:
      'linear-gradient(90deg, rgba(120,179,97,1) 35%, rgba(43,43,43,1) 63%)',
    skillType: 'WEB',
  },
  {
    id: uuid(),
    title: 'React.js',
    skillsImg:
      'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    gradientColors:
      'linear-gradient(90deg,rgba(97, 218, 251, 1) 0%,rgba(77, 198, 231, 1) 52%,rgba(57, 178, 211, 1) 100%)',
    skillType: 'WEB',
  },
  {
    id: uuid(),
    title: 'Express.js',
    skillsImg:
      'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
    gradientColors:
      'linear-gradient(90deg,rgba(64, 64, 64, 1) 0%,rgba(54, 54, 54, 1) 52%,rgba(44, 44, 44, 1) 100%)',
    skillType: 'WEB',
  },
  {
    id: uuid(),
    title: 'MongoDB',
    skillsImg:
      'https://www.pngkey.com/png/full/383-3838923_open-mongodb-icon.png',
    gradientColors:
      'linear-gradient(90deg,rgba(76, 175, 80, 1) 0%,rgba(66, 165, 70, 1) 52%,rgba(56, 155, 60, 1) 100%)',
    skillType: 'DATABASE',
  },
  {
    id: uuid(),
    title: 'Python',
    skillsImg:
      'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
    gradientColors:
      'linear-gradient(90deg, rgba(58,117,166,1) 49%, rgba(255,231,113,1) 61%)',
    skillType: 'PROGRAMMING',
  },
  {
    id: uuid(),
    title: 'JavaScript',
    skillsImg:
      'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    gradientColors:
      'linear-gradient(90deg,rgba(240, 219, 79, 1) 0%,rgba(240, 189, 79, 1) 52%,rgba(240, 159, 79, 1) 100%)',
    skillType: 'PROGRAMMING',
  },
  {
    id: uuid(),
    title: 'SQL',
    skillsImg:
      'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png',
    gradientColors:
      'linear-gradient(90deg, rgba(219,117,51,1) 35%, rgba(197,91,22,1) 63%)',
    skillType: 'DATABASE',
  },
]

class MySkills extends Component {
  state = {skillsList: mySkillsList}

  render() {
    const {skillsList} = this.state
    const webSkills = skillsList.filter(
      eachItem => eachItem.skillType === 'WEB',
    )
    const databaseSkills = skillsList.filter(
      eachItem => eachItem.skillType === 'DATABASE',
    )
    const programmingSkills = skillsList.filter(
      eachItem => eachItem.skillType === 'PROGRAMMING',
    )
    console.log(webSkills)
    return (
      <>
        <h1 className="titleMySkills_main">My Programming Skills :</h1>
        <h1 className="subHeading_mySkills">Web Technologies and Frameworks</h1>
        <div className="containerMySkills">
          {webSkills.map(eachItem => (
            <div
              className="mySkillItemOuterCard"
              key={eachItem.id}
              style={{
                background: `${eachItem.gradientColors}`,
              }}
            >
              <div className="mySkillItemInnerCard">
                <img
                  src={eachItem.skillsImg}
                  className="image_skillItem"
                  alt={eachItem.title}
                />
                <p className="para_title_skillItem">{eachItem.title}</p>
              </div>
            </div>
          ))}
        </div>
        <h1 className="subHeading_mySkills">Database and Frameworks</h1>
        <div className="containerMySkills">
          {databaseSkills.map(eachItem => (
            <div
              className="mySkillItemOuterCard"
              key={eachItem.id}
              style={{
                background: `${eachItem.gradientColors}`,
              }}
            >
              <div className="mySkillItemInnerCard">
                <img
                  src={eachItem.skillsImg}
                  className="image_skillItem"
                  alt={eachItem.title}
                />
                <p className="para_title_skillItem">{eachItem.title}</p>
              </div>
            </div>
          ))}
        </div>
        <h1 className="subHeading_mySkills">Programming Languages</h1>
        <div className="containerMySkills">
          {programmingSkills.map(eachItem => (
            <div
              className="mySkillItemOuterCard"
              key={eachItem.id}
              style={{
                background: `${eachItem.gradientColors}`,
              }}
            >
              <div className="mySkillItemInnerCard">
                <img
                  src={eachItem.skillsImg}
                  className="image_skillItem"
                  alt={eachItem.title}
                />
                <p className="para_title_skillItem">{eachItem.title}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    )
  }
}

export default MySkills
