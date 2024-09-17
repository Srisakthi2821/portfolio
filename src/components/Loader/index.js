import {Component} from 'react'
import './index.css'

class Loader extends Component {
  componentDidMount() {
    const {history} = this.props
    history.push('/')
    this.timer = setTimeout(() => {
      history.replace('/home')
    }, 1000)
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  render() {
    return (
      <div className="containerLoader">
        <div className="loader">
          Loading
          <span />
        </div>
      </div>
    )
  }
}
export default Loader
