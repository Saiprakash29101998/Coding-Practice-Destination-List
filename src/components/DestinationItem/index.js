import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {name, imgUrl} = this.props
    return (
      <li className="destination-container">
        <img src={imgUrl} alt={name} className="image" />
        <p className="destination-title">{name}</p>
      </li>
    )
  }
}

export default DestinationItem
