import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    const requiredDestinationsList = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="input-container">
          <input
            type="search"
            onChange={this.onChangeSearchInput}
            className="input"
            placeholder="Search"
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>
        <ul className="container">
          {requiredDestinationsList.map(eachItem => (
            <DestinationItem
              name={eachItem.name}
              imgUrl={eachItem.imgUrl}
              key={eachItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
